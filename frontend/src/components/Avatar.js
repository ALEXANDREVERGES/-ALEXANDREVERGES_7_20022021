import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import UseDataLayer from "../AuthProvider";
import '../styles/Avatar.css';

function Avatar() {
  const [{ user }, dispatch] = UseDataLayer();
  const avatarImage = user.avatar?user.avatar: "default-avatar.jpg";
  
  const avatarSubmit = (event) => {
    event.preventDefault();
    var avatar = document.getElementById("image").files[0].name;
      const modifyAvatar = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          avatar: avatar,
        }),
      };
//  console.log("modifyAvatar", modifyAvatar)

  fetch(`http://localhost:3000/auth/modification/avatar/${user.iduser}`, modifyAvatar)
    .then((res) => {
      alert('Vous venez de changer votre avatar !')
    })
    .catch((error) => console.log(error));
   dispatch({
     type: "SETUSER",
     user:{
      admin: user.admin,
      avatar: avatarImage,
      email: user.email,
      iduser: user.iduser,
      nom: user.nom,
      password: user.password,
      prenom: user.prenom}
   })
  }

  
  return (
    <div>
      <div className='positionForm'>
        <img className='imgAvatar' src={require(`../images/${avatarImage}`)} />
        <div >
          <form onSubmit={avatarSubmit}>
             <form
            
            method="POST"
            encType="multipart/form-data"
            action="http://localhost:3000/upload"
          >
            <input
              type="file"
              accept="image/*"
              name="IMG"
              // onChange={(e) => setPhoto(e.target.value)}
              id="image"
            />
            <input type="submit" value="Téléchargez votre image" />
          </form>
             <button type="submit" className="btnAvatar">
              Changez votre avatar
            </button>   
          </form>
         
        </div>
      </div>
    </div>
  );
}

export default Avatar