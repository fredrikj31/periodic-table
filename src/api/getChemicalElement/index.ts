import { ChemicalElement } from "../../types/ChemicalElement";

const markdownModules = import.meta.glob("../../data/**/*.md", {
  query: "?raw",
});

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
  const markdownImportFunction = markdownModules[markdownExpectedPath];

  if (!markdownImportFunction) {
    console.error(`Markdown file not found for path`);
    return null;
  }

  const typescriptContent = await import(
    /* @vite-ignore */ typescriptExpectedPath
  ).catch((error) => {
    console.error("Error loading typescript file:", error);
  }); // Use /* @vite-ignore */ if Vite warns about dynamic path, but be aware it might reduce optimization. Prefer import.meta.glob if possible.

  const markdownContent = await markdownImportFunction().catch((error) => {
    console.error("Error loading markdown file:", error);
  });

  return {
    typescriptContent: typescriptContent as ChemicalElement,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    markdownContent: (markdownContent as any).default as string,
  };
};
