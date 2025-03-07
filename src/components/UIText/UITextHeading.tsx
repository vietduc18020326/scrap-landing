import React, { memo, PropsWithChildren } from "react";

interface Props
  extends PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> {
  text?: string; // Example of an additional custom prop
}

const H1 = memo(function H1({ text, children, className, ...props }: Props) {
  return (
    <p
      className={`text-[76px] font-extrabold not-italic leading-[80px] tracking-[-2px] font-lato ${className}`}
      {...props}
    >
      {children || text}
    </p>
  );
});

const H2 = memo(function H2({ text, children, className, ...props }: Props) {
  return (
    <p
      className={`text-[56px] font-extrabold not-italic leading-[68px] tracking-[-1px] font-lato ${className}`}
      {...props}
    >
      {children || text}
    </p>
  );
});

const H5 = memo(function H5({ text, children, className, ...props }: Props) {
  return (
    <p
      className={`text-[24px] font-bold not-italic leading-8 tracking-[-0.5px] font-lato ${className}`}
      {...props}
    >
      {children || text}
    </p>
  );
});

export const UITextHeading = {
  H1,
  H2,
  H5,
};
