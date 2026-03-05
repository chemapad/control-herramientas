// ===== CONTROL DE HERRAMIENTAS — APP.JS (v15) =====
console.log('App version: 15.0');

// ===== INTERNATIONALIZATION (i18n) =====
const translations = {
    es: {
        app_title: 'Control de Herramientas',
        tab_loans: '📋 Préstamos',
        tab_tools: '🔧 Herramientas',
        tab_workers: '👷 Trabajadores',
        stat_total: 'Total',
        stat_available: 'Disponibles',
        stat_loaned: 'Prestadas',
        btn_new_loan: '➕ Nuevo Préstamo',
        btn_history: '📜 Historial de Hoy',
        btn_add: '➕ Agregar',
        btn_bulk_load: '📦 Carga Masiva',
        btn_export: '📤 Exportar Respaldo',
        btn_import: '📥 Importar Datos',
        btn_whatsapp: '📱 Generar Resumen WhatsApp',
        btn_cancel: 'Cancelar',
        btn_save: 'Guardar',
        btn_confirm_loan: '✅ Confirmar Préstamo',
        btn_close: 'Cerrar',
        btn_return_selected: '✅ Devolver Seleccionadas',
        btn_bulk_load_start: '🚀 Cargar Trabajadores',
        empty_loans: 'No hay préstamos activos',
        empty_tools: 'No hay herramientas registradas',
        empty_workers: 'No hay trabajadores registrados',
        empty_history: 'No hay registros hoy',
        config_title: '⚙️ Configuración',
        config_backup_title: '💾 Respaldo de Datos',
        config_backup_desc: 'Exporta tus datos para compartir con el otro turno o como respaldo de seguridad.',
        config_import_title: '📥 Importar Datos',
        config_import_desc: 'Carga un respaldo recibido del otro turno. ⚠️ Esto reemplaza todos los datos actuales.',
        config_whatsapp_title: '📋 Compartir por WhatsApp',
        config_whatsapp_desc: 'Genera un resumen de texto de los préstamos activos para enviar por WhatsApp.',
        config_lang_title: '🌐 Idioma',
        modal_tool_add: 'Agregar Herramienta',
        modal_tool_edit: 'Editar Herramienta',
        modal_worker_add: 'Agregar Trabajador',
        modal_worker_edit: 'Editar Trabajador',
        modal_loan_title: 'Nuevo Préstamo',
        modal_history_title: '📜 Historial de Hoy',
        modal_bulk_title: '📦 Carga Masiva de Trabajadores',
        modal_bulk_desc: 'Pega una lista de nombres, uno por línea.',
        modal_return_title: 'Devolver Herramientas',
        label_name: 'Nombre',
        label_code: 'Código / ID (opcional)',
        label_notes: 'Notas (opcional)',
        label_worker: 'Trabajador',
        label_tools_avail: 'Herramientas disponibles',
        label_date: 'Fecha',
        label_hour: 'Hora',
        label_full_name: 'Nombre completo',
        label_position: 'Puesto (opcional)',
        placeholder_search_tool: 'Buscar herramienta...',
        placeholder_search_worker: 'Buscar trabajador...',
        placeholder_notes: 'Ej: Color rojo, serie XYZ',
        placeholder_tool_name: 'Ej: Rotomartillo Bosch',
        placeholder_worker_name: 'Ej: Juan Pérez',
        placeholder_position: 'Ej: Electricista',
        placeholder_bulk: 'Pega los nombres aquí...',
        toast_shared: '📱 Compartido',
        toast_copied: '📋 Texto copiado al portapapeles',
        toast_opening_wa: '📱 Abriendo WhatsApp...',
        toast_bulk_success: '✅ {n} trabajadores cargados correctamente',
        toast_import_success: '✅ Respaldo importado correctamente',
        toast_tool_saved: '✅ Herramienta guardada',
        toast_tool_updated: '✅ Herramienta actualizada',
        toast_tool_deleted: '🗑️ Herramienta eliminada',
        toast_worker_saved: '✅ Trabajador guardado',
        toast_worker_updated: '✅ Trabajador actualizado',
        toast_worker_deleted: '🗑️ Trabajador eliminado',
        toast_worker_loaned_err: '⚠️ No se puede eliminar, tiene herramientas prestadas',
        toast_loan_saved: '✅ Préstamo registrado',
        toast_return_success: '✅ Herramientas devueltas',
        toast_select_worker_err: '⚠️ Selecciona un trabajador',
        toast_select_tool_err: '⚠️ Selecciona al menos una herramienta',
        toast_loan_success: '✅ {n} herramienta(s) asignada(s)',
        toast_return_selected_success: '✅ {n} herramienta(s) devuelta(s)',
        toast_no_active_loans: 'No hay préstamos activos para compartir',
        toast_import_err: '❌ Error al importar: archivo inválido',
        toast_export_err: '❌ Error al exportar',
        tool_available: 'Disponible',
        tool_loaned: 'Prestado',
        tool_returned: 'Devuelta',
        label_since: 'Desde',
        label_due: 'Vence',
        btn_edit: '✏️ Editar',
        btn_return: 'Devolver',
        btn_return_all: 'Devolver Todas',
        empty_all_loaned: 'Todas las herramientas están prestadas',
        empty_loans_desc: 'Usa "Nuevo Préstamo" para asignar herramientas',
        label_unknown_tool: 'Herramienta desconocida',
        label_notes_prefix: 'Notas',
        confirm_delete_worker: '¿Eliminar este trabajador?',
        confirm_delete_tool: '¿Eliminar esta herramienta?',
        confirm_import: '⚠️ Esto REEMPLAZARÁ todos los datos actuales.\n¿Continuar?',
        wa_title: '🔧 *CONTROL DE HERRAMIENTAS*',
        wa_stats: '📊 Total: {total} herr. | {prestadas} prestadas | {disponibles} disponibles',
        label_tools_short: 'herr.',
        modal_tool_add: 'Agregar Herramienta',
        modal_tool_edit: 'Editar Herramienta',
        modal_worker_add: 'Agregar Trabajador',
        modal_worker_edit: 'Editar Trabajador',
        toast_wa_fallback: '📋 Texto copiado (falló WhatsApp)',
        toast_ocr_processing: '🔍 Escaneando... Espera',
        toast_ocr_success: '✅ Código escaneado: {code}',
        toast_ocr_err: '❌ Error OCR: No se pudo escanear',
        btn_export_excel: '📊 Excel',
        toast_excel_success: '✅ Excel exportado',
        toast_excel_empty: '⚠️ No hay herramientas para exportar',
        excel_col_name: 'Nombre',
        excel_col_code: 'Código / ID',
        excel_col_notes: 'Notas',
        excel_col_status: 'Estado',
        excel_sheet_name: 'Herramientas'
    },
    en: {
        app_title: 'Tool Control',
        tab_loans: '📋 Loans',
        tab_tools: '🔧 Tools',
        tab_workers: '👷 Workers',
        stat_total: 'Total',
        stat_available: 'Available',
        stat_loaned: 'Loaned',
        btn_new_loan: '➕ New Loan',
        btn_history: '📜 Today\'s History',
        btn_add: '➕ Add',
        btn_bulk_load: '📦 Bulk Load',
        btn_export: '📤 Export Backup',
        btn_import: '📥 Import Data',
        btn_whatsapp: '📱 Share on WhatsApp',
        btn_cancel: 'Cancel',
        btn_save: 'Save',
        btn_confirm_loan: '✅ Confirm Loan',
        btn_close: 'Close',
        btn_return_selected: '✅ Return Selected',
        btn_bulk_load_start: '🚀 Load Workers',
        empty_loans: 'No active loans',
        empty_tools: 'No tools registered',
        empty_workers: 'No workers registered',
        empty_history: 'No records today',
        config_title: '⚙️ Settings',
        config_backup_title: '💾 Data Backup',
        config_backup_desc: 'Export your data to share with the other shift or as a security backup.',
        config_import_title: '📥 Import Data',
        config_import_desc: 'Load a backup from the other shift. ⚠️ This replaces all current data.',
        config_whatsapp_title: '📋 Share via WhatsApp',
        config_whatsapp_desc: 'Generate a text summary of active loans to send via WhatsApp.',
        config_lang_title: '🌐 Language',
        modal_tool_add: 'Add Tool',
        modal_tool_edit: 'Edit Tool',
        modal_worker_add: 'Add Worker',
        modal_worker_edit: 'Edit Worker',
        modal_loan_title: 'New Loan',
        modal_history_title: '📜 Today\'s History',
        modal_bulk_title: '📦 Bulk Worker Load',
        modal_bulk_desc: 'Paste a list of names, one per line.',
        modal_return_title: 'Return Tools',
        label_name: 'Name',
        label_code: 'Code / ID (optional)',
        label_notes: 'Notes (optional)',
        label_worker: 'Worker',
        label_tools_avail: 'Available tools',
        label_date: 'Date',
        label_hour: 'Time',
        label_full_name: 'Full name',
        label_position: 'Position (optional)',
        placeholder_search_tool: 'Search tool...',
        placeholder_search_worker: 'Search worker...',
        placeholder_notes: 'Ex: Red color, XYZ series',
        placeholder_tool_name: 'Ex: Bosch Rotary Hammer',
        placeholder_worker_name: 'Ex: John Doe',
        placeholder_position: 'Ex: Electrician',
        placeholder_bulk: 'Paste names here...',
        toast_shared: '📱 Shared',
        toast_copied: '📋 Text copied to clipboard',
        toast_opening_wa: '📱 Opening WhatsApp...',
        toast_bulk_success: '✅ {n} workers loaded correctly',
        toast_import_success: '✅ Backup imported correctly',
        toast_tool_saved: '✅ Tool saved',
        toast_tool_updated: '✅ Tool updated',
        toast_tool_deleted: '🗑️ Tool deleted',
        toast_worker_saved: '✅ Worker saved',
        toast_worker_updated: '✅ Worker updated',
        toast_worker_deleted: '🗑️ Worker deleted',
        toast_worker_loaned_err: '⚠️ Cannot delete, has loaned tools',
        toast_loan_saved: '✅ Loan registered',
        toast_return_success: '✅ Tools returned',
        toast_select_worker_err: '⚠️ Select a worker',
        toast_select_tool_err: '⚠️ Select at least one tool',
        toast_loan_success: '✅ {n} tool(s) assigned',
        toast_return_selected_success: '✅ {n} tool(s) returned',
        toast_no_active_loans: 'No active loans to share',
        toast_import_err: '❌ Import error: invalid file',
        toast_export_err: '❌ Export error',
        tool_available: 'Available',
        tool_loaned: 'Loaned',
        tool_returned: 'Returned',
        label_since: 'Since',
        label_due: 'Due',
        btn_edit: '✏️ Edit',
        btn_return: 'Return',
        btn_return_all: 'Return All',
        empty_all_loaned: 'All tools are loaned',
        empty_loans_desc: 'Use "New Loan" to assign tools',
        label_unknown_tool: 'Unknown tool',
        label_notes_prefix: 'Notes',
        confirm_delete_worker: 'Delete this worker?',
        confirm_delete_tool: 'Delete this tool?',
        confirm_import: '⚠️ This will REPLACE all current data.\nContinue?',
        wa_title: '🔧 *TOOL CONTROL*',
        wa_stats: '📊 Total: {total} tools | {prestadas} loaned | {disponibles} available',
        label_tools_short: 'tools',
        modal_tool_add: 'Add Tool',
        modal_tool_edit: 'Edit Tool',
        modal_worker_add: 'Add Worker',
        modal_worker_edit: 'Edit Worker',
        toast_wa_fallback: '📋 Text copied (WhatsApp failed)',
        toast_ocr_processing: '🔍 Scanning... Please wait',
        toast_ocr_success: '✅ Code scanned: {code}',
        toast_ocr_err: '❌ OCR Error: Failed to scan',
        btn_export_excel: '📊 Excel',
        toast_excel_success: '✅ Excel exported',
        toast_excel_empty: '⚠️ No tools to export',
        excel_col_name: 'Name',
        excel_col_code: 'Code / ID',
        excel_col_notes: 'Notes',
        excel_col_status: 'Status',
        excel_sheet_name: 'Tools'
    }
};

