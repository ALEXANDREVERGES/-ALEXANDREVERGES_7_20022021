import '../styles/LogSign.css';
import React from 'react';
import{ Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import ('../components/Nav.js')

export default function Login() {

 
 
    
    return (
        <div className="pos-form">
      <form className="formulaire" >
      <div className="choix">
    
  </div>
      <div className="espace-form"> Si vous avez un compte</div>
        <h1 className="white1">Se connecter</h1>
        <label>
          <input
          placeholder="Email"
            name="email"
            type="email"
            
            
            required />
        </label>
        
        <label>
          <input
          placeholder="Votre Mot de passe"
            name="password"
            type="password"
            
            
            required />
        </label>
  
  
        <button className="btnSins" /*</form>onClick={()=> {//history.push('/home');}}*/>Connexion</button>
        <div class="white">Vous n'avez pas de compte?</div>
      
      </form>
      </div>
    );
  }