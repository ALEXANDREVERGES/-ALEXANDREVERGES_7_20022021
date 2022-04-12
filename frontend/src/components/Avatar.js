import React from 'react'
import UseDataLayer from "../AuthProvider";
import '../styles/Avatar.css';

function Avatar() {
  const [{ user }, dispatch] = UseDataLayer();
  
  const avatarSubmit = (event) => {
    event.preventDefault();
    var avatar = document.getElementById("avatar").files[0].name;
      const modifyAvatar = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
     avatar:avatar,  
    })
    
  };
 console.log("modifyAvatar", modifyAvatar)
  fetch(`http://localhost:3000/auth/modification/avatar/${user.iduser}`, modifyAvatar)
    .then((res) => {
      
    })
    .catch((error) => console.log(error));
  }
  
  return (
    <div>
      <div className='positionForm'>
        <img className='imgAvatar' src={user.avatar} />
        <div >
          <form
            onSubmit={avatarSubmit}
            method="POST"
            enctype="multipart/form-data"
            action="http://localhost:3000/upload"
          >
            <input
              type="file"
              accept="image/*"
              name="IMG"
              // onChange={(e) => setPhoto(e.target.value)}
              id="avatar"
            />

            <input type="submit" value="Valider votre image" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Avatar