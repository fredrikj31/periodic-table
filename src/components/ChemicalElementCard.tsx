import { CSSProperties } from "react";
import { ChemicalElement } from "../types/Element";

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
          backgroundColor: "#ff0000",
        }}
      >
        <div className="text-xs opacity-70">{element.atomicNumber}</div>
        <div className="text-xl font-bold">{element.symbol}</div>
        <div className="text-xs truncate max-w-full">{element.name}</div>
      </div>
    </div>
  );
}
