"use client";

import { memo } from "react";
import { useParams } from "next/navigation";
import {
  TableContents,
  UIButton,
  UITextBody,
  UITextHeading,
} from "@/components";
import Link from "next/link";
import { Avatar } from "antd";
import { IMAGE_AVATAR_1 } from "@/assets";

export interface BlogDetailProps {
  id: string;
}

const BlogDetailPage = memo(function BlogDetailPage() {
  const params = useParams();
  return (
    <div className="w-full bg-white flex flex-col py-12 items-center justify-center gap-12 max-md:py-10 max-md:px-4 max-md:gap-10">
      <section className="flex flex-col items-start gap-12 w-content max-md:w-full max-md:gap-3">
        <Link href={"/"}>
          <UIButton
            title={"Back to Home"}
            className="border border-neutral-4 bg-white"
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
          />
        </Link>

        <div className="flex flex-col gap-3 items-start">
          <UITextHeading.H2
            text="How to Optimize Scrap Collection for Maximum Efficiency"
            className="text-neutral-1"
          />
          <div className="flex flex-row items-center justify-center gap-3">
            <UITextBody.Regular18
              text="September 26, 2024"
              className="text-neutral-2"
            />
            <div className="w-1 h-1 rounded-full bg-neutral-2" />
            <UITextBody.Regular18
              text="3 min read"
              className="text-neutral-2"
            />
          </div>
          <div className="flex flex-row gap-3 items-center justify-center">
            <Avatar src={IMAGE_AVATAR_1} size={32} />
            <UITextBody.Bold18
              text="Geoff Roberts"
              className="text-neutral-2"
            />
          </div>
        </div>
      </section>

      <section className="flex flex-row w-content justify-between items-start max-md:flex-col-reverse max-md:w-full max-md:gap-10">
        <div className="flex-1" />

        <div className="flex flex-col items-start w-[372px] gap-6 max-md:w-full max-md:gap-4">
          <ul className="flex flex-row gap-3 flex-wrap max-md:gap-2">
            {[
              "Scrap management",
              "Waste reduction",
              "Recycling strategies",
            ].map((item, index) => (
              <li
                key={index}
                className="py-2 px-5 border border-neutral-4 rounded-[8px]"
              >
                <UITextBody.SemiBold14 text={item} className="text-neutral-2" />
              </li>
            ))}
          </ul>

          <div className="w-full h-[1px] bg-neutral-4" />

          <TableContents
            options={[
              "Product management is a tough job this page",
              "Product management is very different if you’re building something net-new",
              "Product management is a tough job",
              "Consider paid feature development as funding",
            ]}
          />
        </div>
      </section>
    </div>
  );
});

export default BlogDetailPage;
