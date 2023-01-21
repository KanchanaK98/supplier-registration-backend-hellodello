const router = require("express").Router();

const {createSupplier, checkEmail} = require("../controllers/createSupplier");
const {viewSupplier} = require("../controllers/viewSupplier");

router.post("/add",createSupplier);
router.post("/check/email/:email", checkEmail);
router.get("/view",viewSupplier);


module.exports = router;