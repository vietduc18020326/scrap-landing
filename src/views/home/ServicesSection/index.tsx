"use client";

import { JSX, memo, useCallback, useMemo, useState } from "react";
import { AbsTag, UITextBody, UITextHeading } from "@/components";
import { IMAGE_SERVICE_1, IMAGE_SERVICE_2, IMAGE_SERVICE_3 } from "@/assets";
import { ServiceItem } from "@/views/home/ServicesSection/ServiceItem";

const DATA = [
  {
    title: "For B2B",
    Icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M4.30775 20.5C3.80258 20.5 3.375 20.325 3.025 19.975C2.675 19.625 2.5 19.1974 2.5 18.6923V8.30775C2.5 7.80258 2.675 7.375 3.025 7.025C3.375 6.675 3.80258 6.5 4.30775 6.5H8.5V4.80775C8.5 4.30258 8.675 3.875 9.025 3.525C9.375 3.175 9.80258 3 10.3078 3H13.6923C14.1974 3 14.625 3.175 14.975 3.525C15.325 3.875 15.5 4.30258 15.5 4.80775V6.5H19.6923C20.1974 6.5 20.625 6.675 20.975 7.025C21.325 7.375 21.5 7.80258 21.5 8.30775V18.6923C21.5 19.1974 21.325 19.625 20.975 19.975C20.625 20.325 20.1974 20.5 19.6923 20.5H4.30775ZM10 6.5H14V4.80775C14 4.73075 13.9679 4.66025 13.9038 4.59625C13.8398 4.53208 13.7692 4.5 13.6923 4.5H10.3078C10.2308 4.5 10.1603 4.53208 10.0963 4.59625C10.0321 4.66025 10 4.73075 10 4.80775V6.5Z"
          fill="#F57700"
        />
      </svg>
    ),
  },
  {
    title: "For B2C",
    Icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M5.84345 19.5577C5.06279 19.5577 4.40004 19.2847 3.8552 18.7387C3.31037 18.1927 3.03795 17.5298 3.03795 16.75H2.24945C1.99345 16.75 1.77879 16.6634 1.60545 16.4902C1.43229 16.3169 1.3457 16.1023 1.3457 15.8463V6.30775C1.3457 5.80258 1.5207 5.375 1.8707 5.025C2.2207 4.675 2.6482 4.5 3.1532 4.5H14.961C15.4581 4.5 15.8837 4.677 16.2377 5.031C16.5917 5.385 16.7687 5.81058 16.7687 6.30775V8.30775H18.5187C18.8049 8.30775 19.076 8.37175 19.3322 8.49975C19.5882 8.62775 19.799 8.80475 19.9647 9.03075L22.4725 12.3885C22.5328 12.4638 22.578 12.5467 22.6082 12.637C22.6382 12.7275 22.6532 12.8254 22.6532 12.9308V15.8463C22.6532 16.1023 22.5666 16.3169 22.3935 16.4902C22.2201 16.6634 22.0055 16.75 21.7495 16.75H20.8457C20.8457 17.5298 20.5725 18.1927 20.026 18.7387C19.4796 19.2847 18.8162 19.5577 18.0357 19.5577C17.2552 19.5577 16.5925 19.2847 16.0475 18.7387C15.5026 18.1927 15.2302 17.5298 15.2302 16.75H8.6532C8.6532 17.532 8.38004 18.1954 7.8337 18.7402C7.28737 19.2852 6.62395 19.5577 5.84345 19.5577ZM5.8457 18.0577C6.21237 18.0577 6.52195 17.9314 6.77445 17.6788C7.02695 17.4263 7.1532 17.1167 7.1532 16.75C7.1532 16.3833 7.02695 16.0737 6.77445 15.821C6.52195 15.5685 6.21237 15.4423 5.8457 15.4423C5.47904 15.4423 5.16937 15.5685 4.9167 15.821C4.6642 16.0737 4.53795 16.3833 4.53795 16.75C4.53795 17.1167 4.6642 17.4263 4.9167 17.6788C5.16937 17.9314 5.47904 18.0577 5.8457 18.0577ZM18.038 18.0577C18.4046 18.0577 18.7142 17.9314 18.9667 17.6788C19.2194 17.4263 19.3457 17.1167 19.3457 16.75C19.3457 16.3833 19.2194 16.0737 18.9667 15.821C18.7142 15.5685 18.4046 15.4423 18.038 15.4423C17.6713 15.4423 17.3616 15.5685 17.109 15.821C16.8565 16.0737 16.7302 16.3833 16.7302 16.75C16.7302 17.1167 16.8565 17.4263 17.109 17.6788C17.3616 17.9314 17.6713 18.0577 18.038 18.0577ZM16.7687 13.25H21.2495L18.7495 9.93275C18.7175 9.89425 18.6806 9.86375 18.639 9.84125C18.5973 9.81892 18.5508 9.80775 18.4995 9.80775H16.7687V13.25Z"
          fill="#F57700"
        />
      </svg>
    ),
  },
  {
    title: "Govt/NGO's",
    Icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M5.75028 16.25V10.25C5.75028 10.0375 5.8222 9.85937 5.96603 9.71554C6.10987 9.57187 6.28803 9.50004 6.50053 9.50004C6.7132 9.50004 6.89137 9.57187 7.03503 9.71554C7.17853 9.85937 7.25028 10.0375 7.25028 10.25V16.25C7.25028 16.4625 7.17837 16.6407 7.03453 16.7845C6.8907 16.9282 6.71253 17 6.50003 17C6.28736 17 6.10928 16.9282 5.96578 16.7845C5.82211 16.6407 5.75028 16.4625 5.75028 16.25ZM11.2503 16.25V10.25C11.2503 10.0375 11.3222 9.85937 11.466 9.71554C11.6099 9.57187 11.788 9.50004 12.0005 9.50004C12.2132 9.50004 12.3913 9.57187 12.5348 9.71554C12.6784 9.85937 12.7503 10.0375 12.7503 10.25V16.25C12.7503 16.4625 12.6784 16.6407 12.5345 16.7845C12.3907 16.9282 12.2125 17 12 17C11.7874 17 11.6093 16.9282 11.4658 16.7845C11.3221 16.6407 11.2503 16.4625 11.2503 16.25ZM3.51953 20.5C3.30703 20.5 3.12895 20.4281 2.98528 20.2843C2.84145 20.1405 2.76953 19.9623 2.76953 19.7498C2.76953 19.5371 2.84145 19.359 2.98528 19.2155C3.12895 19.0719 3.30703 19 3.51953 19H20.481C20.6935 19 20.8716 19.072 21.0153 19.2158C21.1591 19.3596 21.231 19.5378 21.231 19.7503C21.231 19.963 21.1591 20.141 21.0153 20.2845C20.8716 20.4282 20.6935 20.5 20.481 20.5H3.51953ZM16.7503 16.25V10.25C16.7503 10.0375 16.8222 9.85937 16.966 9.71554C17.1099 9.57187 17.288 9.50004 17.5005 9.50004C17.7132 9.50004 17.8913 9.57187 18.0348 9.71554C18.1784 9.85937 18.2503 10.0375 18.2503 10.25V16.25C18.2503 16.4625 18.1784 16.6407 18.0345 16.7845C17.8907 16.9282 17.7125 17 17.5 17C17.2874 17 17.1092 16.9282 16.9655 16.7845C16.822 16.6407 16.7503 16.4625 16.7503 16.25ZM20.5195 7.50004H3.41003C3.23203 7.50004 3.08078 7.43787 2.95628 7.31354C2.83178 7.18937 2.76953 7.03845 2.76953 6.86079V6.47029C2.76953 6.34012 2.80211 6.22787 2.86728 6.13354C2.93261 6.03937 3.01861 5.96279 3.12528 5.90379L11.206 1.95004C11.4557 1.82954 11.72 1.76929 11.999 1.76929C12.278 1.76929 12.5432 1.82954 12.7945 1.95004L20.8348 5.87879C20.9604 5.94295 21.0579 6.0327 21.127 6.14804C21.1964 6.26354 21.231 6.38754 21.231 6.52004V6.79104C21.231 6.9957 21.164 7.16504 21.03 7.29904C20.896 7.43304 20.7259 7.50004 20.5195 7.50004Z"
          fill="#F57700"
        />
      </svg>
    ),
  },
];

