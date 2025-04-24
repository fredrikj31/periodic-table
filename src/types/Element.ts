type ChemicalElementCategory =
  | "alkali-metal"
  | "alkaline-earth-metal"
  | "transition-metal"
  | "post-transition-metal"
  | "metalloid"
  | "nonmetal"
  | "halogen"
  | "noble-gas"
  | "lanthanide"
  | "actinide";

export interface ChemicalElement {
  name: string;
  symbol: string;
  atomicNumber: number;
  atomicMass: number;
  category: ChemicalElementCategory;
  period: number;
  group: number;
  electronConfiguration: string;
  state: string;
  yearDiscovered: number;
  description: string;
}
