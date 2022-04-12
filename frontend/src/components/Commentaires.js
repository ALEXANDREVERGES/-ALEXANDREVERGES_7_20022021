import React from 'react'
import "../styles/Commentaires.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const admin = 1;



function Commentaires({name, date, commentaire}) {
  return (
    <div className="allCom">
      <div className="cardCom1">
        <div className="container_cardCom1">
          <div className='icon_cardcom'>
            <div>{name}</div>
            {admin ? <FontAwesomeIcon icon={faTrash} /> : <div></div>}
          </div>
          <div className='date_cardcom'>
            <div className="dateheureucom">{date}</div>
          </div>
          
          <div>
             
          </div>
         
        </div>
        <div>{commentaire}</div>
      </div>
    </div>
  );
}

export default Commentaires