import Book from "./book";

const Library = () => {
  return (
    <div className="w-full h-full">
      <p>I am a library!</p>
      <div className="grid grid-cols-3 grid-flow-row items-center justify-center">
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
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
