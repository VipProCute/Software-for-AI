from fastapi import APIRouter
#from Controller.bookLibraryController import BookLibraryController
from typing import Optional, List
from Model.bookModel import Book
from Model.libraryModel import Library
from beanie import PydanticObjectId

bookLibraryRoute = APIRouter(
    tags=['BookLibrary']
)
#
# @bookLibraryRoute.get('/library/{lib_id}', response_model= List[Book])
# async def get_books_in_lib(lib_id: PydanticObjectId) -> List[Book]:
#     list_books_in_lib = await BookLibraryController.get_books_in_lib(lib_id)
#     return list_books_in_lib