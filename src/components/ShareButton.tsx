import { Button } from "@shadcn-ui/components/ui/button";
import { cn } from "@shadcn-ui/lib/utils";
import { useState } from "react";

interface ShareButtonProps {
  link: string;
  text: string;
  copiedText?: string;
  className?: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
}
export const ShareButton = ({
  link,
  text,
  copiedText,
  variant,
  className,
}: ShareButtonProps) => {
  const [copied, setCopied] = useState<boolean>(false);

  const onClick = () => {
    setCopied(true);

    navigator.clipboard.writeText(link);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <Button
      onClick={onClick}
      className={cn("cursor-pointer", className)}
      variant={variant}
    >
      {copied && copiedText ? copiedText : text}
    </Button>
  );
};
