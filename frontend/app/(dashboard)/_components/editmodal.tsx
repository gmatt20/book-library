"use client";

import { Button } from "@/components/ui/button";
import { FormEvent } from "react";
import { X } from "lucide-react";

type Props = {
  bookId: number;
  bookTitle: string;
  bookAuthor: string;
  onClose: () => void;
};

const EditModal = ({ bookId, bookTitle, bookAuthor, onClose }: Props) => {
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = {
      title: formData.get("title"),
      author: formData.get("author"),
    };

    const response = await fetch(
      `http://localhost:8080/library/book/${bookId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to submit the data. Please try again.");
    }
    // else {
    //   toast(`${data.title} is added!`);
    //   setTimeout(() => {
    //     router.push("/dashboard");
    //   }, 1000);
    // }
    console.log(response);
  }

  return (
    <div className="fixed top-48 bg-surface-a0 h-[60%] w-[60%]">
      <X onClick={onClose} />
      <form
        onSubmit={submit}
        className=" flex flex-col items-center justify-center p-5 rounded-2xl">
        <p className="mb-5 text-2xl font-bold">Edit {bookTitle}</p>
        <fieldset className="flex flex-col items-center justify-center">
          <label>Book Title</label>
          <input
            className="my-4 p-2 border-2 border-surface-a10 rounded-md"
            type="text"
            required
            name="title"
            defaultValue={bookTitle}
          />
          <label>Book Author</label>
          <input
            className="my-4 p-2 border-2 border-surface-a10 rounded-md"
            type="text"
            required
            name="author"
            defaultValue={bookAuthor}
          />
          <Button variant="secondary" className="cursor-pointer mt-5">
            Upload Optional Image Cover
          </Button>
          <Button
            onClick={onClose}
            variant="secondary"
            className="mt-10 cursor-pointer bg-green-600">
            Save changes
          </Button>
        </fieldset>
      </form>
    </div>
  );
};

export default EditModal;
