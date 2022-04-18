import React from 'react';
import { Link } from 'react-router-dom';
import UseDataLayer from '../AuthProvider';
import user from '../AuthProvider';
import '../styles/Profil.css';
import '../styles/Responsive.css';


function Profil() {

    const [{user}, dispatch] = UseDataLayer();
  
  return (
    <div className="container_profil">
      <form className="profil">
        <div className="container_desc">
          <div className="container_photo">
            <img
              className="imgProfil"
              alt="photo de profil"
              src={require(`../images/${user[0].avatar}`)}
            />
            <div className="text">Groupomania</div>
          </div>
          <div className="container_info">
            <div className="align">
              <div className="text_underline">Nom : {user[0].nom}</div>
            </div>
            <div className="align">
              <div className="text_underline">Prénom : {user[0].prenom}</div>
            </div>
            <div className="align">
              <div className="text_underline">Email : {user[0].email}</div>
            </div>
          </div>
        </div>
        <div className='tousLesBtnProfil'>
          <Link to="/avatar">
            <button className="btnModifAvatar">Modifier avatar</button>{" "}
          </Link>
          <Link to="/modification">
            {" "}
            <button className="btnModif">Mofifier profil</button>
          </Link>
          <Link to="/delete">
            <button className="btnModif">Supprimer compte</button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Profil