import * as z from "zod";

export const FormSchema = z.object({
  compname: z.string().min(1, { message: "Поле обязательно к заполнению" }),
  name: z.string().min(1, { message: "Поле обязательно к заполнению" }),
  email: z.string().email({ message: "Неверный формат почты" }),
  phone: z.string().min(18, { message: "Неверный формат номера" }),
  message: z.string().min(1, { message: "Поле обязательно к заполнению" }),
});
