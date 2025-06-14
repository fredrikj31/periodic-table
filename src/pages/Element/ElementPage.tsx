import { Link, useParams } from "react-router";
import { Content } from "./components/Content";
import { Sidebar } from "./components/Sidebar";
import { useGetChemicalElement } from "../../api/getChemicalElement/useGetChemicalElement";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@shadcn-ui/components/ui/breadcrumb";
import { ThemeToggler } from "../../components/ThemeToggler";

export const ElementPage = () => {
  const { element } = useParams();

  const { isLoading, isError, error, data } = useGetChemicalElement({
    element,
  });

  if (isLoading) {
    return <div>Loading details for {element}...</div>;
  }

  if (isError && error) {
    return <div style={{ color: "red" }}>Error: {error.message}</div>;
  }

  if (!data) {
    return <p>TODO: Make error page</p>;
  }

  return (
    <div className="min-h-screen container mx-auto py-8 flex flex-col gap-4">
      {/* Header */}
      <div className="grid grid-cols-3 container mx-auto items-center">
        <div className="flex justify-start">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to={"/"}>Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{data.typescriptContent.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <h1 className="text-5xl font-semibold text-center">Periodic Table</h1>
        <div className="flex justify-end">
          <ThemeToggler />
        </div>
      </div>
      <div className="flex gap-8">
        {/* Main Content */}
        <div className="flex-1">
          <Content
            element={data.typescriptContent}
            content={data.markdownContent}
          />
        </div>

        {/* Sidebar */}
        <div className="hidden lg:block">
          <Sidebar element={data.typescriptContent} />
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className="lg:hidden mt-8">
        <Sidebar element={data.typescriptContent} />
      </div>
    </div>
  );
};
