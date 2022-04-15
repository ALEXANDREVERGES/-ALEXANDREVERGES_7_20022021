import React, { useEffect, useState } from 'react'
import UseDataLayer from '../AuthProvider';
import Commentaires from '../components/Commentaires'
// import axios from 'axios';




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
       console.log("datatouslescom--->", data) 
       setPostCommentaires(data);
      
      }
      
    }).catch((error) => console.log(error));
    // console.log("commentaires--->", commentaires)
  }, []) 


    
  return (
    <div>

     {postCommentaires.map(commentaires=> 
      (
      <Commentaires idcom={postCommentaires.id} iduser={postCommentaires.iduser} time={postCommentaires.time} commentaires={postCommentaires.commentaires} idpost={postCommentaires.idpost}/>,
       console.log(commentaires)
      )
      )}  
      
    </div>
  );
}



export default TousLesCom