const { app, BrowserWindow } = require('electron');
const path = require('path');

async function createWindow() {
  const isDev = await import('electron-is-dev');

  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
    },
  });

  mainWindow.loadURL(
    isDev.default
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../cgos-app/public/index.html')}`
  );

  if (isDev.default) {
    mainWindow.webContents.openDevTools();
  }
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
