import { chemicalElements } from "../data/chemicalElements";
import ChemicalElementCard from "./ChemicalElementCard";

export const PeriodicTable = () => {
  return (
    <div className="container mx-auto grid grid-cols-19 grid-rows-8 gap-4">
      {/* Group Numbers */}
      {new Array(18).fill(null).map((_, index) => (
        <div
          className="flex justify-center items-center text-xl dark:text-white text-black"
          style={{
            gridRow: 1,
            gridColumn: index + 2,
          }}
        >
          {index + 1}
        </div>
      ))}
      {/* Period Numbers */}
      {new Array(7).fill(null).map((_, index) => (
        <div
          className="flex justify-center items-center text-xl dark:text-white text-black"
          style={{
            gridRow: index + 2,
            gridColumn: 1,
          }}
        >
          {index + 1}
        </div>
      ))}
      {/* Chemical Elements */}
      {chemicalElements
        .filter((item) => item.group !== null)
        .map((chemicalElement) => (
          <ChemicalElementCard
            key={chemicalElement.symbol}
            element={chemicalElement}
            style={{
              gridRow: chemicalElement.period + 1,
              gridColumn: (chemicalElement.group || 1) + 1,
            }}
          />
        ))}
    </div>
  );
};
