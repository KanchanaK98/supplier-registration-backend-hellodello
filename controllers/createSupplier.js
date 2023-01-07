let Supplier = require("../models/SupplierDetails");

exports.createSupplier = async (req,res) => {
    const { 
        brandName,
        establishmentYear,
        productCategory,
        websiteLink,
        portfolioSize,
        approximateRevenue,
        linksOfTopSellingProducts,
        physicalShops,
        physicalLocations,
        brandPresentation,
        imagesOfStore,
        contactPerson,
        email,
        contactNumber,
        message
      } = req.body;

      const newSupplier = new Supplier({
        brandName,
        establishmentYear,
        productCategory,
        websiteLink,
        portfolioSize,
        approximateRevenue,
        linksOfTopSellingProducts,
        physicalShops,
        physicalLocations,
        brandPresentation,
        imagesOfStore,
        contactPerson,
        email,
        contactNumber,
        message
      });

      const duplicateBrand = await Supplier.findOne({brandName});
      if(duplicateBrand)
      {
        return res.status(200).json({message:"Brand already exists",success:false});
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
}