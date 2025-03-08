"use client";

import {
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
  memo,
  useCallback,
  useState,
} from "react";
import {
  AbsTag,
  TextareaField,
  UIButton,
  UIInputField,
  UITextBody,
  UITextHeading,
} from "@/components";

export const ContactSection = memo(function ContactSection() {
  const [formData, setFormData] = useState<any>({
    email: "",
    name: "",
    phone: "",
    company: "",
    content: "",
  });

  const onChangeValue = useCallback(
    (keyName: string, value: any) => {
      setFormData((prev: any) => ({
        ...prev,
        [keyName]: value,
      }));
    },
    [setFormData],
  );

  return (
    <section className="py-20 flex w-full bg-white items-center justify-center flex-col gap-12">
      <div className="flex flex-col gap-3 items-center justify-center">
        <AbsTag title={"Contact us"} absolute={false} />
        <UITextHeading.H2
          text={`We are here 24/7\nto help you out`}
          className="whitespace-break-spaces text-neutral-1 text-center"
        />
      </div>

      <form className="w-[764px] py-10 px-20 items-start rounded-[12px] bg-primary-3 relative">
        <div className="flex flex-col gap-4 z-[10] relative">
          <UITextHeading.H5 text="Request demo" className="text-neutral-1" />

          <div className="flex flex-row gap-4">
            <UIInputField
              keyName={"name"}
              onChangeValue={onChangeValue}
              value={formData?.name}
              placeholder={"Name"}
            />
            <UIInputField
              keyName={"company"}
              onChangeValue={onChangeValue}
              value={formData?.company}
              placeholder={"Company"}
            />
          </div>
          <div className="flex flex-row gap-4">
            <UIInputField
              keyName={"email"}
              onChangeValue={onChangeValue}
              value={formData?.email}
              placeholder={"Email"}
            />
            <UIInputField
              keyName={"phone"}
              onChangeValue={onChangeValue}
              value={formData?.phone}
              placeholder={"Phone"}
            />
          </div>

          <TextareaField
            keyName={"content"}
            onChangeValue={onChangeValue}
            value={formData?.content}
            placeholder={"Content"}
          />

          <UIButton title={"Submit request"} className="bg-primary-1" />

          <UITextBody.Regular16
            text="By continuing, you agree to our User Terms of Service and Customer Terms of Service, and acknowledge that you have read the Privacy Policy to learn how we collect, use and share your data."
            className="text-neutral-2"
          />
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="764"
          height="100"
          viewBox="0 0 764 100"
          fill="none"
          className="absolute bottom-0 left-0 -z-1"
        >
          <path
            d="M534.935 -0.182668C623.873 -0.18266 684.052 38.8167 764 101.126L764 412L-6.10352e-05 412L-8.60362e-05 -0.182653C33.0122 17.9722 87.0845 67.7343 165.197 88.7986C326.441 132.281 409.173 -0.182679 534.935 -0.182668Z"
            fill="#FDEACE"
          />
        </svg>
      </form>
    </section>
  );
});
