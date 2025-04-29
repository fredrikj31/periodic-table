import { CSSProperties } from "react";
import {
  ChemicalElement,
  ChemicalElementCategory,
} from "../types/ChemicalElement";

const CHEMICAL_ELEMENT_CATEGORY_COLORS: Record<
  ChemicalElementCategory,
  {
    light: string;
    dark: string;
  }
> = {
  "alkali-metal": { light: "#ffb347", dark: "#f08c00" },
  "alkaline-earth-metal": { light: "#a7c957", dark: "#76a338" },
  "transition-metal": { light: "#64ccc5", dark: "#40a298" },
  "post-transition-metal": { light: "#f28482", dark: "#d65a5a" },
  metalloid: { light: "#beb8dc", dark: "#9a8c98" },
  "non-metal": { light: "#8ac926", dark: "#6a994e" },
  halogen: { light: "#ff9f1c", dark: "#e07a5f" },
  "noble-gas": { light: "#c9ada7", dark: "#a9a9a9" },
  lanthanide: { light: "#ffdab9", dark: "#e6b88a" },
  actinide: { light: "#ffccb3", dark: "#e0b8a4" },
  Unknown: { light: "#d3d3d3", dark: "#808080" },
};

interface ChemicalElementCardProps {
  element: ChemicalElement;
  style: CSSProperties;
}
export default function ChemicalElementCard({
  element,
  style,
}: ChemicalElementCardProps) {
  return (
    <div
      className="relative aspect-square transform transition-transform hover:scale-105 cursor-pointer"
      style={{
        ...style,
      }}
    >
      <div
        className="w-full h-full rounded-md flex flex-col items-center justify-center p-1 text-center transform transition-transform hover:rotate-y-10 shadow-md"
        style={{
          backgroundColor:
            CHEMICAL_ELEMENT_CATEGORY_COLORS[element.category].light,
        }}
      >
        <div className="text-xs opacity-70">{element.atomicNumber}</div>
        <div className="text-xl font-bold">{element.symbol}</div>
        <div className="text-xs truncate max-w-full">{element.name}</div>
      </div>
    </div>
  );
}
