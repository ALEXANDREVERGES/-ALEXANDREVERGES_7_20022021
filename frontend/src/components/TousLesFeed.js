import React from 'react'
import Feed from '../components/Feed'
const DATA = [
  {
      id:1,
    message: "Voici un super commentaire !!!",
    name: "Alexandre VERGES",
    date: "29/03/2022 à 12h00",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1280px-Image_created_with_a_mobile_phone.png",
  },
  {
    id:2,
    message: "Voici un super commentaire !!!",
    name: "Alexandre VERGES",
    date: "29/03/2022 à 12h00",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1280px-Image_created_with_a_mobile_phone.png",
  },
  {
    id:3,
    message: "Voici un super commentaire !!!",
    name: "Alexandre VERGES",
    date: "29/03/2022 à 12h00",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1280px-Image_created_with_a_mobile_phone.png",
  },
  {
    id:4,
    message: "Voici un super commentaire !!!",
    name: "Alexandre VERGES",
    date: "29/03/2022 à 12h00",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1280px-Image_created_with_a_mobile_phone.png",
  },
  {
    id:5,
    message: "Voici un super commentaire !!!",
    name: "Alexandre VERGES",
    date: "29/03/2022 à 12h00",
    image:
      "",
  },
  {
    id:6,
    message: "Voici un super commentaire !!!",
    name: "Alexandre VERGES",
    date: "29/03/2022 à 12h00",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1280px-Image_created_with_a_mobile_phone.png",
  },
];
 
function TousLesFeed() {
  return (
    <div>
     { DATA.map(feed=>
      (<Feed key={feed.id} message={feed.message} name={feed.name} date={feed.date} image={feed.image} />))}
    </div>
  );
}

export default TousLesFeed