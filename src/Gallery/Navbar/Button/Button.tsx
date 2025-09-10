import styles from "./button.module.css"

interface ButtonInterface {
    icon?: React.ReactNode,
    title: string,
    active: boolean,
    setActive: () => void
}

export function Button({ icon, title, active, setActive }: ButtonInterface) {
    return (
        <button className={styles.navbar_button} style={active ? {color: "#F5EA12", backgroundPosition: "100% 0%", scale: "105%"} : {}} onClick={setActive}>
            {icon}
            <span>{title}</span>
        </button>
    )
}