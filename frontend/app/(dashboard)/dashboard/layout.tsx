import Navbar from "../_components/navbar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="text-light-a0 bg-surface-a0">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
