import React from "react";
import '../styles/Home.css'

import Feed from "../components/Feed"
import Post from "../components/Post"

//import {Redirect} from "react-router-dom";
export default function Home() {
  
 
    return (
      <div className="container_home">
       
        <Post />
          <div className="container_posthome">  
            <Feed />
          </div>
      </div>
       
       )
  
 }