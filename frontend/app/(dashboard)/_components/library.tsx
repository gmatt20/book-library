import Book from "./book";

const Library = () => {
  return (
    <div className="flex flex-col items-center justify-center m-5 p-5 border-2 border-surface-a10 rounded-2xl">
      <p>Matthew&apos;s Library</p>
      <div className="grid grid-cols-3 grid-flow-row">
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
      </div>
    </div>
  );
};

export default Library;
