import Dropdown from "@src/UI/Dropdown";
import { ComponentProps } from "react";

const DROPDOWN_OPTIONS: ComponentProps<typeof Dropdown>["options"] = [
  { label: "Populares", value: "Popular" },
  { label: "Mis peliculas", value: "MyMovies" },
];

export default DROPDOWN_OPTIONS;

