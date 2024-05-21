import express, { Request, Response } from "express";
import cors from "cors";
import { productRouter } from "./app/module/product/product.route";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", productRouter);

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
});

export default app;
