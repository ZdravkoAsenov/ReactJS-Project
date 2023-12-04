import { useContext } from "react";
import AuthContext from "../../contexts/authContext";

export default function Home() {
    const {
        isAuthenticated,
        username,
      } = useContext(AuthContext);
    return (
        <h1>Home -  {username ? username : 'Guest'}</h1>
    );
}