import { faComment } from "@fortawesome/free-solid-svg-icons";
import "../styles/Feed.css"
import Commentaires from "./Commentaires";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UseDataLayer from "../AuthProvider";



const name = 'Nicolas Patrick'
const date = 'aujourd hui'
const commentaire = 'Je laisse le premier commentaire !!'

function Feed({message, nom, prenom, date , image}){
  const [{user}, dispatch] = UseDataLayer();
  console.log("typeof", typeof user.admin)

    return (
      <div className="feedMain">
        <div className="container_post">
          <div className="container_nom">
            <div className="structureNom">{prenom} {nom} </div>
            <div className="structureNom1">{date}</div>
          </div>
          <div className="container_com">
            <div>
              <div>{message}</div>
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
                <FontAwesomeIcon icon={faComment} />
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
            {console.log("status admin", user.admin)}
            {user?.admin?(<button>Supprimer</button> ): (<div></div>)}

          </div>
        </div>
      </div>
    );
}

export default Feed;