let currentLang = localStorage.getItem('appLang') || 'es';

function t(key, params = {}) {
    let text = translations[currentLang][key] || key;
    for (const [k, v] of Object.entries(params)) {
        text = text.replace(`{${k}}`, v);
    }
    return text;
}

function updateUI() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.innerText = t(key);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        el.placeholder = t(key);
    });
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.getAttribute('data-i18n-title');
        el.title = t(key);
    });

    // Update labels and other dynamic parts
    const toolTitle = document.getElementById('modalHerramientaTitle');
    if (toolTitle) {
        const isEdit = document.getElementById('herramientaId').value;
        toolTitle.innerText = isEdit ? t('modal_tool_edit') : t('modal_tool_add');
    }

    const workerTitle = document.getElementById('modalTrabajadorTitle');
    if (workerTitle) {
        const wId = document.getElementById('trabajadorId').value;
        workerTitle.innerText = wId ? t('modal_worker_edit') : t('modal_worker_add');
    }
}

// ===== OCR LOGIC =====
async function preprocessImage(file) {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');

                // Scale up image for better OCR resolution
                const maxDim = 2000;
                let width = img.width;
                let height = img.height;
                if (width < 1000 || height < 1000) {
                    const scale = 2; // Double size for better detail on small labels
                    width *= scale;
                    height *= scale;
                } else if (width > maxDim || height > maxDim) {
                    const scale = maxDim / Math.max(width, height);
                    width *= scale;
                    height *= scale;
                }

                canvas.width = width;
                canvas.height = height;

                // Grayscale and high contrast
                ctx.filter = 'grayscale(100%) contrast(200%) brightness(110%)';
                ctx.drawImage(img, 0, 0, width, height);

                // Apply manual sharpening / binarization
                const imageData = ctx.getImageData(0, 0, width, height);
                const data = imageData.data;
                for (let i = 0; i < data.length; i += 4) {
                    const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
                    // Binarize: make it strictly black or white for OCR clarity
                    const val = avg > 120 ? 255 : 0;
                    data[i] = data[i + 1] = data[i + 2] = val;
                }
                ctx.putImageData(imageData, 0, 0);

                resolve(canvas.toDataURL('image/jpeg', 0.95));
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    });
}

