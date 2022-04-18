import React, { useEffect, useState } from 'react';
import UseDataLayer from '../AuthProvider';
import Commentaires from './Commentaires'
import '../styles/Responsive.css';

function TousLesCom() {
    const [postCommentaires, setPostCommentaires] = useState([]);
    const [{token, user}, dispatch] = UseDataLayer();
    const localstoragetoken = JSON.parse(localStorage.getItem("userlog"));
    
useEffect(() => {
    fetch(`http://localhost:3000/api/get/post/com`, 
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
       setPostCommentaires(data);
      } 
    }).catch((error) => console.log(error));
  }, []) 
   
  return (
    <div>
      {postCommentaires.map((commentaires) => (
        <Commentaires
          id={commentaires.id}
          iduser={commentaires.iduser}
          time={commentaires.time}
          commentaires={commentaires.commentaires}
          idpost={commentaires.idpost}
          nom={commentaires.nom}
          prenom={commentaires.prenom}
          avatar={commentaires.avatar}
        />
      ))}
    </div>
  );
}



export default TousLesCom