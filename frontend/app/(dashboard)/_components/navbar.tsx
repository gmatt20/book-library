"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { clearLibrary } from "@/lib/clearLibrary";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  const handleClear = async () => {
    await clearLibrary();
    router.refresh();
  }

  return (
    <div className="flex items-center justify-between p-5 border-b-2 border-surface-a10">
      <p>Matthew&apos;s Dashboard</p>
      <ul className="flex items-center justify-center gap-3">
        <Button variant="destructive" onClick={handleClear}>Clear Library</Button>
        <Link href="/add">Add a Book</Link>
        <Link href="/library">Look at library</Link>
      </ul>
    </div>
  );
};

export default Navbar;
