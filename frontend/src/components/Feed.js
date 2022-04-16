import { faComment, faTrash } from "@fortawesome/free-solid-svg-icons";
import "../styles/Feed.css"
import Commentaires from "./Commentaires";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UseDataLayer from "../AuthProvider";
import TousLesCom from "./TousLesCom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


const name = 'Nicolas Patrick'
const date = 'aujourd hui'
const commentaire = 'Je laisse le premier commentaire !!'
const localstoragetoken = JSON.parse(localStorage.getItem("userlog"));
function getAvatar(avatar) {
// console.log("avatar", avatar);
  if (!avatar){
    return "default-avatar.jpg";
  }
  else{
    return avatar;
  }

}

function Feed({id, message, nom, prenom, date , image, avatar}){
  
  // console.log("feed.id", id)
  const [{user}, dispatch] = UseDataLayer();
  const [post, setPost] = useState([]);
  const [showUpdate, setUpdate] = useState(false);
  // console.log("avatar", avatar)
//  const avatarImage = avatar?avatar: "default-avatar.jpg";
  // const avatarImage = getAvatar(avatar);
// console.log("avatarImage",avatarImage);
 
   const getCom = () => {
    
       fetch(`http://localhost:3000/api/get/post/com/${id}`, 
       {
         headers:
         {
           'Content-Type': 'application/json',
           'Authorization': `Bearer ${localstoragetoken}` 
        
         }
       })
       .then ((res) => res.json())  
       .then ((data) => {
         if (data) {
          console.log("data", data) 
          setPost(data)
        
         }
        
       }).catch((error) => console.log(error));
       // console.log("commentaires--->", commentaires)
      
     
   }
 

  const deletePost = () => {
   
   
    const delpost = {
        method: "DELETE",
       headers: { "Content-Type": "application/json", 'Authorization': `Bearer ${localstoragetoken}` }
      }
     
     fetch(`http://localhost:3000/api/delete/${id}`, delpost)
     .then((res) => {
         alert('Le Post est supprimé !')
     }) 
      .catch((error) => console.log(error));
  

      
}

    return (
      <div className="feedMain">
        <div className="container_post">
          <div className="container_nom">
            <div className="imgName"> 
              <img className="imgFeedAvatar" src={avatar}/>
            </div>
            <div className="DateName">
              <div className="structureNom">{prenom} {nom} </div> 
              <div className="structureNom1">{date}</div>
            </div>
           
          </div>
          <div className="container_com">
            <div>
              <div className="messageFeed">{message}</div>
            </div>
          </div>
          <div className="img">
            <img src={image}/>
          </div>
          <div>
            <br />
            <div className="choice">
              <div className="cardCom">
                <div onClick={getCom} onDoubleClick={()=> setUpdate(!showUpdate)}className="btnCom">
               <FontAwesomeIcon className="icon" icon={faComment} onClick={getCom} onDoubleClick={()=> setUpdate(!showUpdate)}  /> Voir les commentaires
               {showUpdate=== true} 
               {showUpdate && (
                 
                  <Commentaires
                  />
                  
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="cardCom2">
            {/* {console.log("status admin", user.admin)} */}
            {user[0]?.admin?(<button onClick={deletePost} className="DeletePost" ><FontAwesomeIcon className="faTrashIcon" icon={faTrash} />Supprimer Post</button> ): (<div></div>)} 
           

          </div>
        </div>
      </div>
    );
}

export default Feed;