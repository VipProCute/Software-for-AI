from typing import List, Optional

from fastapi import HTTPException


from Database.connection import Database
from Model.bookModel import Book
from  beanie import init_beanie, PydanticObjectId
from Model.bookModel import BookUpdate
book_database = Database(Book)

class BookController:
    @staticmethod
    async def get_all_books(
            limit: Optional[int] = None,
            page: Optional[int] = None,
            sort_by: Optional[str] = None
    ) -> List[Book]:
        list_books = await book_database.get_all(limit=limit, page=page, sort_by=sort_by)
        #list_books = await book_database.get_all(limit=limit, page=page)
        return list_books

    @staticmethod
    async def get_book_by_id(id: PydanticObjectId) -> Book:
        book = await book_database.get_by_id(id)
        if not book:
            raise HTTPException(status_code=404, detail="Book not found")
        return book

    @staticmethod
    async def create_book(book: Book) -> dict:
        await book_database.create(book)
        return {"message": "Book is created successfully"}

    @staticmethod
    async def update_book(book: BookUpdate, id: PydanticObjectId) -> Book:
        book = await book_database.update(body=book, id=id)
        if not book:
            raise HTTPException(status_code=404, detail="Book not found")
        return book

    @staticmethod
    async def delete_book(id: PydanticObjectId) -> dict:
        is_delete = await book_database.delete(id)
        if not is_delete:
            raise HTTPException(status_code=404, detail="Book not found")
        return {"message":"Book is deleted successfully"}
