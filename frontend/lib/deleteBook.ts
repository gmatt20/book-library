export async function deleteBook(bookId: number){
  try{
    const response = await fetch(`http://localhost:8080/library/book/${bookId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if(!response.ok){
      throw new Error("Failed to delete the data. Please try again.");
    }

    console.log(response.body);
  }
  catch(error){
    console.error(error);
  }
};