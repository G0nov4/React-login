import React from "react";
import InputUSer from './InputUser'
import './Input.css'
import icon_google from '../../svg/icon-google.svg'
import icon_github from '../../svg/icon-github.svg'
import icon_gmail from '../../svg/gmail-icon.svg'
import icon_whatsapp from '../../svg/whatsapp-symbol.svg'
import icon_logo from '../../svg/logo.svg'
import icon_user from '../../svg/icon-user.svg'
import icon_password from '../../svg/icon-password.svg'


const Input = () => {
  return (
    <div className="container">
      <div className="input-title">
        <img alt="Logo" src={icon_logo}/>
        <span>LOGIN</span>
        <hr />
      </div>
      <div className="input-user">
        <InputUSer icon={icon_user} placeholder="Usuario" type="text"/>
        <InputUSer icon={icon_password} placeholder="Contraseña" type="password"/>
        <a href="http://google.com">LOGIN</a>
      </div>
      <div className="input-footer">
        <div className="input-other-login">
          <hr />
          <p>or log in with</p>
          <hr />
        </div>
        <div className="user-options">
          <a title="Google" href="http://www.google.com">
            <img src={icon_google} alt="Google" />
          </a>
          <a title="Git Hub" href="http://www.github.com">
              <img src={icon_github} alt="Git Hub" />
          </a>
          <a title="Whatsapp" href="http://www.whatsapp.com">
              <img src={icon_whatsapp} alt="Whatsapp" />
          </a>
          <a title="Gmail" href="http://www.gmail.com">
              <img src={icon_gmail} alt="Gmail" />
          </a>
        </div>
       <a href="https:/www.hola.com">Forgot your password?</a> 
      </div>
    </div>
  );
};

export default Input;
    