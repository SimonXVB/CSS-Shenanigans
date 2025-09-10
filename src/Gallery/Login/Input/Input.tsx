import styles from "./input.module.css"

export function Input({ title }: { title: string }) {
    return (
        <div className={styles.login_input}>
            <p>{title}</p>
            <input type="text"/>
        </div>
    )
};