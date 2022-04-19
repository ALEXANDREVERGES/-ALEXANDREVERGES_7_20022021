import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import UseDataLayer from "../AuthProvider";
import '../styles/Post.css';
import '../styles/Responsive.css';

function Post(){
  const [{user}, dispatch] = UseDataLayer();
       
    var d = new Date();
    var date = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
    var hours = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    var fullDate = date+' '+hours;   
    const [post, setPost] = useState("");
    const [photo, setPhoto] = useState("");
    
      const postSubmit = (event) => {
        event.preventDefault();
        var setImage = document.getElementById("image").files[0];
        const imagePost = setImage?setImage:null;
        var image = imagePost?imagePost.name:"noIMG.jpg";

        const obj = {
          commentaire: post,
          iduser: user[0].iduser,
          images: image,
          nom: user[0].nom,
          prenom: user[0].prenom,
          time: fullDate,
        };
  
        const localstoragetoken = JSON.parse(localStorage.getItem("userlog"));
        axios
          .post("http://localhost:3000/api/post", obj, {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              'Authorization': `Bearer ${localstoragetoken}`         
            },
          })
          .then((res) => {       
            if (res.status === 200) {
              document.location.reload();
            }
          })
          .catch((error) => console.log(error));
      };     
     //*******************************************ENVOIE POST des commentaires TABLE post mysql */    
      return (
        <div className="pos-form1">
          <form className="formulaire1" onSubmit={postSubmit} method="post">
            <label className="labelHome">
              {" "}
              Hey !
              <textarea
                id="post"
                placeholder="Quoi de neuf ?"
                name="nom"
                type="text"
                onChange={(e) => setPost(e.target.value)}
              />
            </label>
            <form
              className="btnPostImg"
              method="POST"
              encType="multipart/form-data"
              action="http://localhost:3000/upload"
            >
              
              <div className="btnPostImg">
                <input
                  type="file"
                  accept="image/*"
                  name="IMG"
                  onChange={(e) => setPhoto(e.target.value)}
                  id="image"
                  className="inputValiderImg"
                  title="choisir et envoie image"
                /> 
                <input
                  className="inputValiderImg"
                  type="submit"
                  value="Téléchargez votre image"
                  title="choisir et envoie image"
                />
              </div>
            </form>
            <button type="submit" className="btnPublier">
              <FontAwesomeIcon icon={faPaperPlane} className="faPaperIcon" />{" "}
              Publier
            </button>
          </form>
        </div>
      );
}




export default Post