import React, { memo, PropsWithChildren } from "react";

interface Props
  extends PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> {
  title: string;
  absolute?: boolean;
}

export const AbsTag = memo(function AbsTag({
  title,
  className,
  absolute = true,
  ...props
}: Props) {
  return (
    <div
      className={`${absolute ? "absolute" : ""} py-[2px] px-3 rounded-[8px] bg-secondary-1 ${className}`}
      {...props}
    >
      <p className="text-[24px] not-italic font-semibold leading-8 font-lato text-white">
        {title}
      </p>
    </div>
  );
});
