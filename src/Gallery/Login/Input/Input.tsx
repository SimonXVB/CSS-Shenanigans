import "./input.css"

export function Input({ title }: { title: string }) {
    return (
        <div className="login-input">
            <p>{title}</p>
            <input type="text"/>
        </div>
    )
};