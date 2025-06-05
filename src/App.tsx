import { createBrowserRouter, RouterProvider } from "react-router";
import { ThemeProvider } from "./providers/Theme";
import { HomePage } from "./pages/Home";
import { ElementPage } from "./pages/Element/ElementPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { index: true, element: <HomePage /> },
      { path: "/:element", element: <ElementPage /> },
    ],
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <div className="bg-white dark:bg-zinc-800 w-full min-h-screen">
      <ThemeProvider defaultTheme="light" storageKey="periodic-table-theme">
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
