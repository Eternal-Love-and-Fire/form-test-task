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

export const CreditCardValidity = () => {
  const { control } = useFormContext();
  return (
    <FormField
      control={control}
      name="creditCardValidity"
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel className="font-light text-white">Термін дії</FormLabel>
          <FormControl>
            <InputOTP maxLength={4} {...field}>
              <InputOTPGroup className="border-0 w-[50px] h-[35px] overflow-hidden bg-gray-300 rounded-md">
                <InputOTPSlot className="bg-[#F3F7FA] border-[#F3F7FA]" index={0} />
                <InputOTPSlot className="bg-[#F3F7FA] border-[#F3F7FA]" index={1} />
              </InputOTPGroup>
              <InputOTPGroup className="border-0 w-[50px] h-[35px] overflow-hidden bg-gray-300 rounded-md">
                <InputOTPSlot className="bg-[#F3F7FA] border-[#F3F7FA]" index={2} />
                <InputOTPSlot className="bg-[#F3F7FA] border-[#F3F7FA]" index={3} />
              </InputOTPGroup>
            </InputOTP>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