function displayOCRCandidates(tokens) {
    const container = document.getElementById('ocrCandidates');
    if (!container) return;
    container.innerHTML = '';

    // De-duplicate and filter
    const uniqueTokens = [...new Set(tokens)];

    uniqueTokens.forEach(token => {
        const chip = document.createElement('button');
        chip.type = 'button';
        chip.className = 'ocr-chip';
        chip.innerText = token;
        chip.onclick = () => selectOCRCandidate(token, chip);
        container.appendChild(chip);
    });
}

function selectOCRCandidate(token, chip) {
    document.getElementById('herramientaCodigo').value = token;
    document.querySelectorAll('.ocr-chip').forEach(c => c.classList.remove('selected'));
    chip.classList.add('selected');
}

async function handleOCRScan(e) {
    const file = e.target.files[0];
    if (!file) return;

    showToast(t('toast_ocr_processing'));
    const container = document.getElementById('ocrCandidates');
    if (container) container.innerHTML = '';

    try {
        const processedImage = await preprocessImage(file);
        const result = await Tesseract.recognize(processedImage, 'eng', {
            logger: m => console.log(m)
        });

        const rawText = result.data.text.trim();
        console.log('OCR raw:', rawText);

        // Split by lines to keep proximity context
        const lines = rawText.split(/[\n\r]+/);
        let allTokens = [];

        lines.forEach(line => {
            // Keep alphanumeric and some symbols, trim the line
            const cleanedLine = line.replace(/[^a-zA-Z0-9\-\/._\s]/g, '').trim();
            if (!cleanedLine) return;

            const parts = cleanedLine.split(/\s+/).filter(p => p.length >= 2);

            // Heuristic bit: look for serial-like sequences (e.g., GS + 2669RT)
            for (let i = 0; i < parts.length; i++) {
                let current = parts[i];

                // 1. Check if we should merge with next token (e.g., "GS" "2669RT" -> "GS-2669RT")
                if (i < parts.length - 1) {
                    const next = parts[i + 1];
                    const isPrefix = /^[A-Z]{2,4}$/.test(current);
                    const isSuffix = /^[0-9\-\/]+[A-Z0-9]*$/.test(next);

                    if (isPrefix && isSuffix) {
                        allTokens.push(current + '-' + next);
                        // Also try without the dash just in case
                        allTokens.push(current + next);
                    }
                }

                // 2. Add individual token if it looks like a code (digit + letter, or just long)
                if (current.length >= 3) {
                    allTokens.push(current);
                }
            }
        });

        // Final filtering and de-duplication
        const finalTokens = [...new Set(allTokens)]
            .map(tk => tk.replace(/[^a-zA-Z0-9\-\/]/g, ''))
            .filter(tk => tk.length >= 3);

        if (finalTokens.length > 0) {
            displayOCRCandidates(finalTokens);

            // Intelligent selection: Preference for tokens with mixed alpha and numeric
            let best = '';
            for (const tk of finalTokens) {
                const hasDigit = /\d/.test(tk);
                const hasLetter = /[a-zA-Z]/.test(tk);
                const hasDash = tk.includes('-');

                // Score based on likelihood of being a serial
                if (hasDigit && hasLetter) {
                    if (tk.length > best.length || !(/[a-zA-Z]/.test(best) && /\d/.test(best))) {
                        best = tk;
                    }
                } else if (!best && hasDigit && tk.length >= 4) {
                    best = tk;
                }
            }
            if (!best) best = finalTokens[0];

            document.getElementById('herramientaCodigo').value = best;

            const chips = document.querySelectorAll('.ocr-chip');
            chips.forEach(c => {
                if (c.innerText === best) c.classList.add('selected');
            });

            showToast(t('toast_ocr_success', { code: best }));
        } else {
            showToast(t('toast_ocr_err'));
        }
    } catch (err) {
        console.error('OCR Error:', err);
        showToast(t('toast_ocr_err'));
    } finally {
        e.target.value = '';
    }
}

