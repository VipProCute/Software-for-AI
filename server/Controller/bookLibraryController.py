from Model.bookLibraryModel import BookLibrary
from Database.connection import Database
from beanie import PydanticObjectId
from Model.bookModel import Book
from Model.libraryModel import Library
from typing import List, Optional

book_lib_database = Database(BookLibrary)

# class BookLibraryController:
#     @staticmethod
#     async def get_books_in_lib(
#             lib_id: PydanticObjectId,
#             limit: Optional[int] = 10,
#             page: Optional[int] = 1,
#             sort_by: Optional[str] = "_id",
#             slug: Optional[str] = "",
#             ) -> List[Book]:
#         pipeline = [
#             {
#                 "$match": {
#                     "libraryID": lib_id
#                 }
#             },
#             {
#                 "$lookup": {
#                     "from": "Library",
#                     "localField": "libraryID",
#                     "foreignField": "_id",
#                     "as": "BookInLib"
#                 }
#             },
#             {
#                 "$unwind": "$BookInLib"
#             },
#             {
#                 "$replaceRoot": {"newRoot": "$BookInLib"}
#             }
#         ]
#
#         list_books_in_lib = book_lib_database.model.aggregate(aggregation_pipeline=pipeline, limit=limit, page=page, sort_by=sort_by)
#         return list_books_in_lib

