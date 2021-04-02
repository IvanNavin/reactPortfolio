import React, { useState } from "react";
import gsap from 'gsap';
import useCanvas from "../../hooks/useCanvas";
import cn from "classnames";

import s from './BackButton.module.css'
import {navigate} from "hookrouter";
import {Link} from "../../routes";

const BackButton = () => {
    const btnRayon = 50;
    const btnLineWidth = 2;
    let mousePos = {};
    const onMousemove = e => mousePos = {  x: e.clientX, y: e.clientY };

    const createShadow = (context, angle) => {
        const rayon = btnRayon*2;
        const center = {
            x: rayon/2*Math.cos(angle) + btnRayon,
            y: rayon/2*Math.sin(angle) + btnRayon
        }

        context.beginPath();

        context.arc(
            center.x,
            center.y,
            rayon,
            0,
            2 * Math.PI,
            false);

        context.lineWidth = 3;

        const grd = context.createRadialGradient(center.x, center.y, rayon/10, center.x, center.y, rayon);

        grd.addColorStop(0.1,"rgba(0,0,0,0.85)");
        grd.addColorStop(1,"rgba(0,0,0,0)");
        context.fillStyle = grd;
        context.fill();
        context.closePath();
    };

    const createButton = (context) => {
        context.beginPath();

        context.arc(btnRayon, btnRayon, btnRayon - btnLineWidth, 0, 2 * Math.PI, false);

        context.lineWidth = btnLineWidth;
        context.strokeStyle = '#FFFFFF';
        context.stroke();

        context.closePath();
    };

    const calculAngle = (p1, p2) => {
        return Math.atan2(p2.y - p1.y, p2.x - p1.x);
    };

    const update = (canvas, context) => {
        const canvasPos = canvas.getBoundingClientRect();

        const canvasCenter = {
            x: canvasPos.left + canvas.width/2,
            y: canvasPos.top + canvas.height/2
        };

        context.clearRect(0, 0, canvas.width, canvas.height);

        let angle = calculAngle({
            x: canvasCenter.x,
            y: canvasCenter.y
        }, mousePos);

        !angle && (angle = 2.77);

        createButton(context);
        createShadow(context, angle);
    };

    const canvasRef = useCanvas(([canvas, ctx]) => {
        canvas.width = btnRayon * 2;
        canvas.height = btnRayon * 2;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        document.addEventListener('mousemove', onMousemove);
        gsap.ticker.add(() => update(canvas, ctx));
    });

    return (
        <button className={s['back-button']} onClick={() => navigate(Link.MAINPAGE)}>
            <p>Иван</p>
            <canvas ref={canvasRef} />
        </button>
    )
}

export default React.memo(BackButton);