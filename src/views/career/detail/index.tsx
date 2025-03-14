"use client";

import { memo } from "react";
import { UIButton } from "@/components";
import { useRouter } from "next/navigation";
import { IMAGE_LOGO } from "@/assets";

const CareerDetailPage = memo(function CareerDetailPage() {
  const router = useRouter();

  return (
    <div className="flex w-full bg-white py-12 px-20">
      <section className="flex flex-col gap-12 w-content items-start">
        <UIButton
          title={"Back"}
          className="border border-neutral-4 bg-white ml-[60px]"
          textClassName="text-neutral-2"
          LeftIconComponent={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M6.32472 7.99192L11.2247 12.8919C11.3914 13.0586 11.4719 13.2558 11.4664 13.4836C11.4608 13.7114 11.3747 13.9086 11.2081 14.0753C11.0414 14.2419 10.8442 14.3253 10.6164 14.3253C10.3886 14.3253 10.1914 14.2419 10.0247 14.0753L4.90806 8.94192C4.77472 8.80859 4.67472 8.65859 4.60806 8.49192C4.54139 8.32526 4.50806 8.15859 4.50806 7.99192C4.50806 7.82526 4.54139 7.65859 4.60806 7.49192C4.67472 7.32526 4.77472 7.17526 4.90806 7.04192L10.0414 1.90859C10.2081 1.74193 10.4025 1.66137 10.6247 1.66693C10.8469 1.67248 11.0414 1.75859 11.2081 1.92526C11.3747 2.09193 11.4581 2.28915 11.4581 2.51693C11.4581 2.7447 11.3747 2.94193 11.2081 3.10859L6.32472 7.99192Z"
                fill="#484B51"
              />
            </svg>
          }
          onClick={() => router.back()}
        />

        <div className="w-full pb-[70px] relative">
          <img
            alt="img_career"
            src="https://eoxs.com/wp-content/uploads/2024/12/uncoiling.jpg"
            className="h-[300px] w-full rounded-[12px] object-cover"
          />

          <div className="flex items-center justify-center w-[140px] h-[140px] rounded-full bg-primary-3 absolute bottom-0 left-[140px]">
            <img
              alt="img_logo"
              src={IMAGE_LOGO}
              className="w-[120px] h-[100px] object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
});

export default CareerDetailPage;
