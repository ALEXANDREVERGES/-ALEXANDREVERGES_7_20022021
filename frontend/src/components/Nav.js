import '../styles/Nav.css'
import React, {useEffect, useState} from "react";
import UseDataLayer from '../AuthProvider';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faIdBadge, faSignOutAlt } from "@fortawesome/free-solid-svg-icons"
import { Link, useHistory } from 'react-router-dom';
import '../styles/Responsive.css';

function Nav() {
  
const [{user}, dispatch] = UseDataLayer();
const [nav, setNav] = useState([]);
const localstorageIduser = JSON.parse(localStorage.getItem("userIduser"));
const localstoragetoken = JSON.parse(localStorage.getItem("userlog"));
let history = useHistory();

const handleLogout = () => {  
  localStorage.clear();
  dispatch({
    type: "SETUSER",
    user: null
})
history.push('');
}

useEffect(()=>{
  fetch(`http://localhost:3000/auth/get/${localstorageIduser}`, {
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${localstoragetoken}`
    },
  })
  .then((res) => res.json())
          .then((data) => {
            if (data) {
              localStorage.setItem("userlogIn", JSON.stringify(data));
              setNav(data);
              dispatch({
                type: "SETUSER",
                user: data,
            })
          }        
          });
},[])

  return (
    <div>
      <div className="container-nav">
        <div className="nav">
          <div className="logoTitle">
            <Link to="/">
              <h2 className="title">Groupomania</h2>{" "}
            </Link>
          </div>{" "}
          {nav.map((item) => (
            <div className="navBtn_Name">
              <img
                alt="photo de profil"
                className="imgNav"
                src={require(`../images/${item.avatar}`)}
              />{" "}
              {item.prenom} {item.nom}
            </div>
          ))}
          <div className="container_nav">
            <Link to="/">
              <div className="navBtn" title="Acceuil">
                <FontAwesomeIcon icon={faHome} />
                <div className="navDescription">home</div>
              </div>
            </Link>
            <Link to="/profil">
              <div className="navBtn" title="profil">
                <FontAwesomeIcon icon={faIdBadge} />
                <div className="navDescription">profil</div>
              </div>
            </Link>
            <div onClick={() => dispatch({ type: "SETUSER", user: null })}>
              <div onClick={handleLogout}>
                <div className="navBtn" title="déconnexion">
                  <FontAwesomeIcon icon={faSignOutAlt} />
                  <div className="navDescription">déconnexion</div>
                </div>
              </div>
            </div>
          </div>
          <span className="spandate" id="dateheure"></span>
        </div>
      </div>
    </div>
  );
}
export default Nav;