import "./button.css"

interface ButtonInterface {
    icon?: React.ReactNode,
    title: string,
    active: boolean,
    setActive: () => void
}

export function Button({ icon, title, active, setActive }: ButtonInterface) {
    return (
        <button className={`navbar-button ${active && "nav-active"}`} onClick={setActive}>
            {icon}
            <span>{title}</span>
        </button>
    )
}