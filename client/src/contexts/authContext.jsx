import { createContext } from "react";
import { useNavigate } from 'react-router-dom';

import * as authService from '../services/authService'
import usePersistedState from "../hooks/usePersistedState";
import Path from '../paths';

const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    const navigate = useNavigate()
    const [auth, setAuth] = usePersistedState('auth', {});

    const loginSubmitHandler = async (values) => {
        if (values.email.trim() === '' && values.password.trim() === '') {
            confirm(`You must fill in the news information.`);
            return;
        }
        try {

            const result = await authService.login(values.email, values.password);
            
            setAuth(result);

            localStorage.setItem('accessToken', result.accessToken);

            navigate(Path.Home);
        } catch (error) {
            confirm(`You have entered invalid login information.`)
        }
    }

    const registerSubmitHandler = async (values) => {
        if (values.email.trim() === '' && values.password.trim() === '' && values.username.trim() === '' && values.confirmPassword.trim() === '') {
            confirm(`You must fill in the news information.`);
            return;
        }

        if (values.password.trim() !== values.confirmPassword.trim()) {
            confirm(`The passwords are not the same.`);
            return;
        }
        const result = await authService.register(values.email, values.password, values.username);

        setAuth(result);

        localStorage.setItem('accessToken', result.accessToken);

        navigate(Path.Home);
    };

    const logoutHandler = () => {
        setAuth({});
        localStorage.removeItem('accessToken');
    }

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        username: auth.username || auth.email,
        email: auth.email,
        userId: auth._id,
        isAuthenticated: !!auth.accessToken,
    };

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;