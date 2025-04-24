export type ChemicalElementCategory =
  | "alkali-metal"
  | "alkaline-earth-metal"
  | "transition-metal"
  | "post-transition-metal"
  | "metalloid"
  | "non-metal"
  | "halogen"
  | "noble-gas"
  | "lanthanide"
  | "actinide"
  | "Unknown";

export interface ChemicalElement {
  name: string;
  symbol: string;
  atomicNumber: number;
  atomicMass: number;
  category: ChemicalElementCategory;
  period: number;
  group: number | null;
}
