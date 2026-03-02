// ===== CONTROL DE HERRAMIENTAS — APP.JS =====

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', async () => {
    // Register Service Worker
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js').catch(() => { });
    }

    // Init tabs
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', () => switchTab(tab.dataset.tab));
    });

    // Buttons
    document.getElementById('btnConfig').addEventListener('click', () => abrirModal('modalConfig'));
    document.getElementById('btnNuevoPrestamo').addEventListener('click', abrirNuevoPrestamo);
    document.getElementById('btnHistorial').addEventListener('click', mostrarHistorial);
    document.getElementById('btnAddHerramienta').addEventListener('click', () => abrirModalHerramienta());
    document.getElementById('btnAddTrabajador').addEventListener('click', () => abrirModalTrabajador());
    document.getElementById('btnExportar').addEventListener('click', exportarDatos);
    document.getElementById('inputImportar').addEventListener('change', importarDatos);
    document.getElementById('btnCompartirWA').addEventListener('click', compartirWhatsApp);
    document.getElementById('btnConfirmarDevolucion').addEventListener('click', confirmarDevolucion);

    // Forms
    document.getElementById('formHerramienta').addEventListener('submit', guardarHerramienta);
    document.getElementById('formTrabajador').addEventListener('submit', guardarTrabajador);
    document.getElementById('formPrestamo').addEventListener('submit', guardarPrestamo);

    // Search
    document.getElementById('searchHerramientas').addEventListener('input', renderHerramientas);
    document.getElementById('searchTrabajadores').addEventListener('input', renderTrabajadores);

    // Close modals on overlay click
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) cerrarModal(overlay.id);
        });
    });

    // Load data
    await refreshAll();
});

// ===== TAB NAVIGATION =====
function switchTab(tabName) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
    document.getElementById(`view-${tabName}`).classList.add('active');
}

// ===== MODALS =====
function abrirModal(id) {
    document.getElementById(id).classList.add('active');
}

function cerrarModal(id) {
    document.getElementById(id).classList.remove('active');
}

// ===== TOAST =====
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2500);
}

// ===== REFRESH ALL =====
async function refreshAll() {
    await renderPrestamosActivos();
    await renderHerramientas();
    await renderTrabajadores();
}

// ===== HERRAMIENTAS CRUD =====
function abrirModalHerramienta(herramienta = null) {
    document.getElementById('modalHerramientaTitle').textContent = herramienta ? 'Editar Herramienta' : 'Agregar Herramienta';
    document.getElementById('herramientaId').value = herramienta ? herramienta.id : '';
    document.getElementById('herramientaNombre').value = herramienta ? herramienta.nombre : '';
    document.getElementById('herramientaCodigo').value = herramienta ? (herramienta.codigo || '') : '';
    document.getElementById('herramientaNotas').value = herramienta ? (herramienta.notas || '') : '';
    abrirModal('modalHerramienta');
}

async function guardarHerramienta(e) {
    e.preventDefault();
    const id = document.getElementById('herramientaId').value;
    const data = {
        nombre: document.getElementById('herramientaNombre').value.trim(),
        codigo: document.getElementById('herramientaCodigo').value.trim(),
        notas: document.getElementById('herramientaNotas').value.trim(),
        fechaCreacion: new Date().toISOString(),
    };

    if (id) {
        data.id = parseInt(id);
        await dbPut('herramientas', data);
        showToast('✅ Herramienta actualizada');
    } else {
        await dbAdd('herramientas', data);
        showToast('✅ Herramienta agregada');
    }

    cerrarModal('modalHerramienta');
    document.getElementById('formHerramienta').reset();
    await refreshAll();
}

async function eliminarHerramienta(id) {
    if (!confirm('¿Eliminar esta herramienta?')) return;
    // Check if it's currently loaned
    const prestamos = await dbGetByIndex('prestamos', 'herramientaId', id);
    const activo = prestamos.find(p => p.activo);
    if (activo) {
        showToast('⚠️ No se puede eliminar, está prestada');
        return;
    }
    await dbDelete('herramientas', id);
    showToast('🗑️ Herramienta eliminada');
    await refreshAll();
}

