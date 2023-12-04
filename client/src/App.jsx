import { Routes, Route, useNavigate } from 'react-router-dom';



import AddNews from "./component/add-news/AddNews"
import Header from "./component/headers/Headers"
import Login from "./component/login/Login"
import Register from "./component/register/Register"
import Path from './paths';
import { AuthProvider } from './contexts/authContext';
import Home from './component/home/Home';
import Logout from './component/logout/Logout';

function App() {

    return (
        <>
            <AuthProvider>
                <Header />

                <Routes>
                    <Route exact path={Path.Home} element={<Home />} />
                    <Route path={Path.Login} element={<Login />} />
                    <Route path={Path.Register} element={<Register />} />
                    <Route path={Path.Logout} element={<Logout />} />
                    <Route path={Path.AddNews} element={< AddNews />} />
                </Routes>
            </AuthProvider>
        </>
    )
}

export default App
