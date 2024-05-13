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

export function CreditCardNumber() {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name="creditCardNumber"
      render={({ field }) => (
        <FormItem className="mx-auto mt-4 flex flex-col">
          <FormLabel className="font-light text-white">Номер Картки</FormLabel>
          <FormControl>
            <InputOTP maxLength={16} {...field}>
              <InputOTPGroup className="border-0 w-[80px] h-[35px] overflow-hidden bg-gray-300 rounded-md">
                <InputOTPSlot className="bg-[#F3F7FA] border-[#F3F7FA]" index={0} />
                <InputOTPSlot className="bg-[#F3F7FA] border-[#F3F7FA]" index={1} />
                <InputOTPSlot className="bg-[#F3F7FA] border-[#F3F7FA]" index={2} />
                <InputOTPSlot className="bg-[#F3F7FA] border-[#F3F7FA]" index={3} />
              </InputOTPGroup>
              <InputOTPGroup className="border-0 w-[80px] h-[35px] overflow-hidden bg-gray-300 rounded-md">
                <InputOTPSlot className="bg-[#F3F7FA] border-[#F3F7FA]" index={4} />
                <InputOTPSlot className="bg-[#F3F7FA] border-[#F3F7FA]" index={5} />
                <InputOTPSlot className="bg-[#F3F7FA] border-[#F3F7FA]" index={6} />
                <InputOTPSlot className="bg-[#F3F7FA] border-[#F3F7FA]" index={7} />
              </InputOTPGroup>
              <InputOTPGroup className="border-0 w-[80px] h-[35px] overflow-hidden bg-gray-300 rounded-md">
                <InputOTPSlot className="bg-[#F3F7FA] border-[#F3F7FA]" index={8} />
                <InputOTPSlot className="bg-[#F3F7FA] border-[#F3F7FA]" index={9} />
                <InputOTPSlot className="bg-[#F3F7FA] border-[#F3F7FA]" index={10} />
                <InputOTPSlot className="bg-[#F3F7FA] border-[#F3F7FA]" index={11} />
              </InputOTPGroup>
              <InputOTPGroup className="border-0 w-[80px] h-[35px] overflow-hidden bg-gray-300 rounded-md">
                <InputOTPSlot className="bg-[#F3F7FA] border-[#F3F7FA]" index={12} />
                <InputOTPSlot className="bg-[#F3F7FA] border-[#F3F7FA]" index={13} />
                <InputOTPSlot className="bg-[#F3F7FA] border-[#F3F7FA]" index={14} />
                <InputOTPSlot className="bg-[#F3F7FA] border-[#F3F7FA]" index={15} />
              </InputOTPGroup>
            </InputOTP>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
