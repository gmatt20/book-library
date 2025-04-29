const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-5">
      <p>I am a navbar!</p>
      <ul className="flex items-center justify-center gap-3">
        <li>Add a Book</li>
        <li>Look at library</li>
      </ul>
    </div>
  );
};

export default Navbar;
