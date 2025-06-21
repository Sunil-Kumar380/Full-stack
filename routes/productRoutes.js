
const express = require("express");
const router = express.Router();

const {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  upload
} = require("../controllers/productControllers");
const verifyToken = require("../middleware/authMiddleware");
const allowRoles = require("../middleware/roleMiddleware");

router.get("/", verifyToken, getProducts);
router.post("/",upload.single("image"), verifyToken, allowRoles("admin"), createProduct);
router.put("/:id", verifyToken, allowRoles("admin"), updateProduct);
router.delete("/:id", verifyToken, allowRoles("admin"), deleteProduct);

module.exports = router;

