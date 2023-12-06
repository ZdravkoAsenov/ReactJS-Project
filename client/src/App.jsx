import { Routes, Route, useNavigate } from 'react-router-dom';



import AddNews from "./component/add-news/AddNews"
import Header from "./component/headers/Headers"
import Login from "./component/login/Login"
import Register from "./component/register/Register"
import Path from './paths';
import { AuthProvider } from './contexts/authContext';
import Home from './component/home/Home';
import Logout from './component/logout/Logout';
import NewsList from './component/news -list/NewsList';
import DetailNews from './component/detail-news/DetailNews';
import EditNews from './component/edit-news/EditNews';
import DeleteNews from './component/delete-news/DeleteNews';

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
                    <Route path={Path.ListNews} element={< NewsList />} />
                    <Route path={Path.DetailNews} element={< DetailNews />} />
                    <Route path={Path.EditNews} element={< EditNews />} />
                    <Route path={Path.DeleteNews} element={< DeleteNews />} />
                </Routes>
            </AuthProvider>
        </>
    )
}

export default App
