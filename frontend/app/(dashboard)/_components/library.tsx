import Book from "./book";

const Library = () => {
  return (
    <div className="flex flex-col items-center justify-center m-10 border-2 border-surface-a10 rounded-2xl ">
      <p className="text-primary-a50 text-2xl font-bold uppercase border-b-2 border-primary-a50 w-full text-center py-3">
        Matthew&apos;s Library
      </p>
      <div className="grid grid-cols-2 grid-flow-row place-items-center gap-10 lg:p-10 py-10 ">
        <Book />
      </div>
    </div>
  );
};

export default Library;
