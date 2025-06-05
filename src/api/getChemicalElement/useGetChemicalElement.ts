import { useQuery } from "@tanstack/react-query";
import { getChemicalElement } from ".";

export const useGetChemicalElement = ({
  element,
}: {
  element: string | undefined;
}) => {
  return useQuery({
    queryKey: ["chemical element", element],
    queryFn: () => (element ? getChemicalElement({ element }) : undefined),
  });
};
