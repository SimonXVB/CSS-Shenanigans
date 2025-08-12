import "./button.css"

interface ButtonInterface {
    icon?: React.ReactNode,
    title: string
}

export function Button({ icon, title }: ButtonInterface) {
    return (
        <button className="navbar-button">
            {icon}
            <span>{title}</span>
        </button>
    )
}