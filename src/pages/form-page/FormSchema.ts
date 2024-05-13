import { z } from "zod";

export const FormSchema = z.object({
  username: z
    .string()
    .min(2, { message: "Username must be at least 2 characters." }),
  userSecondName: z
    .string()
    .min(2, { message: "Second name must be at least 2 characters." }),
  company: z.string().optional(),
  email: z.string().email({ message: "Invalid email address." }),
  phoneNumber: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits." }),
  countryName: z
    .string()
    .min(2, { message: "Country name must be at least 2 characters." }),
  town: z.string().min(2, { message: "Town must be at least 2 characters." }),
  district: z
    .string()
    .min(2, { message: "District must be at least 2 characters." }),
  address: z
    .string()
    .min(5, { message: "Address must be at least 5 characters." }),
  postalCode: z
    .string()
    .min(5, { message: "Postal code must be at least 5 characters." }),
  radiogroup: z.enum(["1", "privat", "3", "4", "5"]),
  creditCardCVV: z.string().length(3, { message: "CVV must be 3 characters." }),
  creditCardValidity: z
    .string()
    .length(4, { message: "Validity date must be 4 characters." }),
  creditCardNumber: z
    .string()
    .length(16, { message: "Credit card number must be 16 characters." }),
});
