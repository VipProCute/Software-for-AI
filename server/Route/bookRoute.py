from fastapi import APIRouter, HTTPException
from typing import List
from Model.bookModel import Book, BookUpdate
from Controller.bookController import BookController
from beanie import PydanticObjectId
bookRoute = APIRouter(
    tags= ["Book"]
)

@bookRoute.get("/", response_model=List[Book])
async def get_all_books() -> List[Book]:
    list_book = await BookController.get_all_books()
    return list_book

@bookRoute.get("/{id}", response_model=Book)
async def get_book_by_id(id) -> Book:
    book = await BookController.get_book_by_id(id)
    return book

@bookRoute.post("/new")
async def create_book(body:Book) -> dict:
    book = await BookController.create_book(body)
    return book

@bookRoute.put("/{id}", response_model=Book)
async def update_book(body:BookUpdate, id: PydanticObjectId) -> Book:
    book = await BookController.update_book(body, id)
    return book

@bookRoute.delete("/{id}", response_model=dict)
async def delete_book(id: PydanticObjectId) -> dict:
    doc = await BookController.get_book_by_id(id)
    if not doc:
        raise HTTPException(status_code=404)
    is_delete = await BookController.delete_book(id)
    return is_delete
