import { JSX, memo } from "react";
import { PRICE } from "@/dummy";
import { UITextBody, UITextHeading } from "@/components";

const RatesPage = memo(function RatesPage() {
  return (
    <div className="flex flex-col py-20 px-[140px] max-md:py-10 max-md:px-4 gap-12 items-center bg-white">
      {PRICE.RATES.map((item, index) => (
        <section
          className="flex flex-col w-content gap-6 items-start max-md:gap-5 max-md:w-full"
          key={index}
        >
          <UITextHeading.H3 text={item.title} className="text-neutral-1" />
          <ul className="flex flex-row flex-wrap w-full gap-x-5 gap-y-6 max-md:gap-3">
            {item.data.map((_item, i) => (
              <Item key={i + index} {..._item} />
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
});

const Item = memo(function Item({
  Icon,
  title,
  unit,
  price,
}: {
  Icon: JSX.Element;
  title: string;
  unit: string;
  price: string;
}) {
  return (
    <li className="flex flex-col gap-6 p-6 border border-neutral-4 items-start rounded-[8px] w-[calc(20%-16px)] max-md:w-[calc(50%-8px)]">
      {Icon}
      <div className="flex flex-col gap-2 items-start">
        <div className="flex flex-row gap-1 items-end justify-end">
          <UITextHeading.H5 text={price} className="text-secondary-1" />
          <UITextBody.Regular18 text={unit} className="text-neutral-1" />
        </div>
        <UITextBody.Bold18 text={title} className="text-neutral-1" />
      </div>
    </li>
  );
});

export default RatesPage;
