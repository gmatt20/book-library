import { Button } from "@/components/ui/button";

const Form = () => {
  return (
    <>
      <form className="flex flex-col items-center justify-center m-5 p-5 border-2 border-surface-a10 rounded-2xl">
        <p className="mb-5">Add a book to your library</p>
        <fieldset className="flex flex-col items-center justify-center">
          <label>Book Title:</label>
          <input
            className="my-4 p-2 border-2 border-surface-a10 rounded-md"
            type="text"
            required
            name="title"
          />
          <label>Book Author:</label>
          <input
            className="my-4 p-2 border-2 border-surface-a10 rounded-md"
            type="text"
            required
            name="author"
          />
          <Button variant="secondary" className="cursor-pointer">
            Upload Optional Image Cover
          </Button>
          <Button variant="secondary" className="mt-10 cursor-pointer bg-green-600">
            Add your book
          </Button>
        </fieldset>
      </form>
    </>
  );
};

export default Form;
