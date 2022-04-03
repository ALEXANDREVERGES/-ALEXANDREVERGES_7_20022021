
import '../styles/Nav.css'
// import user from '../Auth';
// import { useHistory } from "react-router-dom";
import React, {useEffect, useState} from "react";
import UseDataLayer from '../AuthProvider';


function Nav() {
  function acceuil(){
    window.location.href="/"
  }
 function profil(){
   window.location.href="/profil"
 }
 const logoutHandler = async () => {
  window.location.href = "/login";
};
     const {user} = UseDataLayer();
//  const user = {
//   nom:"Tonny",
//   prenom:"N",
//   email:"tonny@tonny.com",
//   motdepasse:"Tonny1",
//   idUser:"1",
//   photo:"",
//   admin:0
// };
     
  return (
  <div>  
      <div className="container-nav">
        <div className="nav">
          <h2 className="title" onClick={acceuil}>
            Groupomania
            </h2> 
          <h2 className="navBtn">
            {user.prenom} {user.nom}
          </h2>
  
          <div className="container_nav">
            <h2  className="navBtn" title="Acceuil" onClick={acceuil}>
              <i class="fas fa-home"></i>
            </h2>
            <h2 className="navBtn" title="profil" onClick={profil}>
              <i class="far fa-id-badge" ></i>
            </h2>
            <h2 className="navBtn"  title="déconnexion" onClick={logoutHandler}>
              <i class="fas fa-sign-out-alt"></i>
            </h2>
          </div>
          <span className="spandate" id="dateheure"></span>
        </div>
      </div>
  </div>
  );
}
export default Nav;