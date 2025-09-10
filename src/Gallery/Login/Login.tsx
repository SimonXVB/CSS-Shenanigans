import styles from "./login.module.css"
import { Input } from "./Input/Input"
import logo from "../Assets/dummyLogoYellow.png"
import { useNavigate } from "react-router"

export function Login() {
    const nav = useNavigate();

    return (
        <section className={styles.login}>
            <div className={styles.form_wrapper}>
                <form className={styles.login_form} onSubmit={e => { e.preventDefault(); nav("/gallery/profile") }}>
                    <span>Welcome back!</span>
                    <Input title={"E-Mail:"}/>
                    <Input title={"Password:"}/>
                    <div className={styles.form_check}>
                        <label htmlFor="check">Remember me?</label>
                        <input id="check" type="checkbox"/>
                    </div>
                    <button type="submit">Login</button>
                    <div className={styles.form_links}>
                        <a href="https://www.youtube.com/watch?v=9yjZpBq1XBE" target="_blank">Forgot password</a>
                        <a href="https://www.youtube.com/watch?v=bah3ZIJS8Yo" target="_blank">Don't have an account?</a>
                    </div>
                </form>
                <div className={styles.login_right}>
                    <img src={logo} alt="Logo"/>
                    <p>Gallery CSS</p>
                </div>
            </div>
        </section>
    )
};