import React, { useEffect, useState } from 'react'
import UseDataLayer from '../AuthProvider';
import Feed from '../components/Feed';
import '../styles/Responsive.css';

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
              setCommentaires(data);
            }
            if (!data) {
              return;
            }
          });
    },[commentaires]);


    
  return (
    <div>
      {commentaires.map((feed) => (
        <Feed
          id={feed.id}
          message={feed.commentaire}
          prenom={feed.prenom}
          nom={feed.nom}
          dateTime={feed.time}
          image={require(`../images/${feed.images}`)}
          avatar={require(`../images/${feed.avatar}`)}
        />
      ))}
    </div>
  );
}



export default TousLesFeed