import { faComment } from "@fortawesome/free-solid-svg-icons";
import "../styles/Feed.css"
import Commentaires from "./Commentaires";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UseDataLayer from "../AuthProvider";
import TousLesCom from "./TousLesCom";


const name = 'Nicolas Patrick'
const date = 'aujourd hui'
const commentaire = 'Je laisse le premier commentaire !!'

function Feed({id, message, nom, prenom, date , image}){
  
  const [{user}, dispatch] = UseDataLayer();
  const avatarImage = user.avatar?user.avatar: "default-avatar.jpg";

  const deletePost = () => {
   
   
    const delpost = {
        method: "DELETE",
       headers: { "Content-Type": "application/json" }
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
              <img className="imgFeedAvatar" src={require(`../images/${avatarImage}`)}/>
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
                <div className="btnCom">
                <FontAwesomeIcon className="icon" icon={faComment} />
                  <Commentaires
                 name={name}
                 date={date}
                 commentaire={commentaire}
                  /> 
                </div>
              </div>
            </div>
          </div>
          <div className="cardCom2">
            {/* {console.log("status admin", user.admin)} */}
            {user?.admin?(<button onClick={deletePost} className="DeletePost" >Supprimer Post</button> ): (<div></div>)} 
           

          </div>
        </div>
      </div>
    );
}

export default Feed;