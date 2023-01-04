import styles from "styles/components/Button.module.scss";

export default function Button({ children, icon, href, style, onClick }) {
    return (
        <div style={style}>
            <a className={styles["button"]} href={href} onClick={onClick} target="_blank" rel="noreferrer" tabIndex="-1">
                <button>
                    {children}
                    {icon}
                </button>
            </a>
        </div>
    )
}
