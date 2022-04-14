import React, { useEffect, useState } from 'react'
import UseDataLayer from '../AuthProvider';
import Feed from '../components/Feed'
// import axios from 'axios';




function TousLesFeed() {
const [commentaires, setCommentaires] = useState([]);
const [{token, user}, dispatch] = UseDataLayer();

// function deletePost(){
//  const id = commentaires.id;
//  console.log(id);
//     const delpost = {
//       method: "DELETE",
//      headers: { "Content-Type": "application/json" }
//     }
  
//     fetch(`http://localhost:3000/api/delete/${id}`,delpost, 
//   )
//    .then((res) => {
     
//     //  console.log("res", res)
//      window.location="/home"
//    }) .catch((error) => console.log(error));

  
  

//   }



  
    
    useEffect(() => {
      fetch(`http://localhost:3000/api/get/commentaire`, {
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data) {
              
              setCommentaires(data);
             
            }
            if (!data) {
              return;
            }
          });
        //  console.log("useEffect")
    },[commentaires]);


    
  return (
    <div>

     {commentaires.map(feed=> 
      (
      <Feed id={feed.id} message={feed.commentaire} prenom={feed.prenom} nom={feed.nom} date={feed.time} image={require(`../images/${feed.images}`)}/>
      
      
      
      )
      )}  
      
    </div>
  );
}



export default TousLesFeed