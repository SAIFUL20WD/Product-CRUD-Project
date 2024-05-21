import express, { Request, Response } from "express";
import cors from "cors";
import { productRouter } from "./app/module/product/product.route";
import { orderRouter } from "./app/module/order/order.route";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", productRouter);
app.use("/api", orderRouter);

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
});

app.get("*", (req: Request, res: Response) => {
    res.status(404).json({
        success: false,
        message: "Route not found",
    });
});

export default app;
