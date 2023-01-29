import { useContext  } from "react";
import { useNavigate } from "react-router-dom";
import { CurrentUser } from "../context/currentuser";

const Logoutbtn = () =>  {
    const navigate = useNavigate()
    const {setCurrentUser} = useContext(CurrentUser)

    function logout(){
        localStorage.removeItem('token')
        setCurrentUser(null)  
        navigate('/login')
    }

    return (
        <button onClick={logout}>Logout</button>
    )
};

export default Logoutbtn