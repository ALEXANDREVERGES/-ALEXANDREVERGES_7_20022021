import React, { useState } from 'react'
import "../styles/Commentaires.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faTrash } from '@fortawesome/free-solid-svg-icons';
import UseDataLayer from '../AuthProvider';

const localstoragetoken = JSON.parse(localStorage.getItem("userlog"));


  function Commentaires({idcom, iduser, nom, prenom, time,commentaires, idpost }) {

  const [comPost, setComPost] = useState("");
  const [{user}, dispatch] = UseDataLayer();
  
 //****************************************ENVOYER COM  */
 const publierComPost = (event) => {
  event.preventDefault();
  
  var d = new Date();
  var date = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
  var hours = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
  var fullDate = date+' '+hours;


  const formComShow = {
    method: "POST",
    headers: { "Content-Type": "application/json", 'Authorization': `Bearer ${localstoragetoken}`},
    body: JSON.stringify({
      commentaires:comPost,
      iduser:user[0].iduser,
      time:fullDate,    
    })
  }
  console.log("formComShow--->", formComShow)
    fetch(`http://localhost:3000/api/post/com/${idpost}`, formComShow) 
            .then((res) => {
              //  console.log("rescommentaires",)
            })
            .catch((error) => console.log(error));
    
  };
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
      <div className='inputButtonCom'>
         <input
        id="post"
        placeholder="Votre commentaire..."
        name="nom"
        type="text"
        className='textareaCom'
        onChange={(e) => setComPost(e.target.value)}
      />
      {/* <button id="inputComPost"  onClick={publierComPost} className="inputComPost">Répondre</button> */}
      <button className='buttonCom' onClick={publierComPost}><FontAwesomeIcon icon={faPaperPlane} /></button>
      </div>
     
    </div>
  );
}

export default Commentaires