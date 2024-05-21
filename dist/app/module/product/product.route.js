"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const router = express_1.default.Router();
router.post("/products", product_controller_1.ProductControllers.createProduct);
router.get("/products", product_controller_1.ProductControllers.getAllProducts);
router.get("/products/:productId", product_controller_1.ProductControllers.getProductById);
router.put("/products/:productId", product_controller_1.ProductControllers.updateProductById);
router.delete("/products/:productId", product_controller_1.ProductControllers.deleteProductById);
exports.productRouter = router;
