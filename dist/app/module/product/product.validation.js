"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const variantValidationSchema = zod_1.z.array(zod_1.z.object({
    type: zod_1.z.string().trim().min(3, { message: "type must be more than 3 character" }).max(50, {
        message: "type must be less than 50 character",
    }),
    value: zod_1.z.string().trim().min(3, { message: "value must be more than 3 character" }).max(50, {
        message: "value must be less than 50 character",
    }),
}));
const inventoryValidationSchema = zod_1.z.object({
    quantity: zod_1.z.number().positive().finite(),
    inStock: zod_1.z.boolean(),
});
const productValidationSchema = zod_1.z.object({
    name: zod_1.z
        .string()
        .trim()
        .min(5, { message: "Product name must be more than 5 character" })
        .max(50, { message: "Product name must be less than 50 character" }),
    description: zod_1.z
        .string()
        .trim()
        .min(5, { message: "Description must be more than 5 character" })
        .max(200, { message: "Description must be less than 200 character" }),
    price: zod_1.z.number().positive().finite(),
    category: zod_1.z
        .string()
        .trim()
        .min(3, { message: "Category must be more than 3 character" })
        .max(30, { message: "Category must be less than 30 character" }),
    tags: zod_1.z.array(zod_1.z.string()).nonempty().min(1).max(10),
    variants: variantValidationSchema,
    inventory: inventoryValidationSchema,
});
exports.default = productValidationSchema;
