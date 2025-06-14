import { PeriodicTable } from "../components/PeriodicTable";
import { ThemeToggler } from "../components/ThemeToggler";

export const HomePage = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* Header */}
      <div className="grid grid-cols-3 container mx-auto items-center py-8">
        <div />
        <h1 className="text-5xl font-semibold text-center">Periodic Table</h1>
        <div className="flex justify-end">
          <ThemeToggler />
        </div>
      </div>
      <PeriodicTable />
    </div>
  );
};
