import { useState } from "react";
import { MdOutlineBackHand } from "react-icons/md";
import { CiWallet } from "react-icons/ci";
import { GiClothes } from "react-icons/gi";
import { CiHeart } from "react-icons/ci";

import { CustomFormRadioGroup } from "@/components/user-ui/CustomFormRadioGroup";
import { CreditCardNumber } from "@/components/user-ui/CreditCardNumber";
import { CreditCardValidity } from "@/components/user-ui/CreditCardValidity";
import { CreditCardCVV } from "@/components/user-ui/CreditCardCVV";

export const HelpType = () => {
  const [showPopup, setShowPopup] = useState<
    "1" | "privat24" | "2" | "3" | "4" | "nothing"
  >("nothing");

  return (
    <article className="mt-[70px] 2xl:ml-12">
      <h2 className="text-[66px] font-extrabold font-sans text-center text-[#373B5D]">Види допомоги</h2>
      <p className="text-center text-xl opacity-50 text-[#9c9fa1]">
        Ви можете змінити вид допомоги
      </p>
      <div className="my-6 flex justify-around 2xl:flex-row flex-wrap gap-4 items-center 2xl:items-stretch">
        <div className="w-[240px] flex justify-start items-center gap-4">
          <button
            type="button"
            className="border-2 border-[#D5DCE3] p-4 rounded-2xl flex gap-4"
          >
            <MdOutlineBackHand className="text-5xl text-[#D5DCE3]" />
          </button>
          <span className="text-[#D5DCE3] text-2xl">Зробити</span>
        </div>
        <div className="w-[240px] flex justify-start items-center gap-4">
          <button
            type="button"
            onClick={() => setShowPopup("privat24")}
            className="border-2 border-[#D5DCE3] p-4 rounded-2xl flex gap-4 bg-[#926397]"
          >
            <CiWallet className="text-5xl text-[#D5DCE3]" />
          </button>
          <span className="text-[#D5DCE3] text-2xl leading-5">
            Фінансова
            <br /> допомога
          </span>
        </div>
        <div className="w-[240px] flex justify-start items-center gap-4">
          <button
            type="button"
            className="border-2 border-[#D5DCE3] p-4 rounded-2xl flex gap-4"
          >
            <GiClothes className="text-5xl text-[#D5DCE3]" />
          </button>
          <span className="text-[#D5DCE3] text-2xl leading-5">
            Матеріальна
            <br /> допомога
          </span>
        </div>
        <div className="w-[240px] flex justify-start items-center gap-4">
          <button
            type="button"
            className="border-2 border-[#D5DCE3] p-4 rounded-2xl flex gap-4"
          >
            <CiHeart className="text-5xl text-[#D5DCE3]" />
          </button>
          <span className="text-[#D5DCE3] text-2xl">Волонтерство</span>
        </div>
      </div>
      {showPopup === "privat24" ? <div></div> : null}
      <div className="p-4 flex flex-col 2xl:flex-row gap-4 justify-between border-2 border-[#D5DCE3]">
        <div className=" flex flex-col gap-2">
          <p className="ml-3">Спосіб оплати</p>
          <CustomFormRadioGroup name="radiogroup" />
        </div>
        <div className="flex flex-col gap-2">
          <p>Введіть наступні данні</p>
          <div className="w-[400px] h-[200px] flex flex-col bg-[#C8D5E5] rounded-xl">
            <div className="w-full mx-6">
              <CreditCardNumber />
            </div>
            <div className="w-full mt-6 mx-6 pr-12 flex justify-between items-center">
              <CreditCardValidity />
              <CreditCardCVV />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
