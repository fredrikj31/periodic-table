import { chemicalElements } from "../data/chemicalElements";
import ChemicalElementCard from "./ChemicalElementCard";

export const PeriodicTable = () => {
  return (
    <div className="container mx-auto grid grid-cols-18 grid-rows-7 gap-4">
      {chemicalElements
        .filter((item) => item.group !== null)
        .map((chemicalElement) => (
          <ChemicalElementCard
            key={chemicalElement.symbol}
            element={chemicalElement}
            style={{
              gridRow: chemicalElement.period,
              gridColumn: chemicalElement.group || 1,
            }}
          />
        ))}
    </div>
  );
};