async function renderHerramientas() {
    const search = document.getElementById('searchHerramientas').value.toLowerCase();
    let herramientas = await dbGetAll('herramientas');
    if (search) {
        herramientas = herramientas.filter(h =>
            h.nombre.toLowerCase().includes(search) ||
            (h.codigo && h.codigo.toLowerCase().includes(search))
        );
    }
    const prestamos = await dbGetAll('prestamos');
    const prestamosActivos = prestamos.filter(p => p.activo);
    const trabajadores = await dbGetAll('trabajadores');
    const container = document.getElementById('listaHerramientas');

    if (herramientas.length === 0) {
        container.innerHTML = '<p class="empty-state">No hay herramientas registradas</p>';
        return;
    }

    container.innerHTML = herramientas.map(h => {
        const prestamo = prestamosActivos.find(p => p.herramientaId === h.id);
        const trabajador = prestamo ? trabajadores.find(t => t.id === prestamo.trabajadorId) : null;
        const statusBadge = prestamo
            ? `<span class="badge badge-red">Prestada</span>`
            : `<span class="badge badge-green">Disponible</span>`;
        const prestamoInfo = prestamo && trabajador
            ? `<div class="card-subtitle">→ ${trabajador.nombre} · Desde: ${formatHora(prestamo.fecha)}</div>`
            : '';
        const codigo = h.codigo ? `<span class="card-subtitle" style="display:inline;margin-left:8px;font-size:0.75rem;">${h.codigo}</span>` : '';

        return `
      <div class="card">
        <div class="card-header">
          <div>
            <span class="card-title">${h.nombre}</span>${codigo}
          </div>
          <div class="card-actions">
            ${statusBadge}
          </div>
        </div>
        ${prestamoInfo}
        <div class="card-actions" style="margin-top:8px;">
          <button class="btn-secondary btn-small" onclick="abrirModalHerramienta(${JSON.stringify(h).replace(/"/g, '&quot;')})">✏️ Editar</button>
          <button class="btn-danger btn-small" onclick="eliminarHerramienta(${h.id})">🗑️</button>
        </div>
      </div>
    `;
    }).join('');
}

// ===== TRABAJADORES CRUD =====
function abrirModalTrabajador(trabajador = null) {
    document.getElementById('modalTrabajadorTitle').textContent = trabajador ? 'Editar Trabajador' : 'Agregar Trabajador';
    document.getElementById('trabajadorId').value = trabajador ? trabajador.id : '';
    document.getElementById('trabajadorNombre').value = trabajador ? trabajador.nombre : '';
    document.getElementById('trabajadorPuesto').value = trabajador ? (trabajador.puesto || '') : '';
    abrirModal('modalTrabajador');
}

async function guardarTrabajador(e) {
    e.preventDefault();
    const id = document.getElementById('trabajadorId').value;
    const data = {
        nombre: document.getElementById('trabajadorNombre').value.trim(),
        puesto: document.getElementById('trabajadorPuesto').value.trim(),
    };

    if (id) {
        data.id = parseInt(id);
        await dbPut('trabajadores', data);
        showToast('✅ Trabajador actualizado');
    } else {
        await dbAdd('trabajadores', data);
        showToast('✅ Trabajador agregado');
    }

    cerrarModal('modalTrabajador');
    document.getElementById('formTrabajador').reset();
    await refreshAll();
}

async function eliminarTrabajador(id) {
    if (!confirm('¿Eliminar este trabajador?')) return;
    const prestamos = await dbGetByIndex('prestamos', 'trabajadorId', id);
    const activo = prestamos.find(p => p.activo);
    if (activo) {
        showToast('⚠️ No se puede eliminar, tiene herramientas prestadas');
        return;
    }
    await dbDelete('trabajadores', id);
    showToast('🗑️ Trabajador eliminado');
    await refreshAll();
}

async function renderTrabajadores() {
    const search = document.getElementById('searchTrabajadores').value.toLowerCase();
    let trabajadores = await dbGetAll('trabajadores');
    if (search) {
        trabajadores = trabajadores.filter(t => t.nombre.toLowerCase().includes(search));
    }
    const container = document.getElementById('listaTrabajadores');

    if (trabajadores.length === 0) {
        container.innerHTML = '<p class="empty-state">No hay trabajadores registrados</p>';
        return;
    }

    // Get active loan counts
    const prestamos = await dbGetAll('prestamos');
    const activos = prestamos.filter(p => p.activo);

    container.innerHTML = trabajadores.map(t => {
        const count = activos.filter(p => p.trabajadorId === t.id).length;
        const countBadge = count > 0
            ? `<span class="badge badge-yellow">${count} herr.</span>`
            : '';
        const puesto = t.puesto ? `<div class="card-subtitle">${t.puesto}</div>` : '';

        return `
      <div class="card">
        <div class="card-header">
          <div>
            <span class="card-title">${t.nombre}</span>
            ${puesto}
          </div>
          <div class="card-actions">
            ${countBadge}
          </div>
        </div>
        <div class="card-actions" style="margin-top:8px;">
          <button class="btn-secondary btn-small" onclick="abrirModalTrabajador(${JSON.stringify(t).replace(/"/g, '&quot;')})">✏️ Editar</button>
          <button class="btn-danger btn-small" onclick="eliminarTrabajador(${t.id})">🗑️</button>
        </div>
      </div>
    `;
    }).join('');
}

