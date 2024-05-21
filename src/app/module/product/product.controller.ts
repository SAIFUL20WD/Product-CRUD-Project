import { Request, Response } from "express";
import { ProductServices } from "./product.service";
import productValidationSchema from "./product.validation";

type error = {
    message: string;
};

const createProduct = async (req: Request, res: Response) => {
    try {
        const productData = req.body;
        const zodValidatedData = productValidationSchema.parse(productData);
        const result =
            await ProductServices.createProductToDB(zodValidatedData);
        res.status(200).json({
            success: true,
            result: "Product created successfully!",
            data: result,
        });
    } catch (err) {
        res.status(500).json({ success: false, error: err });
    }
};

export const ProductControllers = {
    createProduct,
};
