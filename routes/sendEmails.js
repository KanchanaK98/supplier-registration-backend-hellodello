const router = require("express").Router();

const {sendEmail} = require("../controllers/sendEmails");

router.post("/sendEmail",sendEmail);


module.exports = router;