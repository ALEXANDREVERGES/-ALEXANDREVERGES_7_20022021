import React from 'react'
import UseDataLayer from '../AuthProvider';
import user from '../AuthProvider';
import '../styles/Profil.css'



function Profil() {
    const {user} = UseDataLayer();
    function modification(){
        window.location.href="/modification"
      }
  return (
    <div className="container_profil">
    <form className="profil" >
        <div className="container_desc">
            <div className="container_photo">
                <div className="container_img"></div>
                <div className="text">Groupomania</div>
                
            </div>
            <div className="container_info">
            <div className="align">
                <div className="text_underline">Nom : {user.nom}</div>
                    
            </div>
                <div className="align">
                    <div className="text_underline">Prénom : {user.prenom}</div>
                    
                </div>
               
                <div className="align">
                    <div  className="text_underline">Email : {user.email}</div>
                    
                </div>
                
            </div>
        </div>
        <div>
            <button className="btnModif" onClick={modification} >Mofifier profil</button>
            <button className="btnModif">Supprimer compte</button>
            </div>
    </form>


</div>
  )
}

export default Profil