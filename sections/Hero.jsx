import { Typewriter } from "react-simple-typewriter";
import styles from "styles/components/sections/Hero.module.scss";
import { Signature, Button, HtmlTag } from "components";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

export default function Hero() {

    const typeWriterWords = ["DEVELOPER.", "WEB DESIGNER.", "UX, UI DESIGNER."]

    return (
        <section id="section-home" className={styles["hero"]}>
            <p className={styles["tag"]} style={{top: "2.5em", left: "2em"}}>{"<html>"}</p>
            <p className={styles["tag"]} style={{top: "3.5em", left: "3em"}}>{"<body>"}</p>
            <motion.div className={styles["left"]}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: "5%" }
                }}
            >
                <HtmlTag tag="h1">
                    <h1 className={styles["name"]}>this is reazn</h1>
                    <p className={styles["type-writer"]}>
                        I{"'"}M A{" "}
                        <span>
                            <Typewriter words={typeWriterWords} cursor cursorStyle={"|"} loop delaySpeed={2500} />
                        </span>
                    </p>
                </HtmlTag>
                <Link to={"section-about"} offset={-100} smooth={true} duration={700}>
                     <Button style={{ marginTop: "1em" }}>Find Out More</Button>
                </Link>
            </motion.div>
            <motion.div className={styles["right"]}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                variants={{
                    visible: { opacity: 1, y: 0, borderRadius: "20px" },
                    hidden: { opacity: 0, y: "5%", borderRadius: "100px" }
                }}
            >
                <Signature fill="var(--text)" />
            </motion.div>
        </section>
    )
}
