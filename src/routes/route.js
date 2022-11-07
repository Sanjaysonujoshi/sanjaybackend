
const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const auth = require("../middleware/auth")
// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

router.post("/users",auth.authenticate, userController.createUser)

router.post("/login",auth.authorise , userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId",  userController.getUserData)
router.post("/users/:userId/posts", userController.postMessage)

router.put("/users/:userId", userController.updateUser)
router.delete('/users/:userId', userController.deleteUser)

module.exports = router;