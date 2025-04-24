import { chemicalElements } from "../data/chemicalElements";
import ChemicalElementCard from "./ChemicalElementCard";

export const PeriodicTable = () => {
  const gridPositions: Record<string, { gridRow: number; gridColumn: number }> =
    {};
  chemicalElements.forEach((chemicalElement) => {
    gridPositions[chemicalElement.symbol] = {
      gridRow: chemicalElement.period,
      gridColumn: chemicalElement.group || 1,
    };
  });

  return (
    <div className="container mx-auto grid grid-cols-18 grid-rows-7 gap-4">
      {chemicalElements.map((chemicalElement) => (
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
