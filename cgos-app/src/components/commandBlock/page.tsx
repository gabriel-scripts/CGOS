'use client'

//import { exec } from "child_process";
import  { useState } from 'react';

export function CommandButton(){

    const [isDragging, setIsDragging] = useState(false);
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [offset, setOffset] = useState({ x: 0, y: 0 });
  
  
    const handleMouseDown = (e: { clientX: number; clientY: number; }) => {
      setIsDragging(true);
      setOffset({
        x: e.clientX - pos.x,
        y: e.clientY - pos.y,
      });
    };
  
    const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
      if (isDragging) {
        setPos({
          x: e.clientX - offset.x,
          y: e.clientY - offset.y,
        });
      }
    };
  
    const handleMouseUp = () => {
      setIsDragging(false);
      localStorage.setItem('blockPosition', JSON.stringify(pos));
    };
  
    const handleClick = () => {
      if (!isDragging) {
        alert('Bloco clicado sem segurar!');
      }
    };
  
    return(
        <div className="commandBlockdiv"  onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} onClick={handleClick} style={{ left: `${pos.x}px`, top: `${pos.y}px` }}>
            <h1> exemple of a block: </h1>

            <button className="commandBlock">
                <label htmlFor="">|</label>
            </button>
        </div>
    );
}