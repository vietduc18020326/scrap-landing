"use client";

import { memo, useCallback, useMemo, useState } from "react";
import { FeaturedBlogSection } from "./FeaturedBlogSection";
import { BlogItem } from "./BlogItem";
import { UITextBody, UITextHeading } from "@/components";
import { DUMMY_BLOG } from "@/dummy";

const BlogsPage = memo(function BlogsPage() {
  const [activeTab, setActiveTab] = useState("0");

  return (
    <div className="w-full py-20 items-center justify-center flex bg-white px-[140px] gap-12 flex-col max-md:py-10 max-md:px-4 max-md:gap-10">
      <FeaturedBlogSection />

      <section className="w-content flex flex-col gap-6 items-start pt-12 border-t border-t-neutral-4 max-md:border-t-0 max-md:pt-0 max-md:gap-5 max-md:w-full">
        <UITextHeading.H3 text="Latest blogs" className="text-neutral-1" />
        <ul className="flex flex-row gap-3 max-md:gap-2 flex-wrap">
          {[
            "All",
            "Scrap management",
            "Waste reduction",
            "Recycling strategies",
            "Sustainable manufacturing",
          ].map((item, index) => (
            <TabItem
              key={index}
              title={item}
              id={index.toString()}
              activeTab={activeTab}
              onChangeValue={setActiveTab}
            />
          ))}
        </ul>

        <div className="flex flex-row flex-wrap gap-y-5 gap-x-6 max-md:gap-5 max-md:flex-col">
          {DUMMY_BLOG.LATEST.map((item, index) => (
            <BlogItem key={index} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
});

const TabItem = memo(function TabItem({
  title,
  id,
  onChangeValue,
  activeTab,
}: {
  title: string;
  id: string;
  activeTab: string;
  onChangeValue: (value: string) => void;
}) {
  const onClick = useCallback(() => {
    onChangeValue(id);
  }, [id, onChangeValue]);

  const isActive = useMemo(() => activeTab === id, [id, activeTab]);

  return (
    <li
      className={`py-2 px-5 border border-neutral-4 ${isActive ? "bg-primary-1" : "bg-white"} rounded-[8px] cursor-pointer`}
      onClick={onClick}
    >
      <UITextBody.SemiBold14
        text={title}
        className={`${isActive ? "text-white" : "text-neutral-2"}`}
      />
    </li>
  );
});

export default BlogsPage;
