import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useFormContext } from "react-hook-form";

export const CreditCardCVV = () => {
  const { control } = useFormContext();
  return (
    <FormField
      control={control}
      name="creditCardCVV"
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel className="font-light text-white">CVC/CVV</FormLabel>
          <FormControl>
            <InputOTP maxLength={4} {...field} className="w-[100px bg-black]">
              <InputOTPGroup className="border-0 w-[50px] h-[35px] overflow-hidden bg-gray-300 rounded-md">
                <InputOTPSlot className="bg-[#F3F7FA] border-[#F3F7FA]" index={0} />
                <InputOTPSlot className="bg-[#F3F7FA] border-[#F3F7FA]" index={1} />
                <InputOTPSlot className="bg-[#F3F7FA] border-[#F3F7FA]" index={2} />
              </InputOTPGroup>
            </InputOTP>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
