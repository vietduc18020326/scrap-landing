import { memo } from "react";
import { UITextBody, UITextHeading } from "@/components";
import { IMAGE_STATIC_1 } from "@/assets";

export const StaticSection = memo(function StaticSection() {
  return (
    <section className="flex w-full bg-white py-20 items-center justify-center max-md:py-[60px] max-md:px-4">
      <div className="relative w-content py-10 px-20 rounded-[12px] gap-10 max-md:gap-8 flex flex-row bg-secondary-3 max-md:w-full max-md:flex-col max-md:px-4 max-md:py-[17px] max-md:h-[550px] max-md:justify-end">
        <div className="w-[293px] flex-col flex gap-2 items-start">
          <div className="flex flex-row gap-2 items-center">
            <div className="w-1 h-6 bg-secondary-1 rounded-r-full" />
            <UITextBody.Bold20
              text="Carbon Footprint"
              className="text-neutral-1"
            />
          </div>
          <UITextHeading.H2 text="50" className="text-secondary-1" />
          <UITextBody.Regular18
            text="tons of CO₂e have been recycled by Scrap Plan to date."
            className="text-neutral-1"
          />
        </div>

        <div className="w-[293px] flex-col flex gap-2 items-start">
          <div className="flex flex-row gap-2 items-center">
            <div className="w-1 h-6 bg-secondary-1 rounded-r-full" />
            <UITextBody.Bold20 text="Charity" className="text-neutral-1" />
          </div>
          <UITextHeading.H2 text="100" className="text-secondary-1" />
          <UITextBody.Regular18
            text="million INR has been donated to charities in India."
            className="text-neutral-1"
          />
        </div>

        <img
          alt="image_static"
          src={IMAGE_STATIC_1}
          className="absolute bottom-0 right-0 w-[457px] h-[337px] object-contain max-md:bottom-auto max-md:-top-[100px] max-md:left-0 max-md:h-[254px]"
        />
      </div>
    </section>
  );
});