// ===== EXCEL EXPORT =====
async function exportarExcel() {
    const herramientas = await dbGetAll('herramientas');
    if (herramientas.length === 0) {
        showToast(t('toast_excel_empty'));
        return;
    }

    const prestamos = await dbGetAll('prestamos');
    const prestamosActivos = prestamos.filter(p => p.activo);
    const prestadaIds = new Set(prestamosActivos.map(p => p.herramientaId));

    // Build data rows
    const data = herramientas.map(h => ({
        [t('excel_col_name')]: h.nombre || '',
        [t('excel_col_code')]: h.codigo || '',
        [t('excel_col_notes')]: h.notas || '',
        [t('excel_col_status')]: prestadaIds.has(h.id) ? t('tool_loaned') : t('tool_available')
    }));

    // Create workbook
    const ws = XLSX.utils.json_to_sheet(data);

    // Auto-size columns
    const colWidths = Object.keys(data[0]).map(key => {
        const maxLen = Math.max(key.length, ...data.map(row => (row[key] || '').length));
        return { wch: Math.min(maxLen + 2, 50) };
    });
    ws['!cols'] = colWidths;

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, t('excel_sheet_name'));

    // Generate and download
    const fecha = new Date().toISOString().slice(0, 10);
    XLSX.writeFile(wb, `herramientas_${fecha}.xlsx`);
    showToast(t('toast_excel_success'));
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('appLang', lang);
    updateUI();
    refreshAll();
}

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
    document.getElementById('btnExportExcel').addEventListener('click', exportarExcel);
    document.getElementById('inputImportar').addEventListener('change', importarDatos);
    document.getElementById('btnCompartirWA').addEventListener('click', compartirWhatsApp);
    document.getElementById('btnConfirmarDevolucion').addEventListener('click', confirmarDevolucion);
    document.getElementById('btnCargaMasiva').addEventListener('click', () => abrirModal('modalCargaMasiva'));

    // Forms
    document.getElementById('formHerramienta').addEventListener('submit', guardarHerramienta);
    document.getElementById('formTrabajador').addEventListener('submit', guardarTrabajador);
    document.getElementById('formPrestamo').addEventListener('submit', guardarPrestamo);
    document.getElementById('formCargaMasiva').addEventListener('submit', guardarCargaMasiva);

    // Search
    document.getElementById('searchHerramientas').addEventListener('input', renderHerramientas);
    document.getElementById('searchTrabajadores').addEventListener('input', renderTrabajadores);

    // Eventos OCR
    const btnScanOCR = document.getElementById('btnScanOCR');
    const ocrInput = document.getElementById('ocrInput');
    if (btnScanOCR) {
        btnScanOCR.addEventListener('click', () => ocrInput.click());
    }
    if (ocrInput) {
        ocrInput.addEventListener('change', handleOCRScan);
    }

    // Close modals on overlay click
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) cerrarModal(overlay.id);
        });
    });

    // Load data
    updateUI();
    await refreshAll();
});

