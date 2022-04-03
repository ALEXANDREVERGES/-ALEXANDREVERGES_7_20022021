import React from "react";
import '../styles/LogSign.css';
import{ Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
//import { toast } from "react-toastify";
//const userRegistered = () => toast.success("Vous êtes bien enregistrés, vous pouvez vous connecter.");

export default function SignUp() {
  function login(){
    window.location.href="/login"
  }
return (
  <div className="pos-form">
<form className="formulaire" >
<div className="choix">

</div>
<div className="espace-form"> Si vous n'avez pas de compte</div>
  <h1 className="white1">S'inscrire</h1>

  <label>
    <input
    id="prenom"
    placeholder="Prénom"
      name="prenom"
      type="prenom"
    
      required />
  </label>

  <label>
    <input
    id="nom"
    placeholder="Nom"
      name="nom"
      type="nom"
      
      required />     
  </label>
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


  <button className="btnSins">S'inscrire</button>
  <div class="white">Vous avez déjà un compte?</div>
  <div onClick={login}>Se connecter</div>

</form>
</div>
);
}