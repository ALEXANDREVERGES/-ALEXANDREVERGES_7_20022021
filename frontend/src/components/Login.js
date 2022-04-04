import '../styles/LogSign.css';
import React, { useState } from 'react';
import{ Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import UseDataLayer from '../AuthProvider';
import ('../components/Nav.js')

export default function Login() {

  function signup(){
    window.location.href="/signup"
  }
  let history = useHistory();
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 const {user, setUser} = UseDataLayer();



  const loginSubmit = (event) => {

    event.preventDefault();

    const Options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password
      }),
    };
    fetch("http://localhost:3000/auth/login", Options)
    .then(response => response.json())
    .then(function(res) {
      if(res.token && res.results){
        // localStorage.setItem("user", JSON.stringify(res));
        setUser(res);
        console.log("user-->", user);
        console.log("test")
        
        
 
        history.push("/");
      } else{
    alert('Mauvais email ou mot de passe !')   
    history.push("/login");
  }     
      })
    
    }
    
    return (
        <div className="pos-form">
      <form className="formulaire" onSubmit={loginSubmit}>
      <div className="choix">
    
  </div>
      <div className="espace-form"> Si vous avez un compte</div>
        <h1 className="white1">Se connecter</h1>
        <label>
          <input
          placeholder="Email"
            name="email"
            type="email"
            onChange={e => setEmail(e.target.value)}
            
            required />
        </label>
        
        <label>
          <input
          placeholder="Votre Mot de passe"
            name="password"
            type="password"
            onChange={e => setPassword(e.target.value)}
            
            required />
        </label>
  
  
        <button className="btnSins" /*</form>onClick={()=> {//history.push('/home');}}*/>Connexion</button>
        <div class="white">Vous n'avez pas de compte?</div>
        <div onClick={signup}>S'inscrire</div>
      
      </form>
      </div>
    );
  }