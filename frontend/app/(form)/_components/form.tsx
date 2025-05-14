"use client";

import {Button} from "@/components/ui/button";
import {FormEvent, useState} from "react";
import {toast} from "sonner";
import {useRouter} from "next/navigation";
import {Switch} from "@/components/ui/switch";

const Form = () => {
    const [multipleBooks, toggleMultipleBooks] = useState(false)
    const router = useRouter();

    const handleToggle = () => {
        if (multipleBooks) toggleMultipleBooks(false);
        else toggleMultipleBooks(true);
    }

    async function submit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const data = {
            title: formData.get("title"),
            author: formData.get("author"),
        };

        const response = await fetch("http://localhost:8080/library/book/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error("Failed to submit the data. Please try again.");
        } else {
            toast(`${data.title} is added!`);
            if (!multipleBooks) {
                router.push("/dashboard");
            }
        }
        console.log(response);
    }

    return (
        <div>
            <form
                onSubmit={submit}
                className="flex flex-col items-center justify-center p-5 border-2 border-surface-a10 rounded-2xl">
                <p className="mb-5 text-2xl font-bold">Add a book to your library</p>
                <div className="flex items-center space-x-2 m-5">
                    <Switch onClick={handleToggle}/>
                    <label>Add Multiple Books</label>
                </div>
                <fieldset className="flex flex-col items-center justify-center">
                    <label>Book Title</label>
                    <input
                        className="my-4 p-2 border-2 border-surface-a10 rounded-md"
                        type="text"
                        required
                        name="title"
                    />
                    <label>Book Author</label>
                    <input
                        className="my-4 p-2 border-2 border-surface-a10 rounded-md"
                        type="text"
                        required
                        name="author"
                    />
                    <Button variant="secondary" className="cursor-pointer mt-5">
                        Upload Optional Image Cover
                    </Button>
                    <Button
                        variant="secondary"
                        className="mt-10 cursor-pointer bg-green-600">
                        Add your book
                    </Button>
                </fieldset>
            </form>
        </div>
    );
};

export default Form;
