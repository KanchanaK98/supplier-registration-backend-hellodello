const router = require("express").Router();

const {createSupplier, checkEmail, checkBrandName} = require("../controllers/createSupplier");
const {viewSupplier} = require("../controllers/viewSupplier");

router.post("/add",createSupplier);
router.post("/check/email/:email", checkEmail);
router.post("/check/brandName/:brandName",checkBrandName);

router.get("/view",viewSupplier);


module.exports = router;