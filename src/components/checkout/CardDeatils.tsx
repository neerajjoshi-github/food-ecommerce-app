import React, { useState } from "react";
import Input from "../reusables/Input";
import Cards from "react-credit-cards-2";
import { BsCreditCard2Back, BsCalendarDate } from "react-icons/bs";
import { BiSolidUser } from "react-icons/bi";
import { MdOutlinePassword } from "react-icons/md";
import {
  formatCVC,
  formatCreditCardNumber,
  formatExpirationDate,
} from "../../utils/cardFormat";
import { Controller, useWatch, Control, FieldErrors } from "react-hook-form";
import { CheckoutFormSchema } from "../../utils/zodSchemas";

type Focused = "name" | "number" | "expiry" | "cvc" | "";

type DefaultCardDetails = {
  number: string;
  expiry: string;
  cvc: string;
  name: string;
};

type CardDeatilsProps = {
  control: Control<CheckoutFormSchema, any>;
  errors: FieldErrors<CheckoutFormSchema>;
  defaultValues: DefaultCardDetails;
};

const CardDeatils: React.FC<CardDeatilsProps> = ({
  control,
  errors,
  defaultValues,
}) => {
  const [focus, setFocus] = useState<Focused>("");

  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    setFocus(e.target.id as Focused);
  };

  const [number, name, cvc, expiry] = useWatch({
    control,
    name: ["number", "name", "cvc", "expiry"],
    defaultValue: { ...defaultValues },
  });

  return (
    <div className="">
      <span className="text-lg uppercase font-semibold ">Card Details</span>
      <div className="flex flex-col md:flex-row gap-3 h-fit items-center mt-4 lg:my-0">
        <div className="">
          <Cards
            number={number}
            expiry={expiry}
            cvc={cvc}
            name={name}
            focused={focus}
          />
        </div>
        <div className="flex-1 w-full flex flex-col gap-6 max-md:pb-6">
          <Controller
            name="number"
            control={control}
            render={({ field }) => (
              <Input
                label="Card Number"
                type="tel"
                Icon={BsCreditCard2Back}
                onFocus={handleInputFocus}
                errorMessage={errors.number?.message}
                {...field}
                onChange={(e) => {
                  e.target.value = formatCreditCardNumber(e.target.value);
                  field.onChange(e);
                }}
              />
            )}
          />
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <Input
                label="Name"
                type="text"
                Icon={BiSolidUser}
                onFocus={handleInputFocus}
                errorMessage={errors.name?.message}
                {...field}
              />
            )}
          />

          <div className="grid grid-cols-2 gap-2">
            <Controller
              name="expiry"
              control={control}
              render={({ field }) => (
                <Input
                  label="Expiry"
                  type="text"
                  Icon={BsCalendarDate}
                  onFocus={handleInputFocus}
                  errorMessage={errors.expiry?.message}
                  {...field}
                  onChange={(e) => {
                    e.target.value = formatExpirationDate(e.target.value);
                    field.onChange(e);
                  }}
                />
              )}
            />
            <Controller
              name="cvc"
              control={control}
              render={({ field }) => (
                <Input
                  label="CVC"
                  type="text"
                  Icon={MdOutlinePassword}
                  onFocus={handleInputFocus}
                  errorMessage={errors.cvc?.message}
                  {...field}
                  onChange={(e) => {
                    e.target.value = formatCVC(e.target.value);
                    field.onChange(e);
                  }}
                />
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDeatils;
