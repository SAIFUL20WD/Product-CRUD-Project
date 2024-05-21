import { Request, Response } from "express";
import { OrderServices } from "./order.service";
import ordervalidationSchema from "./order.validation";

const createOrder = async (req: Request, res: Response) => {
    try {
        const orderData = req.body;
        const zodValidatedData = ordervalidationSchema.parse(orderData);
        const result = await OrderServices.createOrderToDB(zodValidatedData);
        res.status(200).json({
            success: true,
            result: "Order created successfully!",
            data: result,
        });
    } catch (err) {
        res.status(500).json({ success: false, error: err });
    }
};

const getAllOrders = async (req: Request, res: Response) => {
    try {
        const email = req?.query?.email;
        if (email) {
            const result = await OrderServices.getOrderByEmailFromDB(
                email as string,
            );
            res.status(200).json({
                success: true,
                result: "Orders fetched successfully for user email!",
                data: result,
            });
        } else {
            const result = await OrderServices.getAllOrdersFromDB();
            res.status(200).json({
                success: true,
                result: "Order fetched successfully!",
                data: result,
            });
        }
    } catch (err) {
        res.status(500).json({ success: false, error: err });
    }
};

export const OrderControllers = {
    createOrder,
    getAllOrders,
};
