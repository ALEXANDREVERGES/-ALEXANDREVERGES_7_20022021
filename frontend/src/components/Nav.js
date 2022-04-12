
import '../styles/Nav.css'
// import user from '../Auth';
// import { useHistory } from "react-router-dom";
import React, {useEffect, useState} from "react";
import UseDataLayer from '../AuthProvider';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faIdBadge, faSignOutAlt } from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom';

function Nav() {
 
const [{user}, dispatch] = UseDataLayer();


     
  return (
    <div>
      <div className="container-nav">
        <div className="nav">
          <Link to="/">
            <h2 className="title">Groupomania</h2>{" "}
          </Link>
          <h2 className="navBtn">
           <img src={user.avatar}/> {user.prenom} {user.nom}
          </h2>

          <div className="container_nav">
            <Link to="/">
              <h2 className="navBtn" title="Acceuil">
                {/* <i class="fas fa-home"></i>  */}
                <FontAwesomeIcon icon={faHome} />
              </h2>
            </Link>
            <Link to="/profil">
              <h2 className="navBtn" title="profil">
                {/* <i class="far fa-id-badge" ></i> */}
                <FontAwesomeIcon icon={faIdBadge} />
              </h2>
            </Link>
            <div onClick={() => dispatch({ type: "SETUSER", user: null })}>
              <h2 className="navBtn" title="déconnexion">
                {/* <i class="fas fa-sign-out-alt"></i> */}
                <FontAwesomeIcon icon={faSignOutAlt} />
              </h2>
            </div>
          </div>
          <span className="spandate" id="dateheure"></span>
        </div>
      </div>
    </div>
  );
}
export default Nav;