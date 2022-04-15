import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import UseDataLayer from '../AuthProvider';


function Modification(){ 
    const [{user}, dispatch] = UseDataLayer();
    const [email1, setEmail1] = useState("");
    const [prenom1, setPrenom1] = useState("");
    const [nom1, setNom1] = useState("");
    let history = useHistory();
  const photoSubmit = (event) => {
   
    
    
      const regexName =/^(([a-zA-ZÀ-ÿ]+[\s\-]{1}[a-zA-ZÀ-ÿ]+)|([a-zA-ZÀ-ÿ]+))$/;
      const regexMail =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]{2,}\.[a-z]{2,4}$/;
      if(regexName.test(prenom1) === true){ 
      }else{ 
        
        alert("Veuillez remplir correctement votre prénom") 
      };
      if(regexName.test(nom1) === true){ 
      }else{
        alert("Veuillez remplir correctement votre nom") 
      };
      if(regexMail.test(email1) === true){ 
      }else{
        alert("Veuillez remplir correctement votre adresse Mail")
      };
      if (
       (regexMail.test(email1) === true) &
        (regexName.test(prenom1) === true) &
        (regexName.test(nom1) === true)  
     ) 
     {
      event.preventDefault();
      // var avatar = document.getElementById("avatar").files[0].name;
      const localstoragetoken = JSON.parse(localStorage.getItem("userlog"));
      const formModify = {
          method: "PUT",
          headers: { "Content-Type": "application/json",  'Authorization': `Bearer ${localstoragetoken}` },
          body: JSON.stringify({
            
            nom: nom1,
            prenom: prenom1,
            email: email1,
            
          })
          
        };
        console.log(formModify)
        fetch(`http://localhost:3000/auth/modification/${user.iduser}`, formModify)
        
          .then((res) => {
            history.push('/');
          })
          .catch((error) => console.log(error));
          
      }else{
        alert('Veuillez remplir correctement le formulaire')
      }
  
  }
  return (
    <div className="container_profil">
      
      <form className="profil1" onSubmit={photoSubmit}>
        
        <div className="container_desc1">
          <div className="container_info1">
            <div className="white">
              Veuillez remplir tous les champs pour la mofification
            </div>
            <div className="align">
              <label></label>
              <input className="text_underline2" placeholder="Prenom" onChange={e => setPrenom1(e.target.value)} />
            </div>
            <div className="align">
              <label></label>
              <input className="text_underline2" placeholder="Nom" onChange={e => setNom1(e.target.value)} />
            </div>
            <div className="align">
              <label></label>
              <input className="text_underline2" placeholder="Email" onChange={e => setEmail1(e.target.value)}/>
            </div>
          </div>
        </div>
        <button className="btnModif">Valider</button>
      </form>
    </div>
  );
}
export default Modification;