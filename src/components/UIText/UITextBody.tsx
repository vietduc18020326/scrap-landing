import React, { memo, PropsWithChildren } from "react";

interface Props
  extends PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> {
  text?: string; // Example of an additional custom prop
}

const SemiBold16 = memo(function SemiBold16({
  text,
  children,
  className,
  ...props
}: Props) {
  return (
    <p
      className={`text-base font-semibold not-italic leading-6 tracking-[-0.08px] font-lato ${className}`}
      {...props}
    >
      {text || children}
    </p>
  );
});

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

const Bold18 = memo(function Bold18({
  text,
  children,
  className,
  ...props
}: Props) {
  return (
    <p
      className={`text-[18px] font-bold not-italic leading-7 tracking-[-0.5px] font-lato ${className}`}
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

const Medium20 = memo(function Medium20({
  text,
  children,
  className,
  ...props
}: Props) {
  return (
    <p
      className={`text-xl font-medium not-italic leading-8 tracking-[-0.5px] font-lato ${className}`}
      {...props}
    >
      {text || children}
    </p>
  );
});

const Regular18 = memo(function Regular18({
  text,
  children,
  className,
  ...props
}: Props) {
  return (
    <p
      className={`text-[18px] font-normal not-italic leading-7 tracking-[-0.5px] font-lato ${className}`}
      {...props}
    >
      {text || children}
    </p>
  );
});
const Regular16 = memo(function Regular16({
  text,
  children,
  className,
  ...props
}: Props) {
  return (
    <p
      className={`text-[16px] font-normal not-italic leading-6 tracking-[-0.5px] font-lato ${className}`}
      {...props}
    >
      {text || children}
    </p>
  );
});

export const UITextBody = {
  SemiBold16,

  Bold20,
  Bold18,
  Bold16,

  Medium20,

  Regular18,
  Regular16,
};
