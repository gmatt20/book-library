export async function getAllBooks() {
    try {
        const response = await fetch("http://localhost:8080/library/book/all", {
            method: "GET",
        });

        if (!response.ok) {
            throw new Error("Failed to fetch all books.");
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        return null;
    }
}