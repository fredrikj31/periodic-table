import { CSSProperties } from "react";
import {
  ChemicalElement,
  ChemicalElementCategory,
} from "../types/ChemicalElement";

const CHEMICAL_ELEMENT_CATEGORY_COLORS: Record<
  ChemicalElementCategory,
  string
> = {
  "alkali-metal": "#ff6b6b",
  "alkaline-earth-metal": "#ffa06b",
  "transition-metal": "#ffd56b",
  "post-transition-metal": "#c3ff6b",
  metalloid: "#6bff9e",
  "non-metal": "#6bfff6",
  halogen: "#d46bff",
  "noble-gas": "#c0c0c0",
  lanthanide: "#ff9ec3",
  actinide: "#e56bff",
  Unknown: "#ffffff",
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
          backgroundColor: CHEMICAL_ELEMENT_CATEGORY_COLORS[element.category],
        }}
      >
        <div className="text-xs opacity-70">{element.atomicNumber}</div>
        <div className="text-xl font-bold">{element.symbol}</div>
        <div className="text-xs truncate max-w-full">{element.name}</div>
      </div>
    </div>
  );
}
