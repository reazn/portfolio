import styles from "styles/components/sections/Projects.module.scss";
import { Button, Title, LinkIcon, HtmlTag } from "components";
import { motion } from "framer-motion";
import config from "config";

export default function Projects() {

    return (
        <section id="section-projects" className={styles["projects"]}>
            <div className={styles["content"]}>
                <Title text="Projects" />
                <ul>
                    {config.projects.map((project, index) => (
                        <motion.li key={project.title} className={styles["project"]}
                           initial="hidden"
                           whileInView="visible"
                           viewport={{ once: true }}
                           transition={{ duration: 0.5 }}
                           variants={{
                               visible: { opacity: 1, y: 0 },
                               hidden: { opacity: 0, y: "5%" }
                           }}
                        >
                            <div className={styles["image-container"]}>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={`/images/projects/${project.image}`} alt={"project graphic"} />
                            </div>
                            <div className={styles["info"]}>
                                <HtmlTag tag="h3" style={{marginBottom: "-2.5em"}}>
                                    <div className={styles["title"]}>{project.title}</div>
                                </HtmlTag>
                                <HtmlTag tag="p" style={{marginBottom: "-1.5em"}}>
                                    <p className={styles["description"]}>{project.description}</p>
                                </HtmlTag>
                                <div className={styles["technologies"]}>
                                    {project.technologies.map((tech, index) => (
                                        <span key={index}>{tech}</span>
                                    ))}
                                </div>
                                <div className={styles["links"]}>
                                    <Button icon={<LinkIcon fill="var(--accent)" />} href={project.demo}>
                                        Demo
                                    </Button>
                                    <a className={styles["github"]} href={project.github}>GitHub</a>
                                </div>
                            </div>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
