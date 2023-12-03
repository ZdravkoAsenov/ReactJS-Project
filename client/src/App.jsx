import { Routes, Route, useNavigate } from 'react-router-dom';

import AddNews from "./component/add-news/AddNews"
import Header from "./component/headers/Headers"
import Login from "./component/login/Login"
import Register from "./component/register/Register"

function App() {

  return (
    <>
      <Header />

      <Routes>
          {/* <Route exact path="/" element={Home} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add-news" element={< AddNews />} />
      </Routes>
    </>
  )
}

export default App
