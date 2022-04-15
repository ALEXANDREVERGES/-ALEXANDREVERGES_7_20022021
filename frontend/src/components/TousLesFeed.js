import React, { useEffect, useState } from 'react'
import UseDataLayer from '../AuthProvider';
import Feed from '../components/Feed'
// import axios from 'axios';


// const DATA = [{
//   avatar: "OIP (1).jpg",
// commentaire :"",
// id :28594,
// iduser:89,
// images :"ZiClJf-1920w.jpg",
// nom :"Admin",
// prenom: "Alex",
// time: "2022-04-13T23:07:48.000Z"
// }

// ]

function TousLesFeed() {
const [commentaires, setCommentaires] = useState([]);
const [{token, user}, dispatch] = UseDataLayer();
const localstoragetoken = JSON.parse(localStorage.getItem("userlog"));

    useEffect(() => {
      fetch(`http://localhost:3000/api/get/commentaire`, {
          headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${localstoragetoken}`
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data) {
              // console.log("data", data);
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
     {/* { console.log("commentaires", commentaires) } */}

     {commentaires.map(feed=> 
      (
        
      <Feed id={feed.id} message={feed.commentaire} prenom={feed.prenom} nom={feed.nom} date={feed.time} image={require(`../images/${feed.images}`)} avatar={require(`../images/${feed.avatar}`)} />
     
      
      
      )
      )}  
      
    </div>
  );
}



export default TousLesFeed