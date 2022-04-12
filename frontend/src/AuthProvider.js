import React, { createContext, useContext,  useReducer,  useState } from "react";
import { useHistory } from "react-router-dom";

const dbTableUser = [{
    nom:"Tonny",
    prenom:"N",
    email:"tonny@tonny.com",
    motdepasse:"Tonny1",
    idUser:"1",
    photo:"",
    admin:0
},
{
    nom:"Julien",
    prenom:"François",
    email:"julien@test.com",
    motdepasse:"Tonny1",
    idUser:"2",
    photo:"",
    admin:1
},
{
    nom:"William",
    prenom:"Robert",
    email:"william@test.com",
    motdepasse:"Tonny1",
    idUser:"3",
    photo:"",
    admin:0
},
{
    nom:"Floriant",
    prenom:"Thauvin",
    email:"floriant@test.com",
    motdepasse:"Tonny1",
    idUser:"4",
    photo:"",
    admin:0
},
{
    nom:"Mattéo",
    prenom:"Guen",
    email:"matteo@test.com",
    motdepasse:"Tonny1",
    idUser:"5",
    photo:"",
    admin:0
},
{
    nom:"Sylvie",
    prenom:"Julie",
    email:"sylvie@test.com",
    motdepasse:"Tonny1",
    idUser:"6",
    photo:"",
    admin:0
},
{
    nom:"Sabrina",
    prenom:"Bel",
    email:"sabrina@test.com",
    motdepasse:"Tonny1",
    idUser:"7",
    photo:"",
    admin:0
},
{
    nom:"Jordan",
    prenom:"Thierry",
    email:"jordan@test.com",
    motdepasse:"Tonny1",
    idUser:"8",
    photo:"",
    admin:0
},
{
    nom:"Arthur",
    prenom:"Romain",
    email:"arthur@test.com",
    motdepasse:"Tonny1",
    idUser:"9",
    photo:"",
    admin:0
}]

//get user de la bdd
 const dbUser = dbTableUser[2]; 


//Create context 
export const statContext = createContext();
//UseEffect pour gérer Auth

export const AuthProvider = ({initialState, reducer, children}) => {
    // const [user, setUser] = useState(dbUser);


    
  
    return(
        
        <statContext.Provider value={useReducer(reducer, initialState )} >         
            {children}
        </statContext.Provider>
    );

}

//Récupérer utilisateur après auth
//Ajouter user au data layer/context api


export default function UseDataLayer() {
  return useContext(statContext);
};

