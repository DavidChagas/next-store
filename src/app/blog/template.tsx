export default function BlogTemplate({
  children
}: {
  children: React.ReactNode;
}) {
  return <div className="container mx-auto my-20 px-10">{children}</div>;
}
