import React, { useState } from 'react'
import "../styles/Commentaires.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faTrash } from '@fortawesome/free-solid-svg-icons';
import UseDataLayer from '../AuthProvider';

const admin = 1;



function Commentaires({name, iduser, time, commentaire, date, idpost}) {
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
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify({
      commentaires:comPost,
      iduser:"",
      time:fullDate,
      // idpost:key
    })
  }
  console.log("formComShow--->", formComShow)
    fetch("http://localhost:3000/api/post/com", formComShow)
          
            .then((res) => {
           
              
            })
            .catch((error) => console.log(error));
    
  };

  return (
    <div className="allCom">
      <div className="cardCom1">
        <div className="container_cardCom1">
          <div className="icon_cardcom">
            <div className="nameCom">{name}</div>
            {admin ? <FontAwesomeIcon icon={faTrash} /> : <div></div>}
          </div>
          <div className="date_cardcom">
            <div className="dateheureucom">{date}</div>
          </div>

          <div></div>
        </div>
        <div className="commentaireCom">{commentaire}</div>
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