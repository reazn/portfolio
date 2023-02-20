import styles from "styles/components/sections/About.module.scss";
import { Button, Title, HtmlTag, Sphere, LinkIcon } from "components";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import config from "config";

export default function About() {

    return (
        <section id="section-about" className={styles["about"]}>
            <div className={styles["content"]}>
                <div className={styles["left"]}>
                    <Title>A Bit About Me</Title>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5}}
                        variants={{
                            visible: { opacity: 1, y: 0 },
                            hidden: { opacity: 0, y: "5%" }
                        }}
                    >
                    <HtmlTag tag="p">
                        <p>{config.about}</p>
                    </HtmlTag>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2}}
                        variants={{
                            visible: { opacity: 1, y: 0 },
                            hidden: { opacity: 0, y: "5%" }
                        }}
                    >
                        <div className={styles["links"]}>
                            <Button icon={<LinkIcon fill="var(--accent)" />} href={"/cv"}>
                                Curriculum Vitae
                            </Button>
                            <Link to="section-contact" offset={-100} smooth={true} duration={700}>
                                <a className={styles["contact"]} href={""}>Get in touch</a>
                            </Link>
                        </div>

                    </motion.div>

                    </motion.div>
                </div>
                <motion.div className={styles["right"]}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5}}
                    variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: "5%" }
                    }}
                >
                    <Sphere style={{ width: "100%", height: "100%" }} />
                </motion.div>
            </div>
        </section>
    )
}
