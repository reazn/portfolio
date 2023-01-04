import styles from "styles/components/sections/Footer.module.scss";
import {Signature, GitHub, Twitter, LinkedIn, CodePen} from "components";
import config from "config";

export default function Footer() {
    return (
        <footer className={styles["footer"]}>
            <p className={styles["tag"]} style={{bottom: "2em", left: "2em"}}>{"<html>"}</p>
            <p className={styles["tag"]} style={{bottom: "3em", left: "3em"}}>{"<body>"}</p>
            <Signature fill="var(--text)"/>
            <ul className={styles["social"]}>
                <li><a href={`https://github.com/${config.social.github}`} target="_blank" rel="noreferrer"><GitHub fill="var(--text)"/></a></li>
                <li><a href={`https://codepen.io/${config.social.codepen}`} target="_blank" rel="noreferrer"><CodePen fill="var(--text)"/></a></li>
                <li><a href={`https://linkedin.com/in/${config.social.linkedin}`} target="_blank" rel="noreferrer"><LinkedIn fill="var(--text)"/></a></li>
                <li><a href={`https://twitter.com/${config.social.twitter}`} target="_blank" rel="noreferrer"><Twitter fill="var(--text)"/></a></li>
            </ul>
            <span className={styles["copyright"]}>© {new Date().getFullYear()} Lewis Thompson (REAZN)</span>
        </footer>
    )
}
