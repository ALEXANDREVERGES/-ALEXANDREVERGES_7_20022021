import "../styles/Feed.css"
import Commentaires from "./Commentaires";

const admin = 1;

const name = 'Nicolas Patrick'
const date = 'aujourd hui'
const commentaire = 'Je laisse le premier commentaire !!'

function Feed({message, name, date , image}){


    return (
      <div className="feedMain">
        <div className="container_post">
          <div className="container_nom">
            <div className="structureNom">{name}</div>
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
                  <i class="far fa-comment"></i>
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
            {admin?<button>Supprimer</button> : <div></div>}
          </div>
        </div>
      </div>
    );
}

export default Feed;