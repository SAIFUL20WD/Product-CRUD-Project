import { Request, Response } from "express";
import { ProductServices } from "./product.service";
import productValidationSchema from "./product.validation";

const createProduct = async (req: Request, res: Response) => {
    try {
        const productData = req.body;
        const zodValidatedData = productValidationSchema.parse(productData);
        const result = await ProductServices.createProductToDB(zodValidatedData);
        res.status(200).json({
            success: true,
            message: "Product created successfully!",
            data: result,
        });
    } catch (err) {
        res.status(500).json({ success: false, message: err });
    }
};

const getAllProducts = async (req: Request, res: Response) => {
    try {
        const searchTerm = req?.query?.searchTerm;
        if (searchTerm) {
            const result = await ProductServices.getProductsByQueryFromDB(searchTerm as string);
            if (result.length === 0) {
                res.status(404).json({
                    success: false,
                    message: `No product found!`,
                    data: result,
                });
            } else {
                res.status(200).json({
                    success: true,
                    message: `Products matching search term '${searchTerm}' fetched successfully!`,
                    data: result,
                });
            }
        } else {
            const result = await ProductServices.getAllProductsFromDB();
            res.status(200).json({
                success: true,
                message: "Products fetched successfully!",
                data: result,
            });
        }
    } catch (err) {
        res.status(500).json({ success: false, message: err });
    }
};

const getProductById = async (req: Request, res: Response) => {
    try {
        const id = req.params.productId;
        const result = await ProductServices.getProductByIdFromDB(id);
        res.status(200).json({
            success: true,
            message: "Product fetched successfully!",
            data: result,
        });
    } catch (err) {
        res.status(500).json({ success: false, message: err });
    }
};

const updateProductById = async (req: Request, res: Response) => {
    try {
        const id = req.params.productId;
        const productData = req.body;
        const zodValidatedData = productValidationSchema.parse(productData);
        const result = await ProductServices.updateProductByIdToDB(id, zodValidatedData);
        res.status(200).json({
            success: true,
            message: "Product updated successfully!",
            data: result,
        });
    } catch (err) {
        res.status(500).json({ success: false, message: err });
    }
};

const deleteProductById = async (req: Request, res: Response) => {
    try {
        const id = req.params.productId;
        const result = await ProductServices.deleteProductByIdFromDB(id);
        res.status(200).json({
            success: true,
            message: "Product deleted successfully!",
            data: null,
        });
    } catch (err) {
        res.status(500).json({ success: false, message: err });
    }
};

export const ProductControllers = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProductById,
    deleteProductById,
};
