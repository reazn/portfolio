import styles from "styles/components/sections/Nav.module.scss";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

export default function Nav() {

    const links = ["Home", "About", "Projects", "Experiments"];

    return (
        <header className={styles["nav"]}>
            <ul className={styles["nav-links"]}>
                {links.map((link, index) => (
                    <li key={link}>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index/10}}
                            variants={{
                                visible: { opacity: 1, y: 0 },
                                hidden: { opacity: 0, y: "50%" }
                            }}
                        >
                            <Link to={`section-${link.toLowerCase()}`} offset={-100} smooth={true} duration={700}>
                                <span className={styles["link-numbers"]}>0{index + 1}.</span> {link}
                            </Link>
                        </motion.div>
                    </li>
                ))}
            </ul>
        </header>
    )
}
