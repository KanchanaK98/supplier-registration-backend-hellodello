const router = require("express").Router();

const {createSupplier, checkEmail} = require("../controllers/createSupplier");

router.post("/add",createSupplier);
router.post("/check/email/:email", checkEmail);


module.exports = router;