import { Toaster } from "@/components/ui/sonner";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="text-light-a0 bg-surface-a0">
      <main>{children}</main>
      <Toaster />
    </div>
  );
}