// ===== TAB NAVIGATION =====
function switchTab(tabName) {
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
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
    try {
        await renderPrestamosActivos();
    } catch (e) { console.error('Error renderPrestamosActivos:', e); }
    try {
        await renderHerramientas();
    } catch (e) { console.error('Error renderHerramientas:', e); }
    try {
        await renderTrabajadores();
    } catch (e) { console.error('Error renderTrabajadores:', e); }
}

// ===== HERRAMIENTAS CRUD =====
function abrirModalHerramienta(herramienta = null) {
    document.getElementById('modalHerramientaTitle').textContent = herramienta ? t('modal_tool_edit') : t('modal_tool_add');
    document.getElementById('herramientaId').value = herramienta ? herramienta.id : '';
    document.getElementById('herramientaNombre').value = herramienta ? herramienta.nombre : '';
    document.getElementById('herramientaCodigo').value = herramienta ? (herramienta.codigo || '') : '';
    document.getElementById('herramientaNotas').value = herramienta ? (herramienta.notas || '') : '';
    const container = document.getElementById('ocrCandidates');
    if (container) container.innerHTML = ''; // Clear old OCR chips
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
        showToast(t('toast_tool_updated'));
    } else {
        await dbAdd('herramientas', data);
        showToast(t('toast_tool_saved'));
    }

    cerrarModal('modalHerramienta');
    document.getElementById('formHerramienta').reset();
    await refreshAll();
}

