import { twMerge } from "tailwind-merge";

import { IconProps } from "@src/types";

export default function TickIcon({ size, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 11 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={twMerge("stroke-current", className)}
    >
      <path d="M1 5L5 9L13 1" stroke-width="2" />
    </svg>
  );
}

