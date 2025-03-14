"use client";

import { memo, useCallback, useMemo, useState } from "react";
import { UITextBody, UITextHeading } from "@/components/UIText";

interface Props {
  options: Array<string>;
}

export const TableContents = memo(function TableContents({ options }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col gap-3 items-start max-md:w-full">
      <UITextHeading.H5 text="Table of contents" className="text-neutral-1" />

      <ul className="flex flex-col gap-2 max-md:w-full">
        {options.map((item, index) => (
          <Item
            key={index}
            title={item}
            index={index}
            activeIndex={activeIndex}
            onChangeValue={setActiveIndex}
          />
        ))}
      </ul>
    </div>
  );
});

const Item = memo(function Item({
  title,
  index,
  activeIndex,
  onChangeValue,
}: {
  title: string;
  index: number;
  activeIndex: number;
  onChangeValue: (value: number) => void;
}) {
  const active = useMemo(() => activeIndex === index, [index, activeIndex]);

  const onClick = useCallback(
    () => onChangeValue(index),
    [onChangeValue, index],
  );

  return (
    <li
      className={`p-2 ${active ? "bg-secondary-3" : "text-neutral-3"} rounded-[8px] cursor-pointer`}
      onClick={onClick}
    >
      <UITextBody.Medium18
        text={title}
        className={`${active ? "text-neutral-1" : ""}`}
      />
    </li>
  );
});
