
import '../styles/Nav.css'
// import user from '../Auth';
// import { useHistory } from "react-router-dom";
import React, {useEffect, useState} from "react";
import UseDataLayer from '../AuthProvider';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faIdBadge, faSignOutAlt } from "@fortawesome/free-solid-svg-icons"
import { Link, useHistory } from 'react-router-dom';

function Nav() {
  
const [{user}, dispatch] = UseDataLayer();
const [nav, setNav] = useState([]);


const localstorageIduser = JSON.parse(localStorage.getItem("userIduser"));
const localstoragetoken = JSON.parse(localStorage.getItem("userlog"));
console.log("userNav", user)
// const avatarImage = user.avatar?user.avatar: "default-avatar.jpg";
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
              console.log("data-->NAV", data);
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
            <h2 className="navBtn">
              <img
                className="imgNav"
                src={require(`../images/${item.avatar}`)}
              />{" "}
              {item.prenom} {item.nom}
            </h2>
          ))}
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
              <div onClick={handleLogout}>
                <h2 className="navBtn" title="déconnexion">
                  {/* <i class="fas fa-sign-out-alt"></i> */}
                  <FontAwesomeIcon icon={faSignOutAlt} />
                </h2>
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