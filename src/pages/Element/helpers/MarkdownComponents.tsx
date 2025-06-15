import type { ExtraProps } from "react-markdown";
import type { ComponentProps, ElementType } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@shadcn-ui/components/ui/table";

type Components = {
  [Key in Extract<ElementType, string>]?: ElementType<
    ComponentProps<Key> & ExtraProps
  >;
};

export const MarkdownComponents: Components = {
  h1: ({ children }) => {
    return <h1 className="text-5xl">{children}</h1>;
  },
  h2: ({ children }) => {
    return <h1 className="text-4xl">{children}</h1>;
  },
  h3: ({ children }) => {
    return <h1 className="text-3xl">{children}</h1>;
  },
  h4: ({ children }) => {
    return <h1 className="text-2xl">{children}</h1>;
  },
  h5: ({ children }) => {
    return <h1 className="text-xl">{children}</h1>;
  },
  h6: ({ children }) => {
    return <h1 className="text-lg">{children}</h1>;
  },
  p: ({ children }) => {
    return <p className="text-base">{children}</p>;
  },
  table: ({ children }) => {
    return <Table>{children}</Table>;
  },
  thead: ({ children }) => {
    return <TableHeader>{children}</TableHeader>;
  },
  tbody: ({ children }) => {
    return <TableBody>{children}</TableBody>;
  },
  th: ({ children }) => {
    return <TableHead>{children}</TableHead>;
  },
  tr: ({ children }) => {
    return <TableRow>{children}</TableRow>;
  },
  td: ({ children }) => {
    return <TableCell>{children}</TableCell>;
  },
  a: ({ children, href }) => {
    return (
      <a
        className="text-blue-600 hover:text-blue-500"
        target="_blank"
        href={href}
      >
        {children}
      </a>
    );
  },
  ul: ({ children }) => {
    return <ul className="list-disc list-inside">{children}</ul>;
  },
  ol: ({ children }) => {
    return <ol className="list-decimal list-inside">{children}</ol>;
  },
  blockquote: ({ children }) => {
    return (
      <blockquote className="border-4 rounded-l-xs pl-1 border-zinc-500 dark:border-neutral-500 border-y-0 border-r-0">
        {children}
      </blockquote>
    );
  },
};
