import { HTMLAttributes, JSX, memo } from "react";
import { UITextBody } from "@/components/UIText";
import clsx from "clsx";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  textClassName?: string;
  title: string;
  RightIconComponent?: JSX.Element;
  LeftIconComponent?: JSX.Element;
}

export const UIButton = memo(function UIButton({
  className = "",
  textClassName,
  title,
  LeftIconComponent,
  RightIconComponent,
  ...props
}: Props) {
  return (
    <button
      className={clsx(
        "px-4 py-3 gap-2 justify-center items-center flex flex-row rounded-[8px]",
        className,
      )}
      {...props}
    >
      {LeftIconComponent ? LeftIconComponent : null}
      <UITextBody.Bold16 text={title} className={textClassName} />
      {RightIconComponent ? RightIconComponent : null}
    </button>
  );
});
