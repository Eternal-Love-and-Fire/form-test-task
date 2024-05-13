import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

export const CustomFormField = ({
  name,
  label,
  classname,
}: {
  name: string;
  label: string;
  classname?: string;
}) => {
  const { control } = useFormContext();
  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormItem className={`${classname}`}>
          <FormLabel className="text-[#B6B7BB]">{label}</FormLabel>
          <FormControl>
            <Input {...field} className="bg-[#F3F6FB]" />
          </FormControl>
          <FormMessage>{fieldState.error?.message}</FormMessage>
        </FormItem>
      )}
    />
  );
};
