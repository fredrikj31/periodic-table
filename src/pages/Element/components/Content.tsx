export const Content = ({ content }: { content: string }) => {
  return (
    <div className="prose prose-slate max-w-none">
      <div className="text-gray-700 leading-relaxed">{content}</div>
    </div>
  );
};
