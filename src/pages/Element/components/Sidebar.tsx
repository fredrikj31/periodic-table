import { Card, CardContent, CardHeader } from "@shadcn-ui/components/ui/card";
import { ChemicalElement } from "../../../types/ChemicalElement";

interface SidebarProps {
  element: ChemicalElement;
}

export function Sidebar({ element }: SidebarProps) {
  return (
    <Card className="w-80">
      <CardHeader>
        <div>
          <div className="p-6">
            <div className="text-center">
              <div className="text-6xl font-bold b-2">{element.symbol}</div>
              <div className="text-xl font-semibold mb-1">{element.name}</div>
              <div className="text-sm">
                Atomic Number: {element.atomicNumber}
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
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
      </CardContent>
    </Card>
  );
}
