import React from "react";
import '../styles/Home.css'
import TousLesFeed from "./TousLesFeed";
// import Feed from "../components/Feed"
import Post from "../components/Post"
import Commentaires from "../components/Commentaires"
import TousLesCom from "./TousLesCom";


//import {Redirect} from "react-router-dom";
export default function Home() {
 
  return (
    <div className="container_home">
      <Post /> 
      <div className="container_posthome">
        <TousLesFeed />
        <TousLesCom/>
        {/* <Commentaires/> */}
      </div>
    </div>
  );
}