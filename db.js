// ===== BASE DE DATOS INDEXEDDB — OBRA CONTROL =====
const DB_NAME = 'ObraControlDB';
const DB_VERSION = 1;

let dbInstance = null;

function openDB() {
    if (dbInstance) return Promise.resolve(dbInstance);
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);

        // Timeout: if open takes > 3s, reject
        const timeout = setTimeout(() => {
            console.error('openDB timeout — closing stale connection');
            dbInstance = null;
            reject(new Error('IndexedDB open timeout'));
        }, 3000);

        request.onblocked = () => {
            console.warn('IndexedDB blocked — close other tabs or refresh');
            clearTimeout(timeout);
            reject(new Error('IndexedDB blocked'));
        };

        request.onupgradeneeded = (e) => {
            const db = e.target.result;
            if (!db.objectStoreNames.contains('materiales')) {
                const store = db.createObjectStore('materiales', { keyPath: 'id', autoIncrement: true });
                store.createIndex('nombre', 'nombre', { unique: false });
            }
            if (!db.objectStoreNames.contains('movimientos')) {
                const store = db.createObjectStore('movimientos', { keyPath: 'id', autoIncrement: true });
                store.createIndex('materialId', 'materialId', { unique: false });
                store.createIndex('tipo', 'tipo', { unique: false });
                store.createIndex('fecha', 'fecha', { unique: false });
            }
            if (!db.objectStoreNames.contains('herramientas')) {
                const store = db.createObjectStore('herramientas', { keyPath: 'id', autoIncrement: true });
                store.createIndex('nombre', 'nombre', { unique: false });
            }
            if (!db.objectStoreNames.contains('trabajadores')) {
                const store = db.createObjectStore('trabajadores', { keyPath: 'id', autoIncrement: true });
                store.createIndex('nombre', 'nombre', { unique: false });
            }
            if (!db.objectStoreNames.contains('prestamos')) {
                const store = db.createObjectStore('prestamos', { keyPath: 'id', autoIncrement: true });
                store.createIndex('trabajadorId', 'trabajadorId', { unique: false });
                store.createIndex('herramientaId', 'herramientaId', { unique: false });
                store.createIndex('activo', 'activo', { unique: false });
                store.createIndex('fecha', 'fecha', { unique: false });
            }
        };
        request.onsuccess = (e) => {
            clearTimeout(timeout);
            dbInstance = e.target.result;
            // If another tab triggers a version change, close this connection
            dbInstance.onversionchange = () => {
                dbInstance.close();
                dbInstance = null;
                console.log('DB closed due to versionchange in another tab');
            };
            resolve(dbInstance);
        };
        request.onerror = (e) => {
            clearTimeout(timeout);
            reject(e.target.error);
        };
    });
}

async function dbAdd(storeName, data) {
    const db = await openDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction(storeName, 'readwrite');
        const store = tx.objectStore(storeName);
        const req = store.add(data);
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error);
    });
}

async function dbPut(storeName, data) {
    const db = await openDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction(storeName, 'readwrite');
        const store = tx.objectStore(storeName);
        const req = store.put(data);
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error);
    });
}

async function dbDelete(storeName, id) {
    const db = await openDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction(storeName, 'readwrite');
        const store = tx.objectStore(storeName);
        const req = store.delete(id);
        req.onsuccess = () => resolve();
        req.onerror = () => reject(req.error);
    });
}

async function dbGetAll(storeName) {
    const db = await openDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction(storeName, 'readonly');
        const store = tx.objectStore(storeName);
        const req = store.getAll();
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error);
    });
}

async function dbGet(storeName, id) {
    const db = await openDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction(storeName, 'readonly');
        const store = tx.objectStore(storeName);
        const req = store.get(id);
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error);
    });
}

async function dbGetByIndex(storeName, indexName, value) {
    const db = await openDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction(storeName, 'readonly');
        const store = tx.objectStore(indexName ? storeName : storeName);
        const index = store.index(indexName);
        const req = index.getAll(value);
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error);
    });
}

async function exportarRespaldo() {
    const data = {
        version: DB_VERSION,
        fecha: new Date().toISOString(),
        materiales: await dbGetAll('materiales'),
        movimientos: await dbGetAll('movimientos'),
        herramientas: await dbGetAll('herramientas'),
        trabajadores: await dbGetAll('trabajadores'),
        prestamos: await dbGetAll('prestamos'),
    };
    return JSON.stringify(data, null, 2);
}

async function importarRespaldo(jsonString) {
    const data = JSON.parse(jsonString);
    const db = await openDB();
    const storeNames = ['materiales', 'movimientos', 'herramientas', 'trabajadores', 'prestamos'];
    return new Promise((resolve, reject) => {
        const tx = db.transaction(storeNames, 'readwrite');
        for (const name of storeNames) {
            tx.objectStore(name).clear();
        }
        for (const name of storeNames) {
            if (data[name]) {
                const store = tx.objectStore(name);
                for (const item of data[name]) {
                    store.add(item);
                }
            }
        }
        tx.oncomplete = () => resolve();
        tx.onerror = () => reject(tx.error);
    });
}
