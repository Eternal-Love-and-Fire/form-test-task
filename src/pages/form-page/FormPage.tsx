import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { UserDataForm } from "@/widgets/userdata-form/UserDataForm";
import { HelpType } from "@/widgets/help-type/HelpType";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";

import { FormSchema } from "./FormSchema";


export const FormPage = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      userSecondName: "",
      company: "",
      email: "",
      phoneNumber: "",
      countryName: "",
      town: "",
      district: "",
      address: "",
      postalCode: "",
      radiogroup: "privat",
      creditCardCVV: "",
      creditCardValidity: "",
      creditCardNumber: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }
  return (
    <main className="min-w-screen min-h-screen">
      <div className="max-w-[1440px] relative 2xl:ml-[232px] flex">
        <div className="h-[800px] -z-10 absolute top-0 left-0 right-0 bg-[#7E89A2]"></div>
        <section className=" w-[93%] 2xl:mt-[104px] mx-auto rounded-xl pl-[35px] pt-[28px] pr-8 shadow-lg bg-white shadow-black">
          <h3 className="text-[63px] font-extrabold font-sans text-center text-[#373B5D]">
            Заповніть форму
          </h3>
          <div className="w-fit mt-[8px] mx-auto flex justify-center border-2 rounded-sm overflow-hidden border-[#363C5C]">
            <button className="py-[6px] px-4 bg-[#363C5C] text-white hover:opacity-50 duration-300 active:opacity-80">
              Фіз. особа
            </button>
            <button className="py-[6px] px-4 bg-white text-black hover:opacity-50 duration-300 active:opacity-80">
              Юр. особа
            </button>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="mt-10 flex flex-col pl-2 2xl:pl-20 pr-8"
            >
              <UserDataForm />
              <HelpType />
              <Button
                type="submit"
                className="my-12 mb-8 mx-auto w-fit px-20 py-7 rounded-xl text-base tracking-wider shadow-lg shadow-black font-extrabold"
              >
                Допомогти
              </Button>
            </form>
          </Form>
        </section>
      </div>
    </main>
  );
};
