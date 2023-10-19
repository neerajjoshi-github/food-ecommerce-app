import { z } from "zod";

export const checkoutFormSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required!!" }),
  lastName: z.string().min(1, { message: "Last name is required!!" }),
  address: z
    .string()
    .min(3, { message: "Address should be atleast 3 characters!!" }),
  email: z.string().email().min(1, { message: "Email is required!!" }),
  phone: z
    .string()
    .min(8, { message: "Phone should be atleast 8 characters!!" }),

  // Card details
  number: z
    .string()
    .min(16, { message: "Card number should be atleast 16 characters!!" }),
  name: z.string().min(1, { message: "First name is required!!" }),
  expiry: z.string().min(3, { message: "Invalid expiry date" }),
  cvc: z
    .string()
    .min(3, { message: "Invalid cvc date" })
    .max(4, { message: "Invalid cvc date" }),
});

export type CheckoutFormSchema = z.infer<typeof checkoutFormSchema>;
