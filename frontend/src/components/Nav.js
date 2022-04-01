
import '../styles/Nav.css'
// import user from '../Auth';
import { useHistory } from "react-router-dom";
import React, {useEffect, useState} from "react";
import UseDataLayer from '../Auth';


function Nav() {
    const data  = JSON.parse(localStorage.getItem("user")) 
    const [liens, setLiens] = useState([]);
    const id = data.results.results[0].iduser;
  //  const {user} = UseDataLayer();
  const user = {
    nom:"Tonny",
    prenom:"N",
    email:"tonny@tonny.com",
    motdepasse:"Tonny1",
    idUser:"1",
    photo:"",
    admin:0
}
  
    const bdd = {
     method: "GET",
     headers: { "Content-Type": "application/json" },
     
   };
   useEffect(()=> {
        fetch(`http://localhost:3000/auth/get/${id}`, bdd)
        .then ((res) => res.json())  
        .then ((data) => {
   
        
        setLiens(data);
    }).catch((error) => console.log(error));
   }, []);
      
  
   
  console.log("liens", liens)
    const logoutHandler = async () => {
        localStorage.clear();
        alert('Vous venez de vous déconnecter ! A bientôt !!')
        window.location.href = "/";
      };
      const profil = async () => {
        
        window.location.href = "/profil";
      };
  
      /****************************DATE HEURE*******************************************/
      //  function pause(ms) 
      //  {
      //    return new Promise(resolve => setTimeout(resolve, ms));
      //  }
      
      //  async function afficherDate() 
      //  {
      //    while(true) 
      //    {
      //      await pause(1000);
      //      var cejour = new Date();
      //      var options = {weekday: "long", year: "numeric", month: "long", day: "2-digit"};
      //      var date = cejour.toLocaleDateString("fr-FR", options);
      //      var heure = ("0" + cejour.getHours()).slice(-2) + ":" + ("0" + cejour.getMinutes()).slice(-2) + ":" + ("0" + cejour.getSeconds()).slice(-2);
      //      var dateheure = date + " " + heure;
      //      var dateheure = dateheure.replace(/(^\w{1})|(\s+\w{1})/g, lettre => lettre.toUpperCase());
      //      document.getElementById('dateheure').innerHTML = dateheure;
      //    }
      //  }
      //  afficherDate();
     
  return (
  <div>  
      <div className="container-nav">
        <div className="nav">
          <h2 className="title">
            Groupomania
            </h2> 
          <h2 className="navBtn">
            {user.prenom} {user.nom}
          </h2>
  
          <div className="container_nav">
            <h2  className="navBtn" title="Acceuil">
              <i class="fas fa-home"></i>
            </h2>
            <h2 className="navBtn" onClick={profil} title="profil">
              <i class="far fa-id-badge" ></i>
            </h2>
            <h2 className="navBtn" onClick={logoutHandler} title="déconnexion">
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