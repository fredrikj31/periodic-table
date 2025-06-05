import { ChemicalElement } from "../../types/ChemicalElement";

const markdownModules = import.meta.glob("../../data/**/*.md", {
  query: "?raw",
});
const typescriptModules = import.meta.glob("../../data/**/*.ts");

export const getChemicalElement = async ({
  element,
}: {
  element: string;
}): Promise<{
  typescriptContent: ChemicalElement;
  markdownContent: string;
} | null> => {
  // Construct the expected path key for the markdownModules object
  // Note: Adjust this path if your ElementDetail.jsx is in a different location relative to assets/elements
  const typescriptExpectedPath = `../../data/${element}/${element}.ts`;
  const markdownExpectedPath = `../../data/${element}/${element}.md`;

  // Find the dynamic import function for the specific element
  const typescriptImportFunction = typescriptModules[typescriptExpectedPath];
  const markdownImportFunction = markdownModules[markdownExpectedPath];

  if (!typescriptImportFunction || !markdownImportFunction) {
    console.error(`TypeScript or Markdown file not found for path`);
    return null;
  }

  const typescriptContent = await typescriptImportFunction().catch((error) => {
    console.error("Error loading typescript file:", error);
  });

  const markdownContent = await markdownImportFunction().catch((error) => {
    console.error("Error loading markdown file:", error);
  });

  return {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    typescriptContent: (typescriptContent as any).default as ChemicalElement,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    markdownContent: (markdownContent as any).default as string,
  };
};