async function eliminarHerramienta(id) {
    if (!confirm(t('confirm_delete_tool'))) return;
    // Check if it's currently loaned
    const prestamos = await dbGetByIndex('prestamos', 'herramientaId', id);
    const activo = prestamos.find(p => p.activo);
    if (activo) {
        showToast(t('toast_worker_loaned_err')); // Using generic loaned error
        return;
    }
    await dbDelete('herramientas', id);
    showToast(t('toast_tool_deleted'));
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
        container.innerHTML = `<p class="empty-state">${t('empty_tools')}</p>`;
        return;
    }

    container.innerHTML = herramientas.map(hItem => {
        const prestamo = prestamosActivos.find(p => p.herramientaId === hItem.id);
        const trabajador = prestamo ? trabajadores.find(ti => ti.id === prestamo.trabajadorId) : null;
        const statusBadge = prestamo
            ? `<span class="badge badge-red">${t('tool_loaned')}</span>`
            : `<span class="badge badge-green">${t('tool_available')}</span>`;
        const prestamoInfo = prestamo && trabajador
            ? `<div class="card-subtitle">→ ${trabajador.nombre} · ${t('label_since')}: ${formatHora(prestamo.fecha)}</div>`
            : '';
        const codigo = hItem.codigo ? `<span class="card-subtitle" style="display:inline;margin-left:8px;font-size:0.75rem;">${hItem.codigo}</span>` : '';

        return `
      <div class="card">
        <div class="card-header">
          <div>
            <span class="card-title">${hItem.nombre}</span>${codigo}
          </div>
          <div class="card-actions">
            ${statusBadge}
          </div>
        </div>
        ${prestamoInfo}
        <div class="card-actions" style="margin-top:8px;">
          <button class="btn-secondary btn-small" onclick="abrirModalHerramienta(${JSON.stringify(hItem).replace(/"/g, '&quot;')})">${t('btn_edit')}</button>
          <button class="btn-danger btn-small" onclick="eliminarHerramienta(${hItem.id})">🗑️</button>
        </div>
      </div>
    `;
    }).join('');
}

