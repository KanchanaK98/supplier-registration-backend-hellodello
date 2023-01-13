const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const supplierSchema = new Schema({
    brandName :{
        type : String,
        required : true
    },
    establishmentYear :{
        type : String,
        required : true
    },
    productCategory :{
        type : String,
        required : true
    },
    websiteLink : {
        type : String
    },
    portfolioSize :{
        type : String,
        required : true
    },
    approximateRevenue :{
        type : String,
        required : true
    },
    linksOfTopSellingProducts : [{ // array type strings seperated with commas
        type : String,
        required : true
    }],
    physicalLocations : [{ // array type strings seperated with commas
        type : String,
        required : false
    }],
    brandPresentation : {
        type : String,
        required : false
    },
    imagesOfStore : {
        type : String,
        required : false
    },
    contactPerson : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    contactNumber : {
        type : String,
        required : true
    },
    message : {
        type : String,
        required : false
    }
});

const Supplier = mongoose.model("Supplier",supplierSchema);
module.exports = Supplier;