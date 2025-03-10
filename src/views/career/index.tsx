import { memo } from "react";
import { AbsTag, UITextBody, UITextHeading } from "@/components";
import { DUMMY_CAREER } from "@/dummy/career";
import { CareerItem } from "@/views/career/CareerItem";

const CareerPage = memo(function CareerPage() {
  return (
    <div className="flex flex-col w-full gap-12 items-center justify-center bg-white py-20 px-[140px] max-md:py-40 max-md:px-4">
      <section className="w-content items-start flex flex-col gap-6 max-md:w-fit">
        <div className="relative">
          <AbsTag
            title={"Hot job"}
            className="rotate-[10.29deg] -right-[85px] -top-5 max-md:-top-6 max-md:right-0"
          />
          <UITextHeading.H2
            text="Join our team & shape the future"
            className="text-neutral-1 text-center"
          />
        </div>
        <UITextBody.Medium20
          text="We’re building something great—be part of it. Explore our career opportunities and grow with us."
          className="text-neutral-1 text-center"
        />
      </section>

      <section className="w-content gap-5 flex flex-wrap flex-row max-md:w-fit max-md:flex-col">
        {DUMMY_CAREER.LIST.map((item, index) => (
          <CareerItem key={index} {...item} />
        ))}
      </section>
    </div>
  );
});

export default CareerPage;
