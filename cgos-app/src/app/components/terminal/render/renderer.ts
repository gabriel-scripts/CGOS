import { contextBridge, ipcRenderer } from 'electron';

// Expose API
contextBridge.exposeInMainWorld('api', {
  send: (channel: string, data: unknown) => ipcRenderer.send(channel, data),
  on: (channel: string, callback: (...args: unknown[]) => void) => ipcRenderer.on(channel, (event, ...args) => callback(...args))
});
