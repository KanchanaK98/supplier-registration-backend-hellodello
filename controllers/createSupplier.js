let Supplier = require("../models/SupplierDetails");

exports.createSupplier = async (req, res) => {
  console.log("save");
  console.log(req.body);
  const {
    brandName,
    establishmentYear,
    productCategory,
    websiteLink,
    portfolioSize,
    approximateRevenue,
    linksOfTopSellingProducts,
    physicalLocations,
    brandPresentation,
    imagesOfStore,
    contactPerson,
    email,
    contactNumber,
    message,
  } = req.body;

  const newSupplier = new Supplier({
    brandName,
    establishmentYear,
    productCategory,
    websiteLink,
    portfolioSize,
    approximateRevenue,
    linksOfTopSellingProducts,
    physicalLocations,
    brandPresentation,
    imagesOfStore,
    contactPerson,
    email,
    contactNumber,
    message,
  });

  const duplicateBrand = await Supplier.findOne({ brandName });
  if (duplicateBrand) {
    return res
      .status(200)
      .json({ message: "Brand already exists", success: false });
  }

  await newSupplier
    .save()
    .then(() => {
      res
        .status(200)
        .json({ message: "Supplier has successfully added!", success: true });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Supplier has not inserted!",
        error: err.message,
        success: false,
      });
    });
};

exports.checkEmail = async (req, res) => {
  console.log("check email");
  await Supplier.findOne({ email: req.params.email })
    .then((data) => {
      console.log(data);
      if (data) {
        return res
          .status(400)
          .json({ message: "This email is already used", success: false });
      }
      return res
        .status(200)
        .json({ message: "You are good to go", success: true });
    })
    .catch((error) => {
      return res.status(400).json({ message: error.message, success: false });
    });
};
