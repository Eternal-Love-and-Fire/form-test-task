import { CustomFormField } from "@/components/user-ui/CustomFormFIeld";

export const UserDataForm = () => {
  return (
    <article className="flex 2xl:w-[95%] w-full mx-auto 2xl:justify-between flex-col 2xl:flex-row justify-center items-center">
      <div className="2xl:w-[36%] w-full flex flex-col gap-4">
        <div className="flex gap-4">
          <CustomFormField name="username" label="Ім'я" />
          <CustomFormField name="userSecondName" label="Фамілія" />
        </div>
        <CustomFormField name="company" label="Назва компанії, організації" />
        <CustomFormField name="email" label="Email-адрес" />
        <CustomFormField name="phoneNumber" label="Номер телефону" />
      </div>
      <div className="2xl:w-[36%] w-full flex flex-col gap-4">
        <CustomFormField name="countryName" label="Країна" />
        <div className="flex gap-4">
          <CustomFormField name="town" label="Місто" />
          <CustomFormField name="district" label="Штат, район" />
        </div>
        <CustomFormField name="address" label="Адреса" />
        <CustomFormField
          name="postalCode"
          label="Поштовий індекс"
          classname="w-[48%]"
        />
      </div>
    </article>
  );
};
