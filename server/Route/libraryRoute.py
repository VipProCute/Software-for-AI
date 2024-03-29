from Controller.libraryController import library_database
from fastapi import APIRouter
from typing import List, Optional

from Model.bookModel import Book
from Model.libraryModel import Library
from Controller.libraryController import LibraryController
from beanie import PydanticObjectId
from Controller.libraryController import library_database


libraryRoute =APIRouter(tags=["Library"])

@libraryRoute.get("/", response_model=List[Library])
async def get_all_books(
        limit: Optional[int] = 10,
        page: Optional[int] = 1,
        sort_by: Optional[str] = "_id",
        #name: Optional[str] = None
        slug: Optional[str] = "",
) -> List[Library]:
    list_book = await LibraryController.get_libraries(limit=limit, page=page, sort_by=sort_by, slug= slug)
    return list_book

@libraryRoute.get("/{id}", response_model=Library)
async def get_library(id: PydanticObjectId) -> Library:
    library = await LibraryController.get_library(id)
    return library

@libraryRoute.post("/new", response_model=dict)
async def create_library(body: Library) -> dict:
    library = await LibraryController.create_library(body=body)
    return library

@libraryRoute.put("/{id}", response_model=Library)
async def update_library(id: PydanticObjectId, body:Library) -> Library:
    library = await LibraryController.update_library(id=id, body=body)
    return library

@libraryRoute.delete("/{id}", response_model=dict)
async def delete_library(id: PydanticObjectId) -> dict:
    library = await LibraryController.delete_library(id=id)
    return library



