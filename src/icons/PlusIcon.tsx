import { twMerge } from "tailwind-merge";

import { IconProps } from "@src/types";

export default function PlusIcon({ size, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 15 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={twMerge("stroke-current", className)}
    >
      <path d="M7.5 0V14" />
      <path d="M14.5 7L0.5 7" />
    </svg>
  );
}

