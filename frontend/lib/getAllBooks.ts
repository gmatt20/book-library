async function getAllBooks() {
    let data;
    try {
        const response = await fetch("http://localhost:8080/library/book/all", {
            method: "GET",
        });

        if (!response.ok) {
            throw new Error("Failed to fetch all books.");
        }
        data = await response.json();
    } catch (error) {
        console.error(error);
    }

    return data;
}

export default getAllBooks;