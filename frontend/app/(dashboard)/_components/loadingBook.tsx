import { Ellipsis } from "lucide-react";

const LoadingBook = () => {
  return (
    <div
      className="bg-surface-a10 w-[60%] sm:w-[50%] md:w-[80%]  rounded overflow-hidden p-3 h-fit
          border-2 border-transparent"
    >
      <span className="flex animate-pulse justify-end mb-2 cursor-pointer">
        <Ellipsis />
      </span>
      <div className="flex flex-col justify-center items-center animate-pulse ">
        <div className="h-60 w-40 bg-surface-a20 col-span-1 mb-2"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 w-40 rounded bg-gray-200"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-1 gap-4">
              <div className="col-span-2 h-2 rounded bg-gray-200"></div>
              <div className="col-span-1 h-2 rounded bg-gray-200"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingBook;
