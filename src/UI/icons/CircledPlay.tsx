import { twMerge } from "tailwind-merge";

import PlayIcon from "./Play";

import { IconProps } from "@src/types";

export default function CircledPlayIcon({ size, className }: IconProps) {
  return (
    <div
      className={twMerge(
        "border border-white text-white bg-black/50 aspect-square flex items-center justify-center rounded-full",
        className
      )}
      style={{ width: size }}
    >
      <PlayIcon size={size / 2} />
    </div>
  );
}

