let Supplier = require("../models/SupplierDetails");

//view all suppliers
exports.viewSupplier = async (req, res) => {
    await Supplier.find()
      .then((supplier) => {
        res.json({
          suppliers : supplier
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };