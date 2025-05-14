import Book from "./book";

const Library = () => {
    return (
        <div
            className="flex flex-col items-center justify-center md:my-10 md:border-2 md:border-surface-a10 rounded-2xl w-[100%]">
            <p className="text-primary-a50 text-xl md:text-2xl font-bold uppercase border-b-2 border-primary-a50 w-full text-center py-3">
                Matthew&apos;s Library
            </p>
            <div
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-10 grid-flow-row place-items-center w-full p-5 lg:p-10 m-0">
                <Book/>
            </div>
        </div>
    );
};

export default Library;
