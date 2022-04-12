import React, { useEffect, useState } from 'react'
import UseDataLayer from '../AuthProvider';
import Feed from '../components/Feed'
// import axios from 'axios';




function TousLesFeed() {
const [commentaires, setCommentaires] = useState([]);
const [{token}, dispatch] = UseDataLayer();
  
    console.log("token de tous les feeds", token);
    useEffect(() => {
      fetch(`http://localhost:3000/api/get/commentaire`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data) {
              console.log("data", data);
              setCommentaires(data);
              //  window.location.reload();
            }
          })
          return (data) => {
            data = false;

          };
    },[commentaires])

    
      
        
    
    // console.log("commentaires--->", commentaires)
  


  return (
    <div>

     {commentaires.map(feed=> 
      (<Feed key={feed.id} message={feed.commentaire} prenom={feed.prenom} nom={feed.nom} date={feed.time} image={require(`../images/${feed.images}`)} />))}    
    </div>
  );
}

export default TousLesFeed