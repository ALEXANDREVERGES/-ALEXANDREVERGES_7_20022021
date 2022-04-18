import { faComment, faPaperPlane, faTrash } from "@fortawesome/free-solid-svg-icons";
import "../styles/Feed.css"
import Commentaires from "./Commentaires";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UseDataLayer from "../AuthProvider";
import '../styles/Responsive.css';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";



const localstoragetoken = JSON.parse(localStorage.getItem("userlog"));
function getAvatar(avatar) {
  if (!avatar){
    return "default-avatar.jpg";
  }
  else{
    return avatar;
  }
}

function Feed({id, message, nom, prenom, date , image, avatar}){
  
  const [{user}, dispatch] = UseDataLayer();
  const [post, setPost] = useState([]);
  const [showUpdate, setUpdate] = useState(false);
  const [comPost, setComPost] = useState("");

 useEffect(()=>{
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
        setComPost(data)    
       }
     }).catch((error) => console.log(error));   
 },[])
   
 

   const getCom = () =>{
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
          setPost(data)    
         }
       }).catch((error) => console.log(error));   
   }
    
 const publierComPost = (event) => {
  event.preventDefault(); 
  var d = new Date();
  var date = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
  var hours = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
  var fullDate = date + hours;

  const formComShow = {
    method: "POST",
    headers: { "Content-Type": "application/json", 'Authorization': `Bearer ${localstoragetoken}`},
    body: JSON.stringify({
      commentaires:comPost,
      iduser:user[0].iduser,
      time:fullDate,    
    })
  }
    fetch(`http://localhost:3000/api/post/com/${id}`, formComShow)
      .then((res) => {})
      .catch((error) => console.log(error)); 
  };
 


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
              <img className="imgFeedAvatar" alt="photo de profil" src={avatar} />
            </div>
            <div className="DateName">
              <div className="structureNom">
                {prenom} {nom}{" "}
              </div>
              <div className="structureNom1">{date}</div>
            </div>
          </div>
          <div className="container_com">
            <div>
              <div className="messageFeed">{message}</div>
            </div>
          </div>
          <div className="img">
            <img alt="photo du post user" src={image} />
          </div>
          <div>
            <br />
            <div className="choice"> 
            
              <div
                className="cardCom"
                onClick={getCom}
                onDoubleClick={() => setUpdate(!showUpdate)}
              ><div className="detailCom">{comPost.length}</div>
                <FontAwesomeIcon className="icon" icon={faComment} />{" "}
               
                {showUpdate === true}
                {showUpdate && (
                  <div>
                    {post.map((commentaires) =>
                      commentaires?.idpost === id ? (
                        <Commentaires
                          idcom={commentaires?.id}
                          iduser={commentaires?.iduser}
                          time={commentaires?.time}
                          commentaires={commentaires?.commentaires}
                          idpost={commentaires?.idpost}
                          nom={commentaires?.nom}
                          prenom={commentaires?.prenom}
                          avatar={commentaires?.avatar}
                        />
                      ) : (
                        // <p>pas de commentaires</p>
                        <div></div>
                      )
                    )}
                    <div className="inputButtonCom">
                      <input
                        id="post"
                        placeholder="Votre commentaire..."
                        name="nom"
                        type="text"
                        className="textareaCom"
                        onChange={(e) => setComPost(e.target.value)}
                      />
                      {/* <button id="inputComPost"  onClick={publierComPost} className="inputComPost">Répondre</button> */}
                      <button className="buttonCom" onClick={publierComPost}>
                        <FontAwesomeIcon icon={faPaperPlane} />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="cardCom2">
            {user[0]?.admin ? (
              <button onClick={deletePost} className="DeletePost">
                <FontAwesomeIcon className="faTrashIcon" icon={faTrash} />
                Supprimer Post
              </button>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    );
}

export default Feed;