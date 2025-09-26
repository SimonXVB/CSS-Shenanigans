import styles from "./button.module.css"

interface ButtonInterface {
    icon?: React.ReactNode,
    title: string,
}

export function Button({ icon, title }: ButtonInterface) {
    return (
        <button className={styles.navbar_button}>
            {icon}
            <span>{title}</span>
        </button>
    )
}