// ===== TRABAJADORES CRUD =====
function abrirModalTrabajador(trabajador = null) {
    document.getElementById('modalTrabajadorTitle').textContent = trabajador ? t('modal_worker_edit') : t('modal_worker_add');
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
        showToast(t('toast_worker_updated'));
    } else {
        await dbAdd('trabajadores', data);
        showToast(t('toast_worker_saved'));
    }

    cerrarModal('modalTrabajador');
    document.getElementById('formTrabajador').reset();
    await refreshAll();
}

async function eliminarTrabajador(id) {
    if (!confirm(t('confirm_delete_worker'))) return;
    const prestamos = await dbGetByIndex('prestamos', 'trabajadorId', id);
    const activo = prestamos.find(p => p.activo);
    if (activo) {
        showToast(t('toast_worker_loaned_err'));
        return;
    }
    await dbDelete('trabajadores', id);
    showToast(t('toast_worker_deleted'));
    await refreshAll();
}

async function renderTrabajadores() {
    const search = document.getElementById('searchTrabajadores').value.toLowerCase();
    let trabajadores = await dbGetAll('trabajadores');
    if (search) {
        trabajadores = trabajadores.filter(w => w.nombre.toLowerCase().includes(search));
    }
    const container = document.getElementById('listaTrabajadores');

    if (trabajadores.length === 0) {
        container.innerHTML = `<p class="empty-state">${t('empty_workers')}</p>`;
        return;
    }

    // Get active loan counts
    const prestamos = await dbGetAll('prestamos');
    const activos = prestamos.filter(p => p.activo);

    container.innerHTML = trabajadores.map(w => {
        const count = activos.filter(p => p.trabajadorId === w.id).length;
        const countBadge = count > 0
            ? `<span class="badge badge-yellow">${count} ${t('label_tools_short')}</span>`
            : '';
        const puesto = w.puesto ? `<div class="card-subtitle">${w.puesto}</div>` : '';

        return `
      <div class="card">
        <div class="card-header">
          <div>
            <span class="card-title">${w.nombre}</span>
            ${puesto}
          </div>
          <div class="card-actions">
            ${countBadge}
          </div>
        </div>
        <div class="card-actions" style="margin-top:8px;">
          <button class="btn-secondary btn-small" onclick="abrirModalTrabajador(${JSON.stringify(w).replace(/"/g, '&quot;')})">${t('btn_edit')}</button>
          <button class="btn-danger btn-small" onclick="eliminarTrabajador(${w.id})">🗑️</button>
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
    select.innerHTML = `<option value="">— ${t('label_worker')} —</option>` +
        trabajadores.map(w => `<option value="${w.id}">${w.nombre}${w.puesto ? ' (' + w.puesto + ')' : ''}</option>`).join('');

    // Fill available tools checklist
    const checklist = document.getElementById('checklistHerramientas');
    const disponibles = herramientas.filter(h => !herramientasPrestadas.has(h.id));

    if (disponibles.length === 0) {
        checklist.innerHTML = `<p class="empty-state">${t('empty_all_loaned')}</p>`;
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
        showToast(t('toast_select_worker_err'));
        return;
    }
    if (checked.length === 0) {
        showToast(t('toast_select_tool_err'));
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
    showToast(t('toast_loan_success', { n: checked.length }));
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
          <div class="checklist-item-label">${h ? h.nombre : t('label_unknown_tool')}</div>
          <div class="checklist-item-code">${t('tool_loaned')}: ${formatHora(p.fecha)}</div>
        </div>
      </label>
    `;
    }).join('');

    abrirModal('modalDevolucion');
}

