const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-5 bg-surface-a10">
      <p>Matthew&apos;s Dashboard</p>
      <ul className="flex items-center justify-center gap-3">
        <li>Add a Book</li>
        <li>Look at library</li>
      </ul>
    </div>
  );
};

export default Navbar;
