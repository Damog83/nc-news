import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

export default function SignOutPage() {;

    const {setUser} = useContext(UserContext);

    const navigate = useNavigate();

    const SignUserOut = () => {
        setUser();
        window.localStorage.removeItem(`ncNewsSignedInAs`);
        navigate('/')
    }

    return (
        <>
        <button
        type='button'
        onClick={ () => {
            SignUserOut()
        }}
        >Sign Out</button>
        </>
    )
} 