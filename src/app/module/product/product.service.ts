import { TProduct } from "./product.interface";
import ProductModel from "./product.model";

const createProductToDB = async (productData: TProduct) => {
    const result = await ProductModel.create(productData);
    return result;
};

const getAllProductsFromDB = async () => {
    const result = await ProductModel.find();
    return result;
};

const getProductByIdFromDB = async (id: string) => {
    const result = await ProductModel.findOne({ _id: id });
    return result;
};

const updateProductByIdToDB = async (id: string, productData: TProduct) => {
    const result = await ProductModel.findOneAndUpdate(
        { _id: id },
        productData,
        { new: true },
    );
    return result;
};

const deleteProductByIdFromDB = async (id: string) => {
    const result = await ProductModel.deleteOne({ _id: id });
    return result;
};

const getProductsByQueryFromDB = async (searchTerm: string) => {
    const result = await ProductModel.find({ $text: { $search: searchTerm } });
    return result;
};

export const ProductServices = {
    createProductToDB,
    getAllProductsFromDB,
    getProductByIdFromDB,
    updateProductByIdToDB,
    deleteProductByIdFromDB,
    getProductsByQueryFromDB,
};
