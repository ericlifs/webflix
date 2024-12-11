import { IconProps } from "@src/types";
import { twMerge } from "tailwind-merge";

export default function PlayIcon({ size, className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={twMerge("stroke-current", className)}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9423 8.2363L2.625 1.875V14.125L11.9423 8.2363Z"
      />
    </svg>
  );
}

