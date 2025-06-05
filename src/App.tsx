import { createBrowserRouter, RouterProvider } from "react-router";
import { ThemeProvider } from "./providers/Theme";
import { HomePage } from "./pages/Home";
import { ElementPage } from "./pages/Element/ElementPage";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { index: true, element: <HomePage /> },
      { path: "/:element", element: <ElementPage /> },
    ],
  },
]);

function App() {
  return (
    <div className="bg-white dark:bg-zinc-800 w-full min-h-screen">
      <ThemeProvider defaultTheme="light" storageKey="periodic-table-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  );
}

export default App;
