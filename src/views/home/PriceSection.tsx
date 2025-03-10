import { JSX, memo } from "react";
import { UIButton, UITextBody, UITextHeading } from "@/components";
import { PRICE } from "@/dummy";

export const PriceSection = memo(function PriceSection() {
  return (
    <section className="w-full py-20 bg-primary-3 flex items-center justify-center max-md:py-10 max-md:px-4">
      <div className="w-content gap-12 flex flex-col items-center max-md:w-full">
        <UITextHeading.H2
          text="Best prices, transparent"
          className="text-neutral-1"
        />

        <ul className="flex flex-row flex-wrap gap-y-6 gap-x-5 w-content max-md:w-full max-md:gap-3">
          {PRICE.HOME.map((item, index) => (
            <Item key={index} {...item} />
          ))}
        </ul>

        <UIButton
          title={"View all rates"}
          textClassName={"text-white"}
          className="bg-primary-1"
          RightIconComponent={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
            >
              <path
                d="M11.0007 10.0001L7.75065 6.75008C7.59787 6.5973 7.52148 6.40286 7.52148 6.16675C7.52148 5.93064 7.59787 5.73619 7.75065 5.58341C7.90343 5.43064 8.09787 5.35425 8.33398 5.35425C8.5701 5.35425 8.76454 5.43064 8.91732 5.58341L12.7507 9.41675C12.834 9.50008 12.893 9.59036 12.9277 9.68758C12.9625 9.7848 12.9798 9.88897 12.9798 10.0001C12.9798 10.1112 12.9625 10.2154 12.9277 10.3126C12.893 10.4098 12.834 10.5001 12.7507 10.5834L8.91732 14.4167C8.76454 14.5695 8.5701 14.6459 8.33398 14.6459C8.09787 14.6459 7.90343 14.5695 7.75065 14.4167C7.59787 14.264 7.52148 14.0695 7.52148 13.8334C7.52148 13.5973 7.59787 13.4029 7.75065 13.2501L11.0007 10.0001Z"
                fill="white"
              />
            </svg>
          }
        />
      </div>
    </section>
  );
});

const Item = memo(function Item({
  Icon,
  title,
  price,
  unit,
}: {
  Icon: JSX.Element;
  title: string;
  price: string;
  unit: string;
}) {
  return (
    <li className="w-[calc(20%-16px)] max-md:w-[calc(50%-6px)] max-md:p-4 max-md:gap-3 p-6 flex-col flex gap-6 rounded-[8px] bg-white">
      {Icon}
      <div className="flex flex-col items-start gap-2 max-md:gap-0">
        <div className="flex flex-row gap-1 items-end justify-end">
          <UITextHeading.H5 text={price} className="text-secondary-1" />
          <UITextBody.Regular18 text={unit} className="text-neutral-1" />
        </div>
        <UITextBody.Bold18 text={title} className="text-neutral-1" />
      </div>
    </li>
  );
});
