import express from "express";
const productRouter = express.Router();
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductByBarcode,
} from "../controllers/productsController.js";
import { protect } from "../middlewares/authMiddleware.js";

productRouter.route("/").get(protect, getProducts).post(protect, createProduct);
productRouter
  .route("/:id")
  .get(protect, getProductById)
  .patch(protect, updateProduct)
  .delete(protect, deleteProduct);
productRouter.route("/barcode/:barcode").get(protect, getProductByBarcode);
export default productRouter;
