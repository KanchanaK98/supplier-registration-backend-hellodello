const router = require("express").Router();

const {createSupplier} = require("../controllers/createSupplier");

router.post("/add",createSupplier);

module.exports = router;