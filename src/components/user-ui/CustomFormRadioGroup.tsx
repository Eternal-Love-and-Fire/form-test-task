import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useFormContext } from "react-hook-form";

export const CustomFormRadioGroup = ({ name }: { name: string }) => {
  const { control } = useFormContext();
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="space-y-3">
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              value={field.value}
              className="flex gap-4 flex-wrap list-none"
            >
              <FormItem className="flex items-center space-x-3">
                <RadioGroupItem
                  value={`1`}
                  className="sr-only"
                  id={`option-1`}
                />
                <label
                  htmlFor={`option-1`}
                  className={`w-[170px] h-[90px] relative rounded-xl cursor-pointer transition-all duration-300 ease-linear flex items-center justify-center ${
                    field.value === `1` ? "bg-blue-500" : "bg-[#C8D5E5] text-white text-sm"
                  }`}
                >
                  Visa
                </label>
              </FormItem>
              <FormItem className="flex items-center space-x-3">
                <RadioGroupItem
                  value={`privat`}
                  className="sr-only"
                  id={`option-privat`}
                />
                <label
                  htmlFor={`option-privat`}
                  className={`w-[170px] h-[90px] rounded-xl cursor-pointer transition-all duration-300 ease-linear flex flex-col gap-2 items-center justify-center ${
                    field.value === `privat` ? "bg-[#926397] text-white" : "bg-[#C8D5E5] text-white text-sm"
                  }`}
                >
                  <div className="text-xl font-bold">Приват24</div>
                  <div className="text-base font-extralight">Приват24</div>
                </label>
              </FormItem>
              <FormItem className="flex items-center space-x-3">
                <RadioGroupItem
                  value={`3`}
                  className="sr-only"
                  id={`option-3`}
                />
                <label
                  htmlFor={`option-3`}
                  className={`w-[170px] h-[90px] rounded-xl cursor-pointer transition-all duration-300 ease-linear flex items-center justify-center ${
                    field.value === `3` ? "bg-blue-500" : "bg-[#C8D5E5] text-white text-sm"
                  }`}
                >
                  <p>Термінали України</p>
                </label>
              </FormItem>
              <FormItem className="flex items-center space-x-3">
                <RadioGroupItem
                  value={`4`}
                  className="sr-only"
                  id={`option-4`}
                />
                <label
                  htmlFor={`option-4`}
                  className={`w-[170px] h-[90px] rounded-xl cursor-pointer transition-all duration-300 ease-linear flex items-center justify-center ${
                    field.value === `4` ? "bg-blue-500" : "bg-[#C8D5E5] text-white text-sm"
                  }`}
                >
                  WebMoney
                </label>
              </FormItem>
              <FormItem className="flex items-center space-x-3">
                <RadioGroupItem
                  value={`5`}
                  className="sr-only"
                  id={`option-5`}
                />
                <label
                  htmlFor={`option-5`}
                  className={`w-[170px] h-[90px] rounded-xl cursor-pointer transition-all duration-300 ease-linear flex items-center justify-center ${
                    field.value === `5` ? "bg-blue-500" : "bg-[#C8D5E5] text-white text-sm"
                  }`}
                >
                  Paypal
                </label>
              </FormItem>
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
