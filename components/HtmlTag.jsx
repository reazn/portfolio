import styles from "styles/components/Htmltag.module.scss";

export default function HtmlTag({children, tag, style}) {

    return (
        <div className={styles["tag"]} style={style} before={`<${tag}>`} after={`</${tag}>`}>
            {children}
        </div>
    )
}
