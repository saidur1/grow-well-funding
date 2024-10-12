import { z } from "zod";

export const contactSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits" }),
  email: z.string().email({ message: "Invalid email address" }),
  businessName: z.string().min(1, { message: "Business name is required" }),
  loanType: z.string().min(1, { message: "Loan type is required" }),
  requestedLoan: z.string(),
});

export type ContactSchemaType = z.infer<typeof contactSchema>;
