import { z } from "zod";

const variantValidationSchema = z.array(
    z.object({
        type: z.string().trim().min(3, { message: "type must be more than 3 character" }).max(50, {
            message: "type must be less than 50 character",
        }),
        value: z.string().trim().min(3, { message: "value must be more than 3 character" }).max(50, {
            message: "value must be less than 50 character",
        }),
    }),
);

const inventoryValidationSchema = z.object({
    quantity: z.number().positive().finite(),
    inStock: z.boolean(),
});

const productValidationSchema = z.object({
    name: z
        .string()
        .trim()
        .min(5, { message: "Product name must be more than 5 character" })
        .max(50, { message: "Product name must be less than 50 character" }),
    description: z
        .string()
        .trim()
        .min(5, { message: "Description must be more than 5 character" })
        .max(200, { message: "Description must be less than 200 character" }),
    price: z.number().positive().finite(),
    category: z
        .string()
        .trim()
        .min(3, { message: "Category must be more than 3 character" })
        .max(30, { message: "Category must be less than 30 character" }),
    tags: z.array(z.string()).nonempty().min(1).max(10),
    variants: variantValidationSchema,
    inventory: inventoryValidationSchema,
});

export default productValidationSchema;
