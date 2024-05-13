import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CustomFormRadioGroup } from "./CustomFormRadioGroup";
import { IconType } from "react-icons/lib";

export const UserAccordion = ({
  icon: Icon,
  text,
}: {
  icon: IconType;
  text: string;
}) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <div>
          <AccordionTrigger>
            <Icon className="text-5xl text-blue-100" />
          </AccordionTrigger>
          <span className="text-blue-100">{text}</span>
        </div>
        <AccordionContent>
          <CustomFormRadioGroup name={"radiogroup"} />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
