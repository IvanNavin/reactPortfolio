import React, { useEffect, useRef } from 'react';
import fluidEffect from './fluidEffect';

import { isMobileOrTablet } from "../../utils";

const Fluid = () => {
    let canvasRef = useRef(null);
    
    useEffect(() => {
        const canvas = canvasRef.current;

        const {
            resizeCanvas, 
            updateKeywords, 
            initFramebuffers, 
            multipleSplats, 
            update,
            onMouseDown,
            onMouseMove,
            onMouseUp,
            onTouchStart,
            onTouchMove,
            onTouchEnd,
            onKeyDown,
            splatStack
        } = fluidEffect(canvas);

        resizeCanvas();
        updateKeywords();
        initFramebuffers();
        multipleSplats(parseInt(Math.random() * 20) + 5);
        update();

        canvas.addEventListener('mousedown', onMouseDown);
        canvas.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);
        canvas.addEventListener('touchstart', onTouchStart);
        canvas.addEventListener('touchmove', onTouchMove);
        window.addEventListener('touchend', onTouchEnd);
        window.addEventListener('keydown', onKeyDown);

        if (isMobileOrTablet()) {
            const splatInterval = setInterval(e => {
                splatStack.push(parseInt(Math.random() * 20) + 5);
            }, 10000);
        }

        return () => {
            canvas.removeEventListener('mousedown', onMouseDown);
            canvas.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
            canvas.removeEventListener('touchstart', onTouchStart);
            canvas.removeEventListener('touchmove', onTouchMove);
            window.removeEventListener('touchend', onTouchEnd);
            window.removeEventListener('keydown', onKeyDown);
            if (isMobileOrTablet()) { clearInterval(splatInterval) }
        };
    }, []);

    return (<canvas ref={canvasRef} />);
};

export default React.memo(Fluid);