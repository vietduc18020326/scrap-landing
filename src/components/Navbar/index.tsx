import { memo } from "react";
import { IMAGE_LOGO } from "@/assets";
import { UIButton, UITextBody } from "@/components";
import Link from "next/link";
import Image from "next/image";

export const Navbar = memo(function Navbar() {
  return (
    <header className="sticky top-0 w-full z-50 h-fit bg-primary-2 py-1 px-140 flex items-center justify-center">
      <div className="w-content flex flex-row justify-between items-center">
        <div className="flex flex-row gap-1 items-center">
          <img
            alt="image_logo"
            src={IMAGE_LOGO}
            className="w-[77px] h-16 object-cover"
          />
          <UITextBody.Bold20 text="Scraplan" className="text-neutral-1" />
        </div>

        <div className="flex flex-row">
          <Link href={"#"} className="py-3 px-4">
            <UITextBody.Bold16 text="Home" className="text-neutral-1" />
          </Link>
          <Link href={"#"} className="py-3 px-4">
            <UITextBody.Bold16 text="Scrap Rates" className="text-neutral-1" />
          </Link>
          <Link href={"#"} className="py-3 px-4">
            <UITextBody.Bold16 text="Blogs" className="text-neutral-1" />
          </Link>
          <Link href={"#"} className="py-3 px-4">
            <UITextBody.Bold16 text="Career" className="text-neutral-1" />
          </Link>
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
      </div>
    </header>
  );
});