const DUMMY_SERVICES = [
  {
    title: "Scrap Collection",
    description:
      "Seamlessly integrating effective alternative models of monitoring",
    src: IMAGE_SERVICE_1,
  },
  {
    title: "For B2C",
    description:
      "Seamlessly integrating effective alternative models of monitoring",
    src: IMAGE_SERVICE_2,
  },
  {
    title: "For Govt/NGO’s",
    description:
      "Seamlessly integrating effective alternative models of monitoring",
    src: IMAGE_SERVICE_3,
  },
];

export const ServicesSection = memo(function ServicesSection() {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <section className="py-20 bg-white items-center justify-center flex max-md:py-10 max-md:px-4">
      <div className="flex flex-col gap-12 items-center w-content justify-center">
        <div className="w-[568px] flex flex-col gap-3 items-center justify-center relative max-md:w-full">
          <AbsTag
            title="For all"
            className="-top-[10px] right-[62px] rotate-[10.29deg]"
          />
          <UITextHeading.H2 className="text-neutral-1">
            Our services
          </UITextHeading.H2>
          <UITextBody.Medium20
            text="A powerful system built for Scrap collection stores"
            className="text-neutral-1"
          />
        </div>

        <ul className="flex items-center p-[6px] rounded-[100px] bg-primary-3">
          {DATA.map((item, index) => (
            <TabItem
              index={index}
              key={index}
              tabIndex={tabIndex}
              onChangeTab={setTabIndex}
              {...item}
            />
          ))}
        </ul>

        <ul className="flex flex-row gap-5 w-full max-md:flex-col max-md:gap-10">
          {DUMMY_SERVICES.map((item, index) => (
            <ServiceItem key={index} {...item} />
          ))}
        </ul>
      </div>
    </section>
  );
});

const TabItem = memo(function TabItem({
  title,
  tabIndex,
  onChangeTab,
  index,
  Icon,
}: {
  title: string;
  index: number;
  tabIndex: number;
  onChangeTab: (value: number) => void;
  Icon: JSX.Element;
}) {
  const active = useMemo(() => index === tabIndex, [tabIndex, index]);

  const onClick = useCallback(() => onChangeTab(index), [onChangeTab, index]);
  return (
    <button
      className={`py-[6px] px-6 gap-3 flex flex-row items-center rounded-[100px] ${active ? "bg-white" : ""}`}
      onClick={onClick}
    >
      {Icon}
      <p
        className={`text-neutral-1 not-italic leading-7 font-lato ${active ? "font-bold" : "font-medium"}`}
      >
        {title}
      </p>
    </button>
  );
});
