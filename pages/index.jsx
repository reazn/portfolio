import { Nav, Hero, About, Projects, Experiments, Footer } from "sections";
import { Meta, MouseEffect } from "components";
import styles from "../styles/components/MouseEffect.module.scss";

export default function Home() {
    return (
        <>
            <Meta />
            <MouseEffect/>
            <div className={styles["blur"]}/>
            <Nav />
            <Hero />
            <About />
            <Projects />
            <Experiments />
            <Footer />
        </>
    )
}
