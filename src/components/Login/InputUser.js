import React from "react";
import './InputUser.css'

const InputUser = ({ icon, placeholder, type}) => {
  return (
    <form>
      <img alt="Icon-input" src={icon} />
      <input autocomplete type={type} id="name" name="user_name" placeholder={placeholder} required />
    </form>
  );
};

export default InputUser;
