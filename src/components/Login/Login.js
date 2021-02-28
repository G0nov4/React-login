import React from 'react'
import Background from './Background'
import Input from'./Input'
import './Login.css'

const Login = () =>{
    return (
        <div className="container-login">
            <Background />
            <Input/>
        </div>
    );
}

export default Login;