import React, { memo, PropsWithChildren } from "react";

interface Props
  extends PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> {
  text?: string; // Example of an additional custom prop
}

const Bold16 = memo(function Bold16({
  text,
  children,
  className,
  ...props
}: Props) {
  return (
    <p
      className={`text-base font-bold not-italic leading-6 tracking-[-0.08px] font-lato ${className}`}
      {...props}
    >
      {text || children}
    </p>
  );
});

const Bold20 = memo(function Bold20({
  text,
  children,
  className,
  ...props
}: Props) {
  return (
    <p
      className={`text-xl font-bold not-italic !leading-8 tracking-[-0.5px] font-lato ${className}`}
      {...props}
    >
      {text || children}
    </p>
  );
});

export const UITextBody = {
  Bold20,
  Bold16,
};
