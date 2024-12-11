import { useState } from "react";
import { twMerge } from "tailwind-merge";

import TickIcon from "@src/UI/icons/Tick";
import ChevronDownIcon from "@src/UI/icons/ChevronDown";

type DropdownOption = {
  value: string;
  label: string;
};

type DropdownProps = {
  label: string;
  className: string;
  options: DropdownOption[];
};

export default function Dropdown({ label, className, options }: DropdownProps) {
  const [selectedOption] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      className={twMerge("relative py-2 text-white", className)}
      onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}
    >
      <label className="flex pointer-events-none space-x-4 text-lg leading-5 tracking-big">
        <span>{label}:</span>
        <span className="font-semibold">{selectedOption.label}</span>
        <ChevronDownIcon size={14} className={isOpen ? "rotate-180" : ""} />
      </label>

      {isOpen && (
        <div className="bg-black flex flex-col absolute top-full py-8 px-4 gap-4 left-0 right-0 z-30 translate-y-2">
          {options.map((option) => {
            const isSelected = option.value === selectedOption.value;

            return (
              <button
                disabled={!isSelected} // TODO Disabled as the "My Movies" feature is not implemented
                key={option.value}
                className={twMerge(
                  "text-lg flex px-2 tracking-big items-center justify-between",
                  isSelected && "font-semibold"
                )}
              >
                {option.label}
                {isSelected && <TickIcon size={14} />}
              </button>
            );
          })}
        </div>
      )}
    </button>
  );
}

