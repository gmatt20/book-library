import Link from "next/link";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <div className="h-full w-full flex items-center justify-center flex-col gap-5">
      <p>Welcome to Book Libary!</p>
      <Link href="/dashboard">
        <Button variant="secondary">Try it out</Button>
      </Link>
    </div>
  );
};

export default Header;
