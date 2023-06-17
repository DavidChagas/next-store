export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto my-20 px-10">
      <div className="mb-10 text-lg font-bold">Dashboard</div>
      <div>{children}</div>
    </div>
  );
}
