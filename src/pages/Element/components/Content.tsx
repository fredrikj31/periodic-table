import { Button } from "@shadcn-ui/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@shadcn-ui/components/ui/card";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ChemicalElement } from "src/types/ChemicalElement";
import { MarkdownComponents } from "../helpers/MarkdownComponents";

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
      <CardContent className="leading-relaxed">
        <Markdown remarkPlugins={[remarkGfm]} components={MarkdownComponents}>
          {content}
        </Markdown>
      </CardContent>
      <CardFooter className="mt-auto">
        <Button className="cursor-pointer" variant={"secondary"}>
          Share
        </Button>
      </CardFooter>
    </Card>
  );
};
