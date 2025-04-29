import Nav from "./_components/nav";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-surface-a0 text-light-a0">
      <Nav />
      <main>{children}</main>
    </div>
  );
}
