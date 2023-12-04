import { useContext } from "react";
import styles from './login.module.css';
import AuthContext from "../../contexts/authContext";
import useForm from "../../hooks/useForm";

const LoginFormKeys = {
    Email: 'email',
    Password: 'password'
}

const Login = () => {
    const { loginSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: '',
    });

    return (
        <div className={styles.formContainer}>
            <form className={styles.form} onSubmit={onSubmit}>
                <h2>Login</h2>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={values[LoginFormKeys.Email]}
                        onChange={onChange}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={values[LoginFormKeys.Password]}
                        onChange={onChange}
                    />
                </div>
                <button type="submit" className={styles.submitButton}>Login</button>
            </form>
        </div>
    );
};

export default Login;
