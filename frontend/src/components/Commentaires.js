import React, { useState } from 'react'
import "../styles/Commentaires.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faTrash } from '@fortawesome/free-solid-svg-icons';
import UseDataLayer from '../AuthProvider';
import TousLesCom from './TousLesCom';
import '../styles/Responsive.css';

const localstoragetoken = JSON.parse(localStorage.getItem("userlog"));


  function Commentaires({idcom, key, id, nom, prenom, time,commentaires, idpost }) {
 
  const [{user}, dispatch] = UseDataLayer();
 
  //********************************DELETE COM ******************/
  const deleteCom= () => {   
    const delcom = {
        method: "DELETE",
       headers: { "Content-Type": "application/json", 'Authorization': `Bearer ${localstoragetoken}` }
      }    
     fetch(`http://localhost:3000/api/delete/compost/${idcom}`, delcom)
     .then((res) => {    
         alert('Le Commentaire est supprimé !')
         document.location.reload();
     }) 
      .catch((error) => console.log(error));
}


  return (
    <div className="allCom">
      <div className="cardCom1">
        <div className="container_cardCom1">
          <div className="icon_cardcom">
            <div className="nameCom">{nom} {prenom}</div>
            {user[0]?.admin ? <FontAwesomeIcon icon={faTrash} onClick={deleteCom}  /> : <div></div>}
          </div>
          <div className="date_cardcom">
            <div className="dateheureucom">{time}</div>
          </div>
          <div></div>
        </div>
        <div className="commentaireCom">{commentaires}</div>
      </div>    
    </div>
  );
}

export default Commentaires