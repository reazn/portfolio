import styles from "styles/components/Title.module.scss";
import { HtmlTag } from "components";

export default function Title({ children, style }) {
    return (
        <HtmlTag tag="h2" style={{lineHeight: "1.9em"}}>
            <h2 className={styles["section-title"]} style={style}>{children}
                {/*<svg width="90" height="6" viewBox="0 0 90 6" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
                {/*    <line x1="3" y1="3" x2="55" y2="3" stroke="var(--accent)" strokeWidth="5" strokeLinecap="round" />*/}
                {/*    <path d="M76 3H66" stroke="var(--accent)" strokeWidth="5" strokeLinecap="round" />*/}
                {/*    <path d="M87 3H86" stroke="var(--accent)" strokeWidth="5" strokeLinecap="round" />*/}
                {/*</svg>*/}
            <div className={styles["line"]}></div>
            </h2>
        </HtmlTag>
    )
}
