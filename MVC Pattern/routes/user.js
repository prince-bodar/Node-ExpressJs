const express = require("express")
const router = express.Router()
const {handlegetAlluser,
      handleGetUserById,
      handleUpdateUserById,
      handleDeleteById,
      handleCreateNewUser} = require("../controller/user")


// Routes
router.route("/")
      .get(handlegetAlluser)
      .post(handleCreateNewUser);

// Router
router.route("/:id")    
       .get(handleGetUserById)  
       .patch(handleUpdateUserById) 
       .delete(handleDeleteById);

  module.exports = router; 