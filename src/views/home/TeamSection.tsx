import { memo } from "react";
import { AbsTag, UITextBody, UITextHeading } from "@/components";
import { DUMMY_TEAM } from "@/dummy/team";

export const TeamSection = memo(function TeamSection() {
  return (
    <section className="bg-white py-20 items-center justify-center flex">
      <div className="w-content gap-12 flex flex-col items-center justify-center">
        <div className="flex flex-col gap-3 items-center relative">
          <div className="relative">
            <AbsTag
              title={"Our team"}
              className="rotate-[-8.234deg] -left-16 -top-7"
            />
            <UITextHeading.H2
              text="Director’s Profiles"
              className="text-neutral-1"
            />
          </div>
          <UITextBody.Medium20
            text="Scraplan's team comprises experienced professionals from diverse backgrounds, including waste management, technology, and business. Our founders, bring a wealth of experience in waste management and technology and have a shared vision for creating a sustainable and efficient waste management ecosystem in India. Our team is also supported by advisors and mentors who provide valuable guidance and industry insights."
            className="text-neutral-1 w-[766px] text-center"
          />
        </div>

        <ul className="flex flex-row gap-5 w-full">
          {DUMMY_TEAM.HOME.map((item, index) => (
            <MemberItem key={index} isFirst={!index} {...item} />
          ))}
        </ul>
      </div>
    </section>
  );
});

const MemberItem = memo(function MemberItem({
  isFirst,
  description,
  name,
  role,
  avatar,
}: {
  isFirst?: boolean;
  name: string;
  role: string;
  description: string;
  avatar: string;
}) {
  return (
    <li
      className={`${isFirst ? "" : "pl-5 border-l border-l-neutral-4"} flex-1`}
    >
      <div className="p-6 items-center justify-center flex flex-col gap-4">
        <div className="p-4 rounded-[100px] bg-secondary-3">
          <img
            alt="image_avatar"
            src={avatar}
            className="w-[160px] h-[160px] object-cover"
          />
        </div>

        <div className="flex flex-col gap-2 items-center justify-center">
          <UITextHeading.H5 text={name} className="text-neutral-1" />
          <UITextBody.Regular18 text={role} className="text-neutral-2" />
        </div>

        <div className="flex flex-col gap-3 items-center justify-center">
          <UITextBody.Regular16
            text={description}
            className="text-neutral-3 text-center line-clamp-3"
          />

          <button className="flex flex-row items-center justify-center gap-1">
            <UITextBody.Bold16 text="See more" className="text-primary-1" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
            >
              <path
                d="M10.1654 12.4793C10.0543 12.4793 9.95009 12.462 9.85286 12.4272C9.75564 12.3925 9.66536 12.3335 9.58203 12.2502L5.7487 8.41683C5.59592 8.26405 5.51953 8.06961 5.51953 7.8335C5.51953 7.59738 5.59592 7.40294 5.7487 7.25016C5.90148 7.09738 6.09592 7.021 6.33203 7.021C6.56814 7.021 6.76259 7.09738 6.91536 7.25016L10.1654 10.5002L13.4154 7.25016C13.5681 7.09738 13.7626 7.021 13.9987 7.021C14.2348 7.021 14.4293 7.09738 14.582 7.25016C14.7348 7.40294 14.8112 7.59738 14.8112 7.8335C14.8112 8.06961 14.7348 8.26405 14.582 8.41683L10.7487 12.2502C10.6654 12.3335 10.5751 12.3925 10.4779 12.4272C10.3806 12.462 10.2765 12.4793 10.1654 12.4793Z"
                fill="#F57700"
              />
            </svg>
          </button>
        </div>
      </div>
    </li>
  );
});
