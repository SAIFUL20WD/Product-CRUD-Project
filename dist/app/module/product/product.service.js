"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductServices = void 0;
const product_model_1 = __importDefault(require("./product.model"));
const createProductToDB = (productData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.create(productData);
    return result;
});
const getAllProductsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.find();
    return result;
});
const getProductByIdFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.findOne({ _id: id });
    return result;
});
const updateProductByIdToDB = (id, productData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.findOneAndUpdate({ _id: id }, productData, { new: true });
    return result;
});
const deleteProductByIdFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.deleteOne({ _id: id });
    return result;
});
const getProductsByQueryFromDB = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    // const result = await ProductModel.find({ $text: { $search: searchTerm } });
    const result = yield product_model_1.default.find({ name: new RegExp(searchTerm, "i") });
    return result;
});
const getProductQuantityFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const result = yield product_model_1.default.findById({ _id: id }, { inventory: 1, _id: 0 });
    return ((_a = result === null || result === void 0 ? void 0 : result.inventory) === null || _a === void 0 ? void 0 : _a.quantity) || 0;
});
const updateProductInventoryToDB = (id, updatedInventoryData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.findOneAndUpdate({ _id: id }, { $set: { inventory: updatedInventoryData } });
    return result;
});
exports.ProductServices = {
    createProductToDB,
    getAllProductsFromDB,
    getProductByIdFromDB,
    updateProductByIdToDB,
    deleteProductByIdFromDB,
    getProductsByQueryFromDB,
    getProductQuantityFromDB,
    updateProductInventoryToDB,
};
