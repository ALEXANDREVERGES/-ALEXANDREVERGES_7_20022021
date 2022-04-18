import React from "react";
import '../styles/Home.css';
import TousLesFeed from "./TousLesFeed";
import Post from "../components/Post";
import '../styles/Responsive.css';




export default function Home() {
 
  return (
    <div className="container_home">
      <Post /> 
      <div className="container_posthome">
        <TousLesFeed />
      </div>
    </div>
  );
}