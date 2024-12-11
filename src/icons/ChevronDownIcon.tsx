import { twMerge } from "tailwind-merge";

import { IconProps } from "@src/types";

export default function ChevronDownIcon({ size, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 13 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={twMerge(
        "stroke-current transition-all duration-300",
        className
      )}
    >
      <path d="M1 1L6.54557 6.54557L12.0911 1" stroke-width="2" />
    </svg>
  );
}

