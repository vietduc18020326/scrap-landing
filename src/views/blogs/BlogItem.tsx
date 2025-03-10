import { memo } from "react";
import { UITextBody } from "@/components";

interface Props {
  title: string;
  description: string;
  image: string;
  link: string;
}

export const BlogItem = memo(function BlogItem({
  title,
  description,
  image,
  link,
}: Props) {
  return (
    <div
      className="flex flex-col cursor-pointer w-[calc(33%-15px)] max-md:w-full"
      onClick={() => window.open(link)}
    >
      <img
        alt="img_blog"
        className="w-[373px] h-[210px] max-md:w-full max-md:h-[192px] rounded-[8px] object-cover"
        src={image}
      />

      <div className="py-4 flex flex-col gap-4 items-start">
        <UITextBody.Bold20
          text={title}
          className="text-neutral-1 line-clamp-1 max-md:line-clamp-2"
        />
        <UITextBody.Regular16
          text={description}
          className="text-neutral-3 line-clamp-3"
        />
        <div className="flex flex-row gap-1 items-center">
          <UITextBody.Bold16 text="Read more" className="text-primary-1" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M10.5007 9.99996L7.25065 6.74996C7.09787 6.59718 7.02148 6.40274 7.02148 6.16663C7.02148 5.93051 7.09787 5.73607 7.25065 5.58329C7.40343 5.43051 7.59787 5.35413 7.83398 5.35413C8.0701 5.35413 8.26454 5.43051 8.41732 5.58329L12.2507 9.41663C12.334 9.49996 12.393 9.59024 12.4277 9.68746C12.4625 9.78468 12.4798 9.88885 12.4798 9.99996C12.4798 10.1111 12.4625 10.2152 12.4277 10.3125C12.393 10.4097 12.334 10.5 12.2507 10.5833L8.41732 14.4166C8.26454 14.5694 8.0701 14.6458 7.83398 14.6458C7.59787 14.6458 7.40343 14.5694 7.25065 14.4166C7.09787 14.2638 7.02148 14.0694 7.02148 13.8333C7.02148 13.5972 7.09787 13.4027 7.25065 13.25L10.5007 9.99996Z"
              fill="#F57700"
            />
          </svg>
        </div>
      </div>
    </div>
  );
});
