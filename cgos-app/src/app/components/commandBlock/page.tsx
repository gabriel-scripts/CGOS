'use client'

import  { useState } from 'react';
import { ipcRenderer } from 'electron';

export function CommandButton(){

    const [wasMoved, setWasMoved] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [offset, setOffset] = useState({ x: 0, y: 0 });
  
    const handleMouseDown = (e: { clientX: number; clientY: number; }) => {
      setIsDragging(true);
      
      setWasMoved(false);

      setOffset({
        x: e.clientX - pos.x,
        y: e.clientY - pos.y,
      });
    };

    const handleMouseUp = () => {
        setIsDragging(false);
      };
    
    const handleMouseOut = () => {
        setIsDragging(false);
    };
  
    const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
      if (isDragging) {

        setWasMoved(true);

        setPos({
          x: e.clientX - offset.x,
          y: e.clientY - offset.y,
        });
      }
      
    };
  
    const handleClick = () => {    
      if (!isDragging && !wasMoved) {
        ipcRenderer.send('open-terminal-window');
      }
    };


    return(
        <div id="IdcommandBlock" className="commandBlockdiv" 
         onMouseDown={handleMouseDown} 
         onMouseMove={handleMouseMove} 
         onMouseUp={handleMouseUp}
         onMouseOut={handleMouseOut} 
         style={{ left: `${pos.x}px`, top: `${pos.y}px` }}>
            
            <h1> exemple of a block: </h1>

            <button className="commandBlock" onClick={handleClick} >
                <label>|</label>
            </button>
        </div>
    );
}