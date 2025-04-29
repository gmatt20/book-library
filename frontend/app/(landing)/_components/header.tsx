import Link from "next/link";

const Header = () => {
  return (
    <div className="h-full w-full flex items-center justify-center flex-col">
      <p>Welcome to Book Libary!</p>
      <Link href="/dashboard">Go Add A Book</Link>
    </div>
  );
};

export default Header;
