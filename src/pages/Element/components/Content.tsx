import { Button } from "@shadcn-ui/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@shadcn-ui/components/ui/card";
import { ChemicalElement } from "src/types/ChemicalElement";

export const Content = ({
  element,
  content,
}: {
  element: ChemicalElement;
  content: string;
}) => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>{element.name}</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent className="leading-relaxed">{content}</CardContent>
      <CardFooter className="mt-auto">
        <Button className="cursor-pointer" variant={"secondary"}>
          Share
        </Button>
      </CardFooter>
    </Card>
  );
};
