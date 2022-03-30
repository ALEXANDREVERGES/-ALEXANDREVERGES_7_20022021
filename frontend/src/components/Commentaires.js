import React from 'react'
import "../styles/Commentaires.css"


function Commentaires() {
  return (
    <div>
        <div className="cardCom1">
            <div className="container_cardCom1">
              <div>Nicolas</div>
              <div className="dateheureucom">Aujourd'hui</div>
            </div>          
            <div>Je laisse le premier commentaire !!</div>           
            <button>Supprimer</button>
          </div>
    </div>
  )
}

export default Commentaires