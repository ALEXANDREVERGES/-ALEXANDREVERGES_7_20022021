import "../styles/Feed.css"


const admin = 1;


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