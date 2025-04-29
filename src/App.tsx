import { PeriodicTable } from "./components/PeriodicTable";
import { ThemeToggler } from "./components/ThemeToggler";
import { ThemeProvider } from "./providers/Theme";

function App() {
  return (
    <div className="bg-white dark:bg-zinc-800 w-full min-h-screen">
      <ThemeProvider defaultTheme="light" storageKey="periodic-table-theme">
        <PeriodicTable />
        <ThemeToggler />
      </ThemeProvider>
    </div>
  );
}

export default App;
