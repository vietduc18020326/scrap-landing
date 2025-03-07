import { JSX, memo } from "react";
import { AbsTag, UITextBody, UITextHeading } from "@/components";
import { IMAGE_SOLUTION_1, IMAGE_SOLUTION_2 } from "@/assets";
import { DUMMY_SOLUTION } from "@/dummy";

export const SolutionsSection = memo(function SolutionsSection() {
  return (
    <section className="bg-white flex items-center justify-center w-full py-20">
      <div className="flex flex-col w-content gap-12 items-center">
        <div className="flex flex-col gap-3 items-center">
          <AbsTag title={"Our solutions"} absolute={false} />
          <UITextHeading.H2
            text={`What makes\nScrap Plan Different?`}
            className="text-neutral-1 whitespace-break-spaces text-center"
          />
        </div>

        <div className="flex flex-row gap-5 w-full">
          <div className="flex flex-row gap-5 flex-wrap flex-1">
            {DUMMY_SOLUTION.HOME.slice(0, 2).map((item, index) => (
              <Item key={index} {...item} />
            ))}

            <img
              alt="image_solution_1"
              src={IMAGE_SOLUTION_1}
              className="w-[373px]"
            />

            {DUMMY_SOLUTION.HOME.slice(2, 5).map((item, index) => (
              <Item key={index} {...item} />
            ))}
          </div>

          <img
            alt={"image_solution_2"}
            src={IMAGE_SOLUTION_2}
            className="w-[373px] rounded-[8px]"
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
    <li className="flex flex-col border h-fit border-neutral-4 rounded-[8px] p-6 w-[374px] gap-4 items-start">
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
