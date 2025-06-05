import { useParams } from "react-router";
import { Content } from "./components/Content";
import { Sidebar } from "./components/Sidebar";
import { useGetChemicalElement } from "../../api/getChemicalElement/useGetChemicalElement";

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
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Main Content */}
          <div className="flex-1 bg-white rounded-lg shadow-sm p-8">
            <Content content={data.markdownContent} />
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
    </div>
  );
};
