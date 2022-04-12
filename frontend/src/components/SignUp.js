import React, { useState } from "react";
import '../styles/LogSign.css';

import { Link, useHistory } from "react-router-dom";
//import { toast } from "react-toastify";
//const userRegistered = () => toast.success("Vous êtes bien enregistrés, vous pouvez vous connecter.");

export default function SignUp() {
  // function login(){
  //   window.location.href="/login"
  // }
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const admin = 0;
  // const image = '';

  const signupHandler = (event) => {
    const regexName =/^(([a-zA-ZÀ-ÿ]+[\s\-]{1}[a-zA-ZÀ-ÿ]+)|([a-zA-ZÀ-ÿ]+))$/;
    const regexMail =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]{2,}\.[a-z]{2,4}$/;
    if(regexName.test(prenom) === true){ 
    }else{ 
      
      alert("Veuillez remplir correctement votre prénom") 
    };
    if(regexName.test(nom) === true){ 
    }else{
      alert("Veuillez remplir correctement votre nom") 
    };
    if(regexMail.test(email) === true){ 
    }else{
      alert("Veuillez remplir correctement votre adresse Mail")
    };
    if (
      (regexMail.test(email) === true) &
      (regexName.test(prenom) === true) &
      (regexName.test(nom) === true)  
    ) {
      history.push("/login");

   
    console.log(`
      Email: ${email}
      Password: ${password}
      Prenom: ${prenom}
      Nom: ${nom}
      Admin: ${admin}
      
    `);
    alert('Vous venez de créer votre compte ! Notez bien votre email et Mot de passe !');
    
    event.preventDefault();
  
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nom: nom,
        prenom: prenom,
        email: email,
        password: password,
        admin : admin,
        // image: image
      }),
    };
    console.log("body", requestOptions)
    fetch("http://localhost:3000/auth/signup", requestOptions)
      .then((response) => {
        console.log(response.json());
        console.log(response)
        if (response.ok) {
      
     // window.location = '/home';
        }
      })
      .catch((error) => console.log(error));
      
  }else{
    alert('Veuillez remplir correctement le formulaire')
  }
}
return (
  <div className="pos-form">
<form className="formulaire" onSubmit={signupHandler} >
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
      
      onChange={e => setPrenom(e.target.value)}
      required />
  </label>

  <label>
    <input
    id="nom"
    placeholder="Nom"
      name="nom"
      type="nom"
      onChange={e => setNom(e.target.value)}
      required />     
  </label>
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


  <button className="btnSins">S'inscrire</button>
  <div className="white">Vous avez déjà un compte?</div>
 {/* <Link to="/login"><div>Se connecter</div></Link> */}
 <div>Se connecter</div>

</form>
</div>
);
}