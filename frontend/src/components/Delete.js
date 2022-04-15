import React from "react";
import{ Link } from "react-router-dom";
import UseDataLayer from "../AuthProvider";
import '../styles/Delete.css';
const localstoragetoken = JSON.parse(localStorage.getItem("userlog"));
function Delete(){
    const [{user}, dispatch] = UseDataLayer();
    const deleteHandler = async () => {
        const delcom = {
            method: "DELETE",
           headers: { "Content-Type": "application/json", 'Authorization': `Bearer ${localstoragetoken}` }
          }
         
         fetch(`http://localhost:3000/auth/delete/${user.iduser}`, delcom)
         .then((res) => {
             alert('Votre compte est supprimé ! A bienôt !')
         }) 
          .catch((error) => console.log(error));
          dispatch({ type: "SETUSER", user: null });

          
    }


    return (
        <div className="container_delete">
            <div className="delete">
                <div className="margin_delete">Supprimer mon compte:</div>
                <Link className="nonoui" to="/profil">Non</Link>
                <div className="nonoui" onClick={deleteHandler}>Oui</div>
            </div>
        </div>
    )
}



export default Delete;