// ===== PRÉSTAMOS =====
async function abrirNuevoPrestamo() {
    const trabajadores = await dbGetAll('trabajadores');
    const herramientas = await dbGetAll('herramientas');
    const prestamos = await dbGetAll('prestamos');
    const prestamosActivos = prestamos.filter(p => p.activo);
    const herramientasPrestadas = new Set(prestamosActivos.map(p => p.herramientaId));

    // Fill worker select
    const select = document.getElementById('prestamoTrabajador');
    select.innerHTML = '<option value="">— Seleccionar trabajador —</option>' +
        trabajadores.map(t => `<option value="${t.id}">${t.nombre}${t.puesto ? ' (' + t.puesto + ')' : ''}</option>`).join('');

    // Fill available tools checklist
    const checklist = document.getElementById('checklistHerramientas');
    const disponibles = herramientas.filter(h => !herramientasPrestadas.has(h.id));

    if (disponibles.length === 0) {
        checklist.innerHTML = '<p class="empty-state">Todas las herramientas están prestadas</p>';
    } else {
        checklist.innerHTML = disponibles.map(h => `
      <label class="checklist-item">
        <input type="checkbox" value="${h.id}">
        <div>
          <div class="checklist-item-label">${h.nombre}</div>
          ${h.codigo ? `<div class="checklist-item-code">${h.codigo}</div>` : ''}
        </div>
      </label>
    `).join('');
    }

    // Auto-fill date/time
    const now = new Date();
    document.getElementById('prestamoFecha').value = formatFecha(now);
    document.getElementById('prestamoHora').value = formatHora(now);
    document.getElementById('prestamoNotas').value = '';

    abrirModal('modalPrestamo');
}

async function guardarPrestamo(e) {
    e.preventDefault();
    const trabajadorId = parseInt(document.getElementById('prestamoTrabajador').value);
    const notas = document.getElementById('prestamoNotas').value.trim();
    const checked = document.querySelectorAll('#checklistHerramientas input[type="checkbox"]:checked');

    if (!trabajadorId) {
        showToast('⚠️ Selecciona un trabajador');
        return;
    }
    if (checked.length === 0) {
        showToast('⚠️ Selecciona al menos una herramienta');
        return;
    }

    const fecha = new Date().toISOString();
    for (const cb of checked) {
        await dbAdd('prestamos', {
            herramientaId: parseInt(cb.value),
            trabajadorId,
            fecha,
            notas,
            activo: 1,
            fechaDevolucion: null,
        });
    }

    cerrarModal('modalPrestamo');
    showToast(`✅ ${checked.length} herramienta${checked.length > 1 ? 's' : ''} asignada${checked.length > 1 ? 's' : ''}`);
    await refreshAll();
}

// ===== DEVOLUCIONES =====
let devolucionTrabajadorId = null;

async function abrirDevolucion(trabajadorId) {
    devolucionTrabajadorId = trabajadorId;
    const trabajador = await dbGet('trabajadores', trabajadorId);
    const prestamos = await dbGetAll('prestamos');
    const activos = prestamos.filter(p => p.activo && p.trabajadorId === trabajadorId);
    const herramientas = await dbGetAll('herramientas');

    document.getElementById('devolucionTrabajadorNombre').textContent = `👷 ${trabajador.nombre}`;

    const checklist = document.getElementById('checklistDevolucion');
    checklist.innerHTML = activos.map(p => {
        const h = herramientas.find(hr => hr.id === p.herramientaId);
        return `
      <label class="checklist-item">
        <input type="checkbox" value="${p.id}" checked>
        <div>
          <div class="checklist-item-label">${h ? h.nombre : 'Herramienta desconocida'}</div>
          <div class="checklist-item-code">Prestada: ${formatHora(p.fecha)}</div>
        </div>
      </label>
    `;
    }).join('');

    abrirModal('modalDevolucion');
}

