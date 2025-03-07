import { memo } from "react";
import { UITextBody, UITextHeading } from "@/components/UIText";
import {
  IMAGE_DOWNLOAD_ANDROID_STORE,
  IMAGE_DOWNLOAD_IOS_STORE,
  IMAGE_LOGO,
} from "@/assets";
import { UIButton } from "@/components/UIButton";
import Link from "next/link";

export const FooterSection = memo(function FooterSection() {
  return (
    <footer className="bg-[#F4F4F5] py-12 w-full flex items-center justify-center">
      <div className="w-content gap-12 flex flex-col">
        <div className="w-content flex flex-row gap-[118px]">
          <div className="flex flex-col w-[275px] gap-3 items-start">
            <img
              alt="image_logo"
              src={IMAGE_LOGO}
              className="w-[98px] h-[82px] object-cover"
            />

            <div className="flex flex-col gap-2 items-start">
              <UITextHeading.H5 text="Scraplan" className="text-neutral-1" />
              <UITextBody.SemiBold16
                text="Scraplan – Simplify scrap collection with top rates & trusted drivers."
                className="text-neutral-2"
              />
            </div>

            <UIButton
              title={"Contact sales"}
              className="bg-neutral-1"
              textClassName="text-white"
              RightIconComponent={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                >
                  <path
                    d="M10.5007 10.7269L7.25065 7.47689C7.09787 7.32411 7.02148 7.12967 7.02148 6.89355C7.02148 6.65744 7.09787 6.463 7.25065 6.31022C7.40343 6.15744 7.59787 6.08105 7.83398 6.08105C8.0701 6.08105 8.26454 6.15744 8.41732 6.31022L12.2507 10.1436C12.334 10.2269 12.393 10.3172 12.4277 10.4144C12.4625 10.5116 12.4798 10.6158 12.4798 10.7269C12.4798 10.838 12.4625 10.9422 12.4277 11.0394C12.393 11.1366 12.334 11.2269 12.2507 11.3102L8.41732 15.1436C8.26454 15.2963 8.0701 15.3727 7.83398 15.3727C7.59787 15.3727 7.40343 15.2963 7.25065 15.1436C7.09787 14.9908 7.02148 14.7963 7.02148 14.5602C7.02148 14.3241 7.09787 14.1297 7.25065 13.9769L10.5007 10.7269Z"
                    fill="white"
                  />
                </svg>
              }
            />
          </div>

          <div className="flex flex-row flex-1 gap-5">
            <div className="flex flex-col gap-4 items-start flex-1">
              <UITextBody.Bold18 text="Company" className="text-neutral-1" />
              <div className="flex flex-col">
                <Link href={"#"} className="py-3">
                  <UITextBody.SemiBold16
                    text="Home"
                    className="text-neutral-1"
                  />
                </Link>
                <Link href={"#"} className="py-3">
                  <UITextBody.SemiBold16
                    text="Scrap Rates"
                    className="text-neutral-1"
                  />
                </Link>
                <Link href={"#"} className="py-3">
                  <UITextBody.SemiBold16
                    text="Blogs"
                    className="text-neutral-1"
                  />
                </Link>
                <Link href={"#"} className="py-3">
                  <UITextBody.SemiBold16
                    text="Career"
                    className="text-neutral-1"
                  />
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-4 items-start flex-1">
              <UITextBody.Bold18 text="Follow us" className="text-neutral-1" />
              <div className="flex flex-col">
                <Link href={"#"} className="py-3">
                  <UITextBody.SemiBold16
                    text="Facebook"
                    className="text-neutral-1"
                  />
                </Link>
                <Link href={"#"} className="py-3">
                  <UITextBody.SemiBold16
                    text="Linkendln"
                    className="text-neutral-1"
                  />
                </Link>
                <Link href={"#"} className="py-3">
                  <UITextBody.SemiBold16
                    text="Discord"
                    className="text-neutral-1"
                  />
                </Link>
              </div>
            </div>

            <div className="flex flex-col flex-1 gap-4">
              <UITextBody.Bold18
                text={`Download mobile app\nfor drivers`}
                className="text-neutral-1 whitespace-break-spaces"
              />
              <div className="flex flex-col gap-3 items-start">
                <button
                  className="w-[133px] h-[44px] bg-cover"
                  style={{
                    backgroundImage: `url(${IMAGE_DOWNLOAD_IOS_STORE})`,
                  }}
                />
                <button
                  className="w-[150px] h-[44px] bg-cover"
                  style={{
                    backgroundImage: `url(${IMAGE_DOWNLOAD_ANDROID_STORE})`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full pt-6 border-t border-t-neutral-4 flex flex-row items-center justify-between">
          <div className="flex flex-row gap-12">
            <UITextBody.Regular16
              text="Privacy Policy"
              className="text-neutral-2"
            />
            <UITextBody.Regular16
              text="Term & Conditions"
              className="text-neutral-2"
            />
          </div>

          <UITextBody.Regular16
            text="© 2024 Scraplan. All rights reserved."
            className="text-neutral-3"
          />
        </div>
      </div>
    </footer>
  );
});
