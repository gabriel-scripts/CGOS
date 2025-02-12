import React, { useEffect } from 'react';
import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import 'xterm/css/xterm.css';

import * as pty from 'node-pty';

export function BashView() {
  useEffect(() => {

    const terminalElement = document.getElementById('terminal');

    if (terminalElement) {
      const term = new Terminal();
      const fitAddon = new FitAddon();
      term.loadAddon(fitAddon);
      term.open(terminalElement);
      fitAddon.fit();
      
      const defaultShell = process.platform === 'win32' ? 'cmd.exe' : '/bin/bash';
      const shell = process.env[process.platform === 'win32' ? 'COMSPEC' : 'SHELL'] || defaultShell;

      const ptyProcess = pty.spawn(shell, [], {
        name: 'xterm-color',
        cwd: process.cwd(),
        env: process.env,
      });
      
      
      term.onData((data) => {
        ptyProcess.write(data);
      });
    }
  }, []);

  return (
    <div id="terminal" style={{ width: '100%', height: '100%' }}></div>
  );
}