async function confirmarDevolucion() {
    const checked = document.querySelectorAll('#checklistDevolucion input[type="checkbox"]:checked');
    if (checked.length === 0) {
        showToast('⚠️ Selecciona al menos una herramienta');
        return;
    }

    const fechaDevolucion = new Date().toISOString();
    for (const cb of checked) {
        const prestamo = await dbGet('prestamos', parseInt(cb.value));
        prestamo.activo = 0;
        prestamo.fechaDevolucion = fechaDevolucion;
        await dbPut('prestamos', prestamo);
    }

    cerrarModal('modalDevolucion');
    showToast(`✅ ${checked.length} herramienta${checked.length > 1 ? 's' : ''} devuelta${checked.length > 1 ? 's' : ''}`);
    await refreshAll();
}

async function devolverUna(prestamoId) {
    const prestamo = await dbGet('prestamos', prestamoId);
    prestamo.activo = 0;
    prestamo.fechaDevolucion = new Date().toISOString();
    await dbPut('prestamos', prestamo);
    showToast('✅ Herramienta devuelta');
    await refreshAll();
}

// ===== RENDER PRÉSTAMOS ACTIVOS =====
async function renderPrestamosActivos() {
    const prestamos = await dbGetAll('prestamos');
    const herramientas = await dbGetAll('herramientas');
    const trabajadores = await dbGetAll('trabajadores');

    const activos = prestamos.filter(p => p.activo);
    const totalHerr = herramientas.length;
    const prestadas = activos.length;
    const disponibles = totalHerr - prestadas;

    // Update stats
    document.getElementById('statTotal').textContent = totalHerr;
    document.getElementById('statDisponibles').textContent = disponibles;
    document.getElementById('statPrestadas').textContent = prestadas;

    const container = document.getElementById('listaPrestamos');

    if (activos.length === 0) {
        container.innerHTML = '<p class="empty-state">No hay préstamos activos<br><small>Usa "Nuevo Préstamo" para asignar herramientas</small></p>';
        return;
    }

    // Group by worker
    const groups = {};
    for (const p of activos) {
        if (!groups[p.trabajadorId]) groups[p.trabajadorId] = [];
        groups[p.trabajadorId].push(p);
    }

    const colors = ['#ff6b35', '#2ecc71', '#3498db', '#9b59b6', '#e74c3c', '#f39c12', '#1abc9c', '#e67e22'];

    container.innerHTML = Object.entries(groups).map(([wId, loans]) => {
        const worker = trabajadores.find(t => t.id === parseInt(wId));
        if (!worker) return '';
        const initials = worker.nombre.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
        const colorIdx = parseInt(wId) % colors.length;

        const toolsHtml = loans.map(p => {
            const h = herramientas.find(hr => hr.id === p.herramientaId);
            return `
        <div class="tool-item">
          <div>
            <div class="tool-item-name">${h ? h.nombre : '?'}${h && h.codigo ? ` <small style="color:var(--text-muted)">(${h.codigo})</small>` : ''}</div>
            <div class="tool-item-time">Desde: ${formatHora(p.fecha)}</div>
          </div>
          <button class="btn-devolver" onclick="devolverUna(${p.id})">Devolver</button>
        </div>
      `;
        }).join('');

        return `
      <div class="worker-group">
        <div class="worker-group-header">
          <div class="worker-info">
            <div class="worker-avatar" style="background:${colors[colorIdx]};">${initials}</div>
            <div>
              <div class="worker-name">${worker.nombre}</div>
              <div class="worker-tools-count">${loans.length} herramienta${loans.length > 1 ? 's' : ''}</div>
            </div>
          </div>
          <button class="btn-devolver" onclick="abrirDevolucion(${wId})">Devolver Todas</button>
        </div>
        ${toolsHtml}
      </div>
    `;
    }).join('');
}

