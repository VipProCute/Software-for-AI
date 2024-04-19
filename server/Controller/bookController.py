from typing import List, Optional
from fastapi import HTTPException
from Database.connection import Database
from Model.bookModel import Book
from  beanie import init_beanie, PydanticObjectId
from Model.bookModel import BookUpdate

book_database = Database(Book)

class BookController:
    @staticmethod
    async def get_books(
            limit: Optional[int] = 10,
            page: Optional[int] = 1,
            sort_by: Optional[str] = "_id",
            slug: Optional[str] = "",

    ) -> List[Book]:
        books = await book_database.get_all(limit= limit, page= page, sort_by= sort_by, slug= slug)
        #list_books = await book_database.get_all(limit=limit, page=page)
        return books

    # @staticmethod
    # async def get_book(id: Optional[PydanticObjectId] = None, slug: Optional[str] = None) -> Book:
    #     if id is not None:
    #         book = await book_database.get_one(id)
    #     elif slug is not None:
    #         book = await book_database.get_one_by_slug(slug)
    #     else:
    #         raise HTTPException(status_code=400, detail="Either an ID or a slug must be provided")

    #     if not book:
    #         raise HTTPException(status_code=404, detail="Book not found")

    #     return book

    @staticmethod
    async def get_book(slug: Optional[str] = None) -> Book:
        if slug is not None:
            book = await book_database.get_one_by_slug(slug)
        else:
            raise HTTPException(status_code=400, detail="Either an ID or a slug must be provided")

        if not book:
            raise HTTPException(status_code=404, detail="Book not found")

        return book

    @staticmethod
    async def create_book(book: Book) -> dict:
        await book_database.create(book)
        return {"message": "Book is created successfully"}

    @staticmethod
    async def update_book(body: BookUpdate, id: PydanticObjectId) -> Book:
        book = await book_database.update(body=body, id=id)
        if not book:
            raise HTTPException(status_code=404, detail="Book not found")
        return book

    @staticmethod
    async def delete_book(id: PydanticObjectId) -> dict:
        is_delete = await book_database.delete(id)
        if not is_delete:
            raise HTTPException(status_code=404, detail="Book not found")
        return {"message":"Book is deleted successfully"}
