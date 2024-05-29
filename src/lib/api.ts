import { Book } from "@/lib/interface"

const URL = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api`
  : "http://127.0.0.1:8000/api";

export async function GetAllBooks() {
    const get = await fetch(`${URL}/books`, {
        method: 'GET',
    });
    const response = await get.json();
    return response as Book[];
}

export async function GetBookByID(ID: number) {
    const get = await fetch(`${URL}/books/${ID}`, {
        method: 'GET',
    });
    const response = await get.json();
    return response as Book;
}