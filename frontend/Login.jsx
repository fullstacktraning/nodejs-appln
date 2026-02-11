import axios from "axios";
import { useRef } from "react";
import {useNavigate} from "react-router-dom"
const Login = ()=>{
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const navigate = useNavigate();
    const login = async ()=>{
        try{
            const {data} = await axios.post("http://localhost:9000/api/auth/login",
                                {"email":ref1.current.value,"password":ref2.current.value});
            const {message,token} = data;
            if(message == "Login Success"){
                window.localStorage.setItem("token",token);
                navigate("/dashboard");
            }
        }catch(err){
            navigate("/error")
        }
    }
    return(
        <>
            <fieldset>
                <legend>LOGIN</legend>
                <input type="email" ref={ref1} placeholder="enter email"></input>
                <br></br><br></br>
                <input type="password" ref={ref2} placeholder="enter password"></input>
                <br></br><br></br>
                <button onClick={login}>Login</button>
            </fieldset>
        </>
    )
}
export default Login;