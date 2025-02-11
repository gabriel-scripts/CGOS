import { app, BrowserWindow } from 'electron';

import path from 'path'

const windowPreset = new BrowserWindow({
  width: 800,
  height: 600,
  webPreferences: {
    preload: path.join(__dirname, 'page.tsx')
  }
});

async function createWindow() {
  const isDev = await import('electron-is-dev');

  windowPreset.loadURL(
    isDev.default
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname)}, '../cgos-app/src/app/components/main/page.tsx'`
  );

  if (isDev.default) {
    windowPreset.webContents.openDevTools();
  }
}
app.on('ready', createWindow);

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});