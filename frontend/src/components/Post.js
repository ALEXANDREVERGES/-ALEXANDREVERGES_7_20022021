import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import UseDataLayer from "../AuthProvider";


function Post(){
  const [{user}, dispatch] = UseDataLayer();
   
    // console.log("date--->", date)
    var d = new Date();
    var date = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
    var hours = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    var fullDate = date+' '+hours;

    // const id = user.results.results[0].iduser;
      const [post, setPost] = useState("");
      const [photo, setPhoto] = useState("");
    
      const postSubmit = (event) => {
        event.preventDefault();
         var image = document.getElementById("image").files[0].name;
        const obj = {
          commentaire: post,
          iduser: user.iduser,
          images: image,
          nom: user.nom,
          prenom: user.prenom,
          time: fullDate,
        };
        console.log("obj.images", obj.images);
        axios
          .post("http://localhost:3000/api/post", obj, {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
             
            },
          })
          .then((res) => {
            console.log("response--->", res);
            if (res.status === 200) {
              // window.location.reload();
              //  window.location = "/home";
            }
          })
          .catch((error) => console.log(error));
      }; 
        
        
     //*******************************************ENVOIE POST des commentaires TABLE post mysql */
     
      
      return (
        <div className="pos-form1">
          <form
            className="formulaire1"
            onSubmit={postSubmit}
            method="post"
            // enctype="multipart/form-data"
            action="http://localhost:3000/upload"
          >
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
              method="POST"
              enctype="multipart/form-data"
              action="http://localhost:3000/upload"
            >
              <input
                type="file"
                accept="image/*"
                name="IMG"
                onChange={(e) => setPhoto(e.target.value)}
                id="image"
              />

              <input type="submit" value="Valider votre image" /> 
            </form>
            <button type="submit" className="btnPublier">
              <FontAwesomeIcon icon={faPaperPlane} /> Publier
            </button>  
          </form>
        </div>
      );
}




export default Post