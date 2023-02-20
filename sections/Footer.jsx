import styles from "styles/components/sections/Footer.module.scss";
import {GitHub, Twitter, LinkedIn, CodePen, Button, Title, Discord} from "components";
import config from "config";

export default function Footer() {
    return (
        <footer id="section-contact" className={styles["footer"]}>
            <Title text="Get In Touch">Get In Touch</Title>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p className={styles["description"]}>Feel free to contact me via any of the methods below, i'm always interested in speaking with like-minded people.</p>
            <ul className={styles["social"]}>
                <li><a href={`https://github.com/${config.social.github}`} target="_blank" rel="noreferrer"><GitHub fill="var(--text)"/></a></li>
                <li><a href={`https://codepen.io/${config.social.codepen}`} target="_blank" rel="noreferrer"><CodePen fill="var(--text)"/></a></li>
                <li><a href={`https://linkedin.com/in/${config.social.linkedin}`} target="_blank" rel="noreferrer"><LinkedIn fill="var(--text)"/></a></li>
                <li><a href={`https://twitter.com/${config.social.twitter}`} target="_blank" rel="noreferrer"><Twitter fill="var(--text)"/></a></li>
                <li><a href={`https://discord.com/users/${config.social.discord}`} target="_blank" rel="noreferrer"><Discord fill="var(--text)"/></a></li>
            </ul>
            <Button href={`mailto:${config.social.email}`}>{config.social.email}</Button>
            <p className={styles["tag"]} style={{bottom: "2em", left: "2em"}}>{"<html>"}</p>
            <p className={styles["tag"]} style={{bottom: "3em", left: "3em"}}>{"<body>"}</p>
            <a className={styles["copyright"]} href="https://github.com/reazn/portfolio">© {new Date().getFullYear()} Lewis Thompson (REAZN)</a>
        </footer>
    )
}
