import Book from "./book";

const Library = () => {
    return (
        <div
            className="flex flex-col items-center justify-center md:m-10 md:border-2 md:border-surface-a10 rounded-2xl">
            <p className="text-primary-a50 text-xl md:text-2xl font-bold uppercase border-b-2 border-primary-a50 w-full text-center py-3">
                Matthew&apos;s Library
            </p>
            <div
                className="grid grid-cols-1 md:grid-cols-2 grid-flow-row place-items-center gap-10 lg:p-10 py-10 w-full">
                <Book/>
            </div>
        </div>
    );
};

export default Library;
