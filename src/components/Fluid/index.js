import React, { useEffect, useRef } from 'react';
import fluidEffect from './fluidEffect';

const Fluid = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const {
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
            onKeyDown
        } = fluidEffect(canvas);
        
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

        return () => {
            canvas.removeEventListener('mousedown', onMouseDown);
            canvas.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
            canvas.removeEventListener('touchstart', onTouchStart);
            canvas.removeEventListener('touchmove', onTouchMove);
            window.removeEventListener('touchend', onTouchEnd);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, []);

    return (<canvas ref={canvasRef} />);
};

export default React.memo(Fluid);