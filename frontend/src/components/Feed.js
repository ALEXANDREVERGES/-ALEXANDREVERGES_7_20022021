import "../styles/Feed.css"


function Feed(){
    return (
      <div>
        <div className="container_post">
          <div className="container_nom">
            <div className="structureNom">Alexandre VERGES</div>
            <div className="structureNom1">29/03/2022 à 12h00</div>
          </div>
          <div className="container_com">
            <div>
              <div>Voici un super commentaire !!!</div>
            </div>
          </div>
          <div className="img">
            <img src="https://www.photoglob.fr/wp-content/uploads/2017/09/photo-afrique-coucher-de-soleil-1024x682.jpeg" alt="exemple img" />
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
            <button>Supprimer</button>
          </div>
        </div>
      </div>
    );
}

export default Feed;