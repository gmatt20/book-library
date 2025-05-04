import Book from "./book";

const Library = () => {
  return (
    <div className="flex flex-col items-center justify-center m-5 p-5 border-2 border-surface-a10 rounded-2xl">
      <p className="text-primary-a50 text-3xl font-bold uppercase">
        Matthew&apos;s Library
      </p>
      <div className="grid grid-cols-2 grid-flow-row place-items-center gap-10 lg:p-10 py-10">
        <Book />
      </div>
    </div>
  );
};

export default Library;
