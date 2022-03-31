import React from 'react'
import "../styles/Commentaires.css"


const admin = 1;



function Commentaires({name, date, commentaire}) {
  return (
    <div className='allCom'>
      <div className="cardCom1">
        <div className="container_cardCom1">
          <div>{name}</div>
          <div className="dateheureucom">{date}</div>
        </div>
        <div>{commentaire}</div>
        {admin ? <button>Supprimer</button> : <div></div>}
      </div>
    </div>
  );
}

export default Commentaires