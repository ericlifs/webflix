import { twMerge } from "tailwind-merge";

type ButtonProps = {
  variant: "primary" | "secondary";
  text: string;
  Icon: JSX.Element;
};

const VARIANT_STYLES: Record<ButtonProps["variant"], string> = {
  primary: "text-white bg-black",
  secondary: "text-white bg-black/70 border border-white/50",
};

export default function Button({ variant, text, Icon }: ButtonProps) {
  return (
    <button
      className={twMerge(
        "flex items-center justify-center tracking-wide uppercase outline-none gap-3 py-5 px-20 text-lg leading-5",
        VARIANT_STYLES[variant]
      )}
    >
      {Icon}
      <label>{text}</label>
    </button>
  );
}

