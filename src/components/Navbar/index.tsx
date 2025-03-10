"use client";
import { memo } from "react";
import { IMAGE_LOGO } from "@/assets";
import { UIButton, UITextBody } from "@/components";
import Link from "next/link";
import Image from "next/image";
import { useBoolean, useResizeDimensions } from "@/hooks";
import { Drawer } from "antd";

export const Navbar = memo(function Navbar() {
  const { isMobile } = useResizeDimensions();
  const [isOpen, open, hide] = useBoolean(false);

  return (
    <header className="sticky top-0 w-full z-50 h-fit bg-primary-2 py-1 px-140 max-lg:px-4 flex items-center justify-center">
      <div className="w-content max-lg:w-full inline-flex flex-row justify-between items-center">
        <div className="flex flex-row gap-1 items-center">
          <img
            alt="image_logo"
            src={IMAGE_LOGO}
            className="w-[77px] h-16 max-lg:w-[48px] max-lg:h-10 object-cover"
          />
          <UITextBody.Bold20 text="Scraplan" className="text-neutral-1" />
        </div>

        {isMobile ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            onClick={open}
            className="cursor-pointer"
          >
            <path
              d="M4 18C3.71667 18 3.47917 17.9042 3.2875 17.7125C3.09583 17.5208 3 17.2833 3 17C3 16.7167 3.09583 16.4792 3.2875 16.2875C3.47917 16.0958 3.71667 16 4 16H20C20.2833 16 20.5208 16.0958 20.7125 16.2875C20.9042 16.4792 21 16.7167 21 17C21 17.2833 20.9042 17.5208 20.7125 17.7125C20.5208 17.9042 20.2833 18 20 18H4ZM4 13C3.71667 13 3.47917 12.9042 3.2875 12.7125C3.09583 12.5208 3 12.2833 3 12C3 11.7167 3.09583 11.4792 3.2875 11.2875C3.47917 11.0958 3.71667 11 4 11H20C20.2833 11 20.5208 11.0958 20.7125 11.2875C20.9042 11.4792 21 11.7167 21 12C21 12.2833 20.9042 12.5208 20.7125 12.7125C20.5208 12.9042 20.2833 13 20 13H4ZM4 8C3.71667 8 3.47917 7.90417 3.2875 7.7125C3.09583 7.52083 3 7.28333 3 7C3 6.71667 3.09583 6.47917 3.2875 6.2875C3.47917 6.09583 3.71667 6 4 6H20C20.2833 6 20.5208 6.09583 20.7125 6.2875C20.9042 6.47917 21 6.71667 21 7C21 7.28333 20.9042 7.52083 20.7125 7.7125C20.5208 7.90417 20.2833 8 20 8H4Z"
              fill="#18191B"
            />
          </svg>
        ) : (
          <div className="flex flex-row">
            <Link href={"#"} className="py-3 px-4">
              <UITextBody.Bold16 text="Home" className="text-neutral-1" />
            </Link>
            <Link href={"#"} className="py-3 px-4">
              <UITextBody.Bold16
                text="Scrap Rates"
                className="text-neutral-1"
              />
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
        )}
        <Drawer
          width={268}
          closable={false}
          onClose={hide}
          open={isOpen}
          bodyStyle={{ padding: "44px 16px" }}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </div>
    </header>
  );
});
