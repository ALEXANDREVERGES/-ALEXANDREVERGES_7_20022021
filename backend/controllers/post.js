const db = require('../data/databaseConnect.js');
const fs = require('fs');


exports.createPost = (req, res) => {
  
  const commentaire = req.body.commentaire;
  const iduser = req.body.iduser;
   let images = req.body.images;
  //  console.log("images", images)
  // let uploadPath  = 'C:/Users/33629/Documents/groupomania/backend/images/' + images;
  // console.log("uploadPath----->",uploadPath)
  let uploadPath = images;
  const time = req.body.time;
  const nom = req.body.nom;
  const prenom = req.body.prenom;
 

  //  console.log("uploadPath", uploadPath)
  db.query("INSERT INTO post (commentaire, iduser, time, nom, prenom, images) VALUES(?,?,?,?,?,?)",[commentaire, iduser, time, nom, prenom, uploadPath], (err, results) => {
  if(err){
    res.status(400).json({err});
  } 
 if(results){
     res.status(200).json({message : "Publication effectuée !" });
    //  console.log("results", results)
    
  
 }
  
})
}



exports.getPost = (req, res) => {
  // console.log(req)
//console.log("req.params--getPost-->", req.params)
  db.query("SELECT * FROM post INNER JOIN user ON post.iduser = user.iduser ORDER BY time DESC" , (err, result)=> {
    // db.query("SELECT * FROM post ORDER BY time DESC" , (err, result)=> {
    if(err){
   //   console.log(err)
    } else {
      res.send(result)
     
    }
  })
 
  }
  exports.getOnePost = (req, res) => {
    //  console.log(req)
   //console.log("req.params--getPost-->", req.params)
   const id = req.params.id;
     db.query("SELECT * FROM post INNER JOIN comPost ON post.iduser = comPost.iduser WHERE id=?" , [id],(err, result)=> {
       if(err){
      //   console.log(err)
       } else {
         res.send(result)
        // console.log(result)
       }
     })
    
     }
     /**************************************************** */
     exports.deleteCom = (req, res) => {
      const id = req.params.id;
     
     db.query("DELETE FROM post WHERE id=?", [id] , (err, result)=> {
        if(err){
      
        } else {
          res.send(result)
        }
      })
      }

      /***********************************************************/

      exports.createComPost = (req, res) => {
        const commentaires = req.body.commentaires;
        const iduser = req.body.iduser;
        // console.log("commentaires---->", commentaires)
        // console.log("iduser", iduser)
        const time = req.body.time;
        const idpost=req.params.idpost;
        // console.log("idpost---->", idpost)
        // console.log(time)
        db.query("INSERT INTO comPost (commentaires, iduser, time,idpost) VALUES(?,?,?,?)",[commentaires, iduser,time,idpost], (err, results) => {
        if(err){
          res.status(400).json({err});
        } 
       if(results){
           res.status(200).json({message : "Commentaire effectuée !" });
          
        
       }
        
      })
      }
      //***************************************GET TOUS LES COM**************************** */
      exports.getTousLesCom = (req, res) => {
        // console.log(req)
       //console.log("req.params--getPost-->", req.params)
      
     
         db.query("SELECT * FROM post INNER JOIN compost ON post.iduser = compost.iduser ",(err, result)=> {
          //db.query("SELECT * FROM comPost" ,(err, result)=> {
           if(err){
          //   console.log(err)
           } else {
             res.send(result)
            // console.log(result)
           }
         })
        }

      /***************************************GET POST COM*****************/

      exports.getPostCom = (req, res) => {
        // console.log(req)
       //console.log("req.params--getPost-->", req.params)
      const id = req.params.idpost;
      // console.log(id)
         db.query("SELECT * FROM comPost INNER JOIN user ON comPost.iduser = user.iduser WHERE idpost=? ORDER BY id DESC",[id],(err, result)=> {
          //db.query("SELECT * FROM comPost" ,(err, result)=> {
           if(err){
          //   console.log(err)
           } else {
             res.send(result)
            // console.log(result)
           }
         })
        }
        //***********************************************************************/
        exports.updatePost= (req, res) => {
          try{
         // console.log("req.params.id---->", id)
        //  console.log("req.body--->", req.body)
          const commentaire = req.body.commentaire;
          const images = req.body.images;
          const iduser = req.body.iduser;
          const id = req.params.id;
          const time = req.body.time; 
           db.query("UPDATE post SET  commentaire=?, iduser=?, images=?, time=? WHERE id=? ", [commentaire, iduser,images,time, id], (err, result)=>{
             
           //  console.log("result--->", result)
             if(err) {
              // console.log(err)
             }else {
           // res.send(result)
            res.status(200).json({message: 'Modification effectuée !'})
             }
           })
          }catch (err) {
            res.status(409).json({ message: "Failed registration", err });
          }
        };
        //************************************************/

        exports.deleteComPost = (req, res) => {
          const idcom = req.params.idcom;
          // console.log("idcom--DELETECOMPOST-->", idcom)
          
         db.query("DELETE FROM comPost WHERE id=?", [idcom] , (err, result)=> {
            if(err){
          
            } else {
              res.send(result)
            }
          })
          }
          //****************************************************/

          exports.getOneComPost = (req, res) => {
            
          //console.log("req.params--getPost-->", req.params)
          const id = req.params.id;
            db.query("SELECT * FROM post WHERE id=?" , [id],(err, result)=> {
              if(err){
             //   console.log(err)
              } else {
                res.send(result)
              //  console.log(result)
              }
            })
           
            }