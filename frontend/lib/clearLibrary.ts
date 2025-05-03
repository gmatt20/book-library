export async function clearLibrary(){
  try{
    const response = await fetch("http://localhost:8080/library/book/clear", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if(!response.ok){
      throw new Error("Failed to delete entire library. Please try again.");
    }
  }
  catch(error){
    console.error(error);
  }
}