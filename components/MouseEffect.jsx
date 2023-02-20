import styles from "../styles/components/MouseEffect.module.scss";
import { useEffect, useState } from "react";

export default function MouseEffect() {

    useEffect(() => {
        const mouse = e => {
            const thing = document.getElementById("mouse")
            thing.animate({
                left: `${e.clientX}px`,
                top: `${e.clientY}px`
            }, { duration: 3000, fill: "forwards" })
        };
        window.addEventListener("mousemove", mouse);

        return () => {
            window.removeEventListener("mousemove", mouse);
        };
    }, []);

    return (
        <div className={styles["mouse"]} id="mouse">
            <div className={styles["sphere"]}/>
        </div>

    )
}
