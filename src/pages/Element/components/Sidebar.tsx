import { ChemicalElement } from "../../../types/ChemicalElement";

interface SidebarProps {
  element: ChemicalElement;
}

export function Sidebar({ element }: SidebarProps) {
  return (
    <div className="w-80 space-y-4">
      {/* Element Symbol Card */}
      <div>
        <div className="p-6">
          <div className="text-center">
            <div className="text-6xl font-bold text-primary mb-2">
              {element.symbol}
            </div>
            <div className="text-xl font-semibold mb-1">{element.name}</div>
            <div className="text-sm text-muted-foreground">
              Atomic Number: {element.atomicNumber}
            </div>
          </div>
        </div>
      </div>

      {/* Basic Properties */}
      <div>
        <div>
          <span className="text-lg">Basic Properties</span>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-sm font-medium">Atomic Mass:</span>
            <span className="text-sm">{element.atomicMass} u</span>
          </div>
          <hr />
          <div className="flex justify-between">
            <span className="text-sm font-medium">Category:</span>
            <div>{element.category}</div>
          </div>
          <hr />
          <div className="flex justify-between">
            <span className="text-sm font-medium">Period:</span>
            <span className="text-sm">{element.period}</span>
          </div>
          <hr />
          <div className="flex justify-between">
            <span className="text-sm font-medium">Group:</span>
            <span className="text-sm">{element.group}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
