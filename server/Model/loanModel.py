#
# from bson import ObjectId
# from beanie import Document, PydanticObjectId
# from pydantic import BaseModel, Field
# from typing import List, Optional
# from Model.bookModel import BookInLib
#
# from datetime import date
#
# class Loan(Document):
#     bookID: PydanticObjectId = Field(...)
#     libID: PydanticObjectId = Field(...)
#     userID: PydanticObjectId = Field(...)
#     loanDate: date = Field(...)
#     returnDate: date = Field(...)
#     status: str = Field(..., enum = ["yes", "no"])
#
#     class Config:
#         schema_extra = {
#             "example": {
#                 "bookID": 12345,
#                 "libID": 12345,
#                 "userID": 12345,
#                 "loanDate": "2020-05-01",
#                 "returnDate": "2022-05-01",
#                 "status": "yes",
#             }
#         }
#
#
#
