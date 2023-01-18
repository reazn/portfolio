import { Button, Meta } from "components";
import { useEffect, useRef } from "react";
import styles from "styles/pages/404.module.scss";

export default function FourOhFour() {

    const test = useRef("404");

    useEffect(() => {
        const text = setInterval(() => {
            test.current.innerText = test.current.innerText + " 4 0 "
        }, 5)

        setTimeout(() => {
            clearInterval(text)
        }, 30000)
    }, [test])

    return (
        <>
            <Meta/>    
            <div className={styles["four-oh-four"]}>
                <span ref={test}></span>
                <div className={styles["container"]}>
                    <h1>404</h1>
                    <h2>Page not found</h2>
                    <Button href={"/"} newPage={false}>Return</Button>
                </div>
            </div>
        </>
    )
}
