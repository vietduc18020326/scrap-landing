import {
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
  memo,
  useCallback,
} from "react";

export const UIInputField = memo(function UIInputField({
  placeholder,
  onChangeValue,
  keyName,
  ...props
}: DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  placeholder: string;
  keyName: string;
  onChangeValue: (keyName: string, value: any) => void;
}) {
  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) =>
      onChangeValue(keyName, event.target.value),
    [keyName, onChangeValue],
  );

  return (
    <div className="flex-1 border-b border-b-neutral-4">
      <input
        placeholder={placeholder}
        className="focus:outline-none bg-transparent py-4 w-full text-neutral-1 placeholder-neutral-3 text-base font-semibold font-lato leading-6 tracking-normal"
        onChange={onChange}
        {...props}
      />
    </div>
  );
});

export const TextareaField = memo(function TextareaField({
  placeholder,
  keyName,
  onChangeValue,
  ...props
}: DetailedHTMLProps<
  InputHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & {
  keyName: string;
  onChangeValue: (keyName: string, value: any) => void;
}) {
  const onChange = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      onChangeValue(keyName, event.target.value);
    },
    [keyName, onChangeValue],
  );

  return (
    <div className="flex-1 border-b border-b-neutral-4">
      <textarea
        placeholder={placeholder}
        onChange={onChange}
        className="focus:outline-none bg-transparent py-4 w-full text-neutral-1 placeholder-neutral-3 text-base font-semibold font-lato leading-6 tracking-normal resize-none overflow-hidden"
        rows={5} // Initial rows
        {...props}
      />
    </div>
  );
});
