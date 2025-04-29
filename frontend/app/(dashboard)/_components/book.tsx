"use client";
import { useState } from "react";

const Book = () => {
  const [isPopup, setPopup] = useState(false);
  const handlePopup = () => {
    console.log("entered");
    if (isPopup) {
      setPopup(false);
    } else {
      setPopup(true);
    }
  };

  return (
    <>
      <div
        onClick={handlePopup}
        className="bg-surface-a10 w-fit p-5 flex flex-col items-center justify-center gap-2 m-5 rounded-xl cursor-pointer">
        <div className="h-60 w-40 bg-surface-a20"></div>
        <p>Title</p>
        <p>Author</p>
      </div>
      {isPopup && (
        <div
          onClick={handlePopup}
          className="fixed bg-surface-a0 inset-0 flex items-center justify-center z-50">
          <div>
            <div className="bg-surface-a10 w-fit p-5 flex flex-col items-center justify-center gap-2 m-5 rounded-xl cursor-pointer">
              <div className="h-60 w-40 bg-surface-a20"></div>
              <p>Title</p>
              <p>Author</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Book;
