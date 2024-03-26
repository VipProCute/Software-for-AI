# from bson import ObjectId
# from beanie import Document, PydanticObjectId
# from pydantic import BaseModel, Field
# from typing import List, Optional
# from Model.bookModel import BookInLib
#
#
# class Library(Document):
#     name: str = Field(...)
#     address: str = Field(...)
#     listBook: list[BookInLib] = Field(...)
#     avatarImageUrl: Optional[str] = Field(...)
#     description: str = Field(...)
#
#     class Config:
#         schema_extra = {
#             "example": {
#                 "name": "NP Lib",
#                 "address": "123, NP street, HCM City, VietNam",
#                 "listBook": [],
#                 "avatarImageUrl": "http://example.com",
#                 "description": "This library is good"
#             }
#         }
#
# class LibraryUpdate(BaseModel):
#     name: str = Field(...)
#     address: str = Field(...)
#     listBook: list[BookInLib] = Field(...)
#     avatarImageUrl: Optional[str] = Field(...)
#     description: str = Field(...)
#
#     class Config:
#         schema_extra = {
#             "example": {
#                 "name": "NP Lib",
#                 "address": "123, NP street, HCM City, VietNam",
#                 "listBook": [],
#                 "avatarImageUrl": "http://example.com",
#                 "description": "This library is good"
#             }
#         }