// ===== HISTORIAL =====
async function mostrarHistorial() {
    const prestamos = await dbGetAll('prestamos');
    const herramientas = await dbGetAll('herramientas');
    const trabajadores = await dbGetAll('trabajadores');

    const hoy = new Date().toISOString().slice(0, 10);
    const delHoy = prestamos.filter(p => {
        return p.fecha.slice(0, 10) === hoy || (p.fechaDevolucion && p.fechaDevolucion.slice(0, 10) === hoy);
    }).sort((a, b) => {
        const dateA = a.fechaDevolucion || a.fecha;
        const dateB = b.fechaDevolucion || b.fecha;
        return dateB.localeCompare(dateA);
    });

    const container = document.getElementById('listaHistorial');

    if (delHoy.length === 0) {
        container.innerHTML = '<p class="empty-state">No hay registros hoy</p>';
    } else {
        container.innerHTML = delHoy.map(p => {
            const h = herramientas.find(hr => hr.id === p.herramientaId);
            const w = trabajadores.find(t => t.id === p.trabajadorId);
            const esDevolucion = p.fechaDevolucion && p.fechaDevolucion.slice(0, 10) === hoy;
            const tipo = p.activo ? '🔴' : (esDevolucion ? '🟢' : '🔴');
            const accion = p.activo ? 'Prestada' : (esDevolucion ? 'Devuelta' : 'Prestada');
            const hora = esDevolucion && !p.activo ? formatHora(p.fechaDevolucion) : formatHora(p.fecha);

            return `
        <div class="historial-item">
          <div class="historial-tipo">${tipo}</div>
          <div class="historial-detail">
            <strong>${h ? h.nombre : '?'} → ${w ? w.nombre : '?'}</strong>
            <span>${accion} a las ${hora}</span>
          </div>
        </div>
      `;
        }).join('');
    }

    abrirModal('modalHistorial');
}

// ===== EXPORTAR / IMPORTAR =====
async function exportarDatos() {
    try {
        const json = await exportarRespaldo();
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        const fecha = new Date().toISOString().slice(0, 10);
        const hora = new Date().toTimeString().slice(0, 5).replace(':', '');
        a.href = url;
        a.download = `respaldo-obra-${fecha}-${hora}.json`;
        a.click();
        URL.revokeObjectURL(url);
        showToast('📤 Respaldo exportado');
    } catch (err) {
        showToast('❌ Error al exportar');
    }
}

async function importarDatos(e) {
    const file = e.target.files[0];
    if (!file) return;

    if (!confirm('⚠️ Esto REEMPLAZARÁ todos los datos actuales.\n¿Continuar?')) {
        e.target.value = '';
        return;
    }

    try {
        const text = await file.text();
        await importarRespaldo(text);
        showToast('📥 Datos importados correctamente');
        await refreshAll();
    } catch (err) {
        showToast('❌ Error al importar: archivo inválido');
    }
    e.target.value = '';
}

// ===== COMPARTIR WHATSAPP =====
async function compartirWhatsApp() {
    const prestamos = await dbGetAll('prestamos');
    const herramientas = await dbGetAll('herramientas');
    const trabajadores = await dbGetAll('trabajadores');
    const activos = prestamos.filter(p => p.activo);

    if (activos.length === 0) {
        showToast('No hay préstamos activos para compartir');
        return;
    }

    // Group by worker
    const groups = {};
    for (const p of activos) {
        if (!groups[p.trabajadorId]) groups[p.trabajadorId] = [];
        groups[p.trabajadorId].push(p);
    }

    let text = `🔧 *CONTROL DE HERRAMIENTAS*\n📅 ${formatFecha(new Date())} · ${formatHora(new Date())}\n\n`;

    for (const [wId, loans] of Object.entries(groups)) {
        const w = trabajadores.find(t => t.id === parseInt(wId));
        text += `👷 *${w ? w.nombre : 'Desconocido'}*\n`;
        for (const p of loans) {
            const h = herramientas.find(hr => hr.id === p.herramientaId);
            text += `   • ${h ? h.nombre : '?'}${h && h.codigo ? ' (' + h.codigo + ')' : ''} — desde ${formatHora(p.fecha)}\n`;
        }
        text += '\n';
    }

    text += `📊 Total: ${herramientas.length} herr. | ${activos.length} prestadas | ${herramientas.length - activos.length} disponibles`;

    // Use WhatsApp direct link for better mobile experience
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;

    try {
        window.open(whatsappUrl, '_blank');
        showToast('📱 Abriendo WhatsApp...');
    } catch (e) {
        // If window.open fails, try native share as fallback
        if (navigator.share) {
            try {
                await navigator.share({ text });
                showToast('📱 Compartido');
            } catch (err) {
                // Final fallback to clipboard
                await navigator.clipboard.writeText(text);
                showToast('📋 Texto copiado (falló WhatsApp)');
            }
        } else {
            await navigator.clipboard.writeText(text);
            showToast('📋 Texto copiado al portapapeles');
        }
    }
}

// ===== UTILITY =====
function formatFecha(dateOrStr) {
    const d = typeof dateOrStr === 'string' ? new Date(dateOrStr) : dateOrStr;
    return d.toLocaleDateString('es-MX', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

function formatHora(dateOrStr) {
    const d = typeof dateOrStr === 'string' ? new Date(dateOrStr) : dateOrStr;
    return d.toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit', hour12: true });
}
