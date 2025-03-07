import { memo } from "react";
import { AbsTag, UIButton, UITextBody, UITextHeading } from "@/components";
import { IMAGE_PATTERN_BACKGROUND, VIDEO_HOME } from "@/assets";
import { ServicesSection } from "@/views/home/ServicesSection";
import { StaticSection } from "@/views/home/StaticSection";
import { PriceSection } from "@/views/home/PriceSection";
import { SolutionsSection } from "@/views/home/SolutionsSection";

const HomePage = memo(function HomePage() {
  return (
    <div className="w-full flex flex-col">
      <section className="flex items-center justify-center w-full bg-white py-20 relative">
        <img
          className="absolute top-0 left-0 -z-1 right-0 object-cover w-full"
          alt="image"
          src={IMAGE_PATTERN_BACKGROUND}
        />
        <div className="flex flex-col w-content gap-20 z-[10]">
          <div className="flex flex-col w-full gap-3 items-start">
            <div className="flex flex-col gap-[11px]">
              <UITextHeading.H1 className="text-neutral-1">
                Maximize your scrop profits
              </UITextHeading.H1>
              <div className="flex flex-row gap-[13px] relative">
                <UITextHeading.H1 className="text-neutral-1">
                  with
                </UITextHeading.H1>
                <UITextHeading.H1 className="text-gradient">
                  waste management.
                </UITextHeading.H1>
                <AbsTag
                  title="Smart"
                  className="left-[130px] rotate-[-7.169deg] -top-2"
                />
              </div>
            </div>

            <UITextBody.Medium20
              className="text-neutral-1 w-[667px]"
              text="Join Scraplan to streamline your scrap collection, get the best market rates, and connect with reliable drivers – all in one platform."
            />

            <UIButton
              title="Register your store"
              textClassName="text-white"
              className="bg-primary-1"
              RightIconComponent={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M10.5007 9.99999L7.25065 6.74999C7.09787 6.59721 7.02148 6.40277 7.02148 6.16666C7.02148 5.93055 7.09787 5.7361 7.25065 5.58332C7.40343 5.43055 7.59787 5.35416 7.83398 5.35416C8.0701 5.35416 8.26454 5.43055 8.41732 5.58332L12.2507 9.41666C12.334 9.49999 12.393 9.59027 12.4277 9.68749C12.4625 9.78471 12.4798 9.88888 12.4798 9.99999C12.4798 10.1111 12.4625 10.2153 12.4277 10.3125C12.393 10.4097 12.334 10.5 12.2507 10.5833L8.41732 14.4167C8.26454 14.5694 8.0701 14.6458 7.83398 14.6458C7.59787 14.6458 7.40343 14.5694 7.25065 14.4167C7.09787 14.2639 7.02148 14.0694 7.02148 13.8333C7.02148 13.5972 7.09787 13.4028 7.25065 13.25L10.5007 9.99999Z"
                    fill="white"
                  />
                </svg>
              }
            />
          </div>

          <video
            className="w-full h-[653px] rounded-[16px]"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={VIDEO_HOME} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <ServicesSection />
      <StaticSection />
      <PriceSection />
      <SolutionsSection />
    </div>
  );
});

export default HomePage;
