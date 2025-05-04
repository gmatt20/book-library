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
  };

  return (
    <div className="flex items-center justify-between p-5 border-b-2 border-surface-a10">
      <p className="text-primary-a50 text-3xl font-bold uppercase">
        Books Central
      </p>
      <ul className="flex items-center justify-center gap-3">
        <Button
          variant="destructive"
          className="text-lg font-bold uppercase"
          onClick={handleClear}>
          Clear Library
        </Button>
        <Link
          className="text-primary-a50 text-lg font-bold uppercase"
          href="/add">
          <Button className="text-lg font-bold uppercase">Add a Book</Button>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
