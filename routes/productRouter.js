const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/menu/:menuType", productController.getMenuItems);
router.get("/menuItem/:id", productController.getItemById);
router.get("/offers", productController.getOffers);
router.get("/food-types", productController.getFoodTypes);

module.exports = router;
