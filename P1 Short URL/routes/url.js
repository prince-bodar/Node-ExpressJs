const express = require("express")
const {handleGenreteShortURL} = require("../controllers/url")
const router = express.Router()


router.post("/",handleGenreteShortURL)

module.exports = router;