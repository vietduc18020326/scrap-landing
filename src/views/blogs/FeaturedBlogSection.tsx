import { memo } from "react";
import { UITextBody, UITextHeading } from "@/components";
import { Avatar } from "antd";
import { IMAGE_AVATAR_1 } from "@/assets";

export const FeaturedBlogSection = memo(function FeaturedBlogSection() {
  return (
    <section
      className="w-content gap-5 items-center flex flex-row cursor-pointer max-md:flex-col-reverse max-md:w-full"
      onClick={() =>
        window.open(
          "https://eoxs.com/new_blog/how-to-optimize-metal-scrap-handling-and-processing/",
        )
      }
    >
      <img
        alt={"img_blog"}
        className="w-[570px] h-[320px] object-cover rounded-[12px]"
        src="https://eoxs.com/wp-content/uploads/2024/12/uncoiling.jpg"
      />

      <div className="flex flex-col gap-3 items-start">
        <div className="flex flex-row items-center justify-center gap-3">
          <UITextBody.Regular18
            text="September 26, 2024"
            className="text-neutral-2"
          />
          <div className="w-1 h-1 rounded-full bg-neutral-2" />
          <UITextBody.Regular18 text="3 min read" className="text-neutral-2" />
        </div>

        <UITextHeading.H3
          text="How to Optimize Scrap Collection for Maximum Efficiency"
          className="text-neutral-1 line-clamp-2"
        />

        <UITextBody.Regular16
          text="In manufacturing industries, managing scrap materials effectively is crucial for optimizing resources, minimizing waste, and increasing profitability."
          className="text-neutral-3 line-clamp-4"
        />

        <div className="flex flex-row gap-3 items-center justify-center">
          <Avatar src={IMAGE_AVATAR_1} size={32} />
          <UITextBody.Bold18 text="Geoff Roberts" className="text-neutral-2" />
        </div>
      </div>
    </section>
  );
});
