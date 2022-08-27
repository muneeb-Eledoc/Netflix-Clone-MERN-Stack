import axios from "../../../axios"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../../context/authContext/AuthContext"
import "./login.scss"
import { loginFailure, loginStart, loginSuccess } from "../../../context/authContext/AuthAction"
import { useNavigate } from "react-router-dom"
import CircularProgress from '@mui/material/CircularProgress';

const Login = () => {
    const navigate = useNavigate()
    const { user, isFetching, dispatch } = useContext(AuthContext)
    useEffect(() => {
        user && navigate("/") 
    }, [user, navigate])
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleLogin = async ()=>{
        if(email !== ""){
            if (password !== '') {
                dispatch(loginStart())
                try{
                   const res = await axios.post("/auth/login", {email, password})
                   dispatch(loginSuccess(res.data))
                   navigate("/")
                }catch(e){
                    dispatch(loginFailure())
                }
            }else{
                alert("Please Enter Password")
            }
        }else{
            alert("Please Enter Email")
        }
    }
    return (
        <div className="login"> 
            <div className="login__wrapper">
                <input type="text" placeholder="Email" onChange={(e)=> setEmail(e.target.value)}/>
                <input type="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)}/>
                <button className="login__btn" onClick={handleLogin} disabled={isFetching}>{isFetching ? <CircularProgress sx={{color: "white", marginTop: "3px"}} size={22}/> : "Login"}</button>
            </div>
        </div>
    )
}

export default Login
