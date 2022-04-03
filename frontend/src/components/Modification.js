import React from 'react';


function Modification(){
  return (
    <div className="container_profil">
      <form className="profil1">
        <div className="container_desc1">
          <div className="container_info1">
            <div className="white">
              Veuillez remplir tous les champs pour la mofification
            </div>
            <div className="align">
              <label></label>
              <input className="text_underline2" placeholder="Prenom" />
            </div>
            <div className="align">
              <label></label>
              <input className="text_underline2" placeholder="Nom" />
            </div>
            <div className="align">
              <label></label>
              <input className="text_underline2" placeholder="Email" />
            </div>
          </div>
        </div>
        <button className="btnModif">Valider</button>
      </form>
    </div>
  );
}
export default Modification;