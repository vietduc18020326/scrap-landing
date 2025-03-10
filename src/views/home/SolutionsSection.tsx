import { JSX, memo } from "react";
import { AbsTag, UITextBody, UITextHeading } from "@/components";
import { IMAGE_SOLUTION_1, IMAGE_SOLUTION_2 } from "@/assets";
import { DUMMY_SOLUTION } from "@/dummy";

export const SolutionsSection = memo(function SolutionsSection() {
  return (
    <section className="bg-white flex items-center justify-center w-full py-20 max-md:py-10 max-md:px-4">
      <div className="flex flex-col w-content gap-12 items-center max-md:gap-10">
        <div className="flex flex-col gap-3 items-center">
          <AbsTag title={"Our solutions"} absolute={false} />
          <UITextHeading.H2
            text={`What makes\nScrap Plan Different?`}
            className="text-neutral-1 whitespace-break-spaces text-center"
          />
        </div>

        <div className="flex flex-row gap-5 w-full max-md:gap-3 max-md:flex-col">
          <div className="flex flex-row gap-5 flex-wrap w-full max-md:gap-3 max-md:flex-col">
            {DUMMY_SOLUTION.HOME.slice(0, 2).map((item, index) => (
              <Item key={index} {...item} />
            ))}

            <img
              alt="image_solution_1"
              src={IMAGE_SOLUTION_1}
              className="max-md:w-full max-md:h-[168px] object-cover rounded-[8px]"
            />

            {DUMMY_SOLUTION.HOME.slice(2, 5).map((item, index) => (
              <Item key={index} {...item} />
            ))}
          </div>

          <img
            alt={"image_solution_2"}
            src={IMAGE_SOLUTION_2}
            className="w-[373px] rounded-[8px] max-md:w-full max-md:h-[336px] object-cover"
          />
        </div>
      </div>
    </section>
  );
});

const Item = memo(function Item({
  icon,
  title,
  description,
}: {
  icon: {
    Comp: JSX.Element;
    bgColor: string;
  };
  title: string;
  description: string;
}) {
  return (
    <li className="flex flex-col border h-fit border-neutral-4 rounded-[8px] p-6 w-[374px] gap-4 items-start max-md:w-full max-md:p-4 max-md:gap-3">
      <div className={`p-2 rounded-[8px]`} style={{ background: icon.bgColor }}>
        {icon.Comp}
      </div>

      <div className="flex flex-col gap-2 items-start">
        <UITextHeading.H5 text={title} className="text-neutral-1" />
        <UITextBody.Regular18 text={description} className="text-neutral-2" />
      </div>
    </li>
  );
});
