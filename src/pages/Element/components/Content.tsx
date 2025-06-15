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
import { ShareButton } from "../../../components/ShareButton";

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
        <ShareButton
          variant="secondary"
          text="Share"
          copiedText="Copied!"
          link={window.document.location.href}
        />
      </CardFooter>
    </Card>
  );
};
