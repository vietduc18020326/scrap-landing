import { memo } from "react";
import { UITextBody, UITextHeading } from "@/components";
import Image from "next/image";

export const ServiceItem = memo(function ServiceItem({
  title,
  description,
  src,
}: {
  title: string;
  description: string;
  src: string;
}) {
  return (
    <li className="p-6 flex flex-col gap-4 items-center">
      <img
        alt="img_service"
        src={src}
        className="w-[260px] h-[260px] object-contain"
      />

      <div className="flex flex-col items-center justify-center gap-3">
        <UITextHeading.H5 text={title} className="text-neutral-1" />
        <UITextBody.Regular18
          text={description}
          className="text-neutral-2 text-center"
        />

        <button className="flex flex-row gap-1 items-center">
          <UITextBody.Bold16 text="Learn more" className="text-primary-1" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
          >
            <path
              d="M10.6667 10.0001L7.41667 6.75008C7.26389 6.5973 7.1875 6.40286 7.1875 6.16675C7.1875 5.93064 7.26389 5.73619 7.41667 5.58341C7.56944 5.43064 7.76389 5.35425 8 5.35425C8.23611 5.35425 8.43056 5.43064 8.58333 5.58341L12.4167 9.41675C12.5 9.50008 12.559 9.59036 12.5938 9.68758C12.6285 9.7848 12.6458 9.88897 12.6458 10.0001C12.6458 10.1112 12.6285 10.2154 12.5938 10.3126C12.559 10.4098 12.5 10.5001 12.4167 10.5834L8.58333 14.4167C8.43056 14.5695 8.23611 14.6459 8 14.6459C7.76389 14.6459 7.56944 14.5695 7.41667 14.4167C7.26389 14.264 7.1875 14.0695 7.1875 13.8334C7.1875 13.5973 7.26389 13.4029 7.41667 13.2501L10.6667 10.0001Z"
              fill="#F57700"
            />
          </svg>
        </button>
      </div>
    </li>
  );
});
