const express = require('express');
const router = express.Router();

const multer = require('../middleware/multer-config.js')
const auth = require('../middleware/auth.js');
const postCtrl  = require('../controllers/post.js');


router.post('/post',postCtrl.createPost);
router.get('/get/commentaire', postCtrl.getPost);
router.get('/get/commentaire/:id',postCtrl.getOnePost);
router.delete('/delete/:id',postCtrl.deleteCom)
router.delete('/delete/compost/:id',postCtrl.deleteComPost)
router.post('/post/com',postCtrl.createComPost);
router.get('/get/post/com', postCtrl.getPostCom);
router.get('/get/onepost/:id',postCtrl.getOneComPost)
router.put('/update/:id', postCtrl.updatePost);

module.exports = router;