async function confirmarDevolucion() {
    const checked = document.querySelectorAll('#checklistDevolucion input[type="checkbox"]:checked');
    if (checked.length === 0) {
        showToast(t('toast_select_tool_err'));
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
    showToast(t('toast_return_selected_success', { n: checked.length }));
    await refreshAll();
}

async function devolverUna(prestamoId) {
    const prestamo = await dbGet('prestamos', prestamoId);
    prestamo.activo = 0;
    prestamo.fechaDevolucion = new Date().toISOString();
    await dbPut('prestamos', prestamo);
    showToast(t('toast_return_success'));
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
        container.innerHTML = `<p class="empty-state">${t('empty_loans')}<br><small>${t('empty_loans_desc')}</small></p>`;
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
        const worker = trabajadores.find(w => w.id === parseInt(wId));
        if (!worker) return '';
        const initials = worker.nombre.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
        const colorIdx = parseInt(wId) % colors.length;

        const toolsHtml = loans.map(p => {
            const h = herramientas.find(hr => hr.id === p.herramientaId);
            return `
        <div class="tool-item">
          <div>
            <div class="tool-item-name">${h ? h.nombre : '?'}${h && h.codigo ? ` <small style="color:var(--text-muted)">(${h.codigo})</small>` : ''}</div>
            <div class="tool-item-time">${t('label_since')}: ${formatHora(p.fecha)}</div>
          </div>
          <button class="btn-devolver" onclick="devolverUna(${p.id})">${t('btn_return')}</button>
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
              <div class="worker-tools-count">${loans.length} ${t('tab_tools').toLowerCase()}</div>
            </div>
          </div>
          <button class="btn-devolver" onclick="abrirDevolucion(${wId})">${t('btn_return_all')}</button>
        </div>
        ${toolsHtml}
      </div>
    `;
    }).join('');
}

async function guardarCargaMasiva(e) {
    e.preventDefault();
    const texto = document.getElementById('listaNombresMasiva').value.trim();
    if (!texto) return;

    const nombres = texto.split('\n').map(n => n.trim()).filter(n => n.length > 0);
    if (nombres.length === 0) return;

    let agregados = 0;
    for (const nombre of nombres) {
        await dbAdd('trabajadores', {
            nombre,
            puesto: ''
        });
        agregados++;
    }

    cerrarModal('modalCargaMasiva');
    document.getElementById('formCargaMasiva').reset();
    showToast(t('toast_bulk_success', { n: agregados }));
    await refreshAll();
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
        container.innerHTML = `<p class="empty-state">${t('empty_history')}</p>`;
    } else {
        container.innerHTML = delHoy.map(p => {
            const h = herramientas.find(hr => hr.id === p.herramientaId);
            const w = trabajadores.find(wk => wk.id === p.trabajadorId);
            const esDevolucion = p.fechaDevolucion && p.fechaDevolucion.slice(0, 10) === hoy;
            const tipo = p.activo ? '🔴' : (esDevolucion ? '🟢' : '🔴');
            const accion = p.activo ? t('tool_loaned') : (esDevolucion ? t('tool_returned') : t('tool_loaned'));
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
        showToast(t('toast_tool_saved')); // Using as backup saved
    } catch (err) {
        showToast(t('toast_export_err'));
    }
}

async function importarDatos(e) {
    const file = e.target.files[0];
    if (!file) return;

    if (!confirm(t('confirm_import'))) {
        e.target.value = '';
        return;
    }

    try {
        const text = await file.text();
        await importarRespaldo(text);
        showToast(t('toast_import_success'));
        await refreshAll();
    } catch (err) {
        showToast(t('toast_import_err'));
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
        showToast(t('toast_no_active_loans'));
        return;
    }

    // Group by worker
    const groups = {};
    for (const p of activos) {
        if (!groups[p.trabajadorId]) groups[p.trabajadorId] = [];
        groups[p.trabajadorId].push(p);
    }

    let text = `${t('wa_title')}\n📅 ${formatFecha(new Date())} · ${formatHora(new Date())}\n\n`;

    for (const [wId, loans] of Object.entries(groups)) {
        const w = trabajadores.find(wk => wk.id === parseInt(wId));
        text += `👷 *${w ? w.nombre : 'Unknown'}*\n`;
        for (const p of loans) {
            const h = herramientas.find(hr => hr.id === p.herramientaId);
            text += `   • ${h ? h.nombre : '?'}${h && h.codigo ? ' (' + h.codigo + ')' : ''} — ${t('label_since')} ${formatHora(p.fecha)}\n`;
        }
        text += '\n';
    }

    text += t('wa_stats', {
        total: herramientas.length,
        prestadas: activos.length,
        disponibles: herramientas.length - activos.length
    });

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
                showToast(t('toast_wa_fallback'));
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
