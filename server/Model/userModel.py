# from bson import ObjectId
# from beanie import Document, PydanticObjectId
# from pydantic import BaseModel, Field
# from typing import List, Optional
# from Model.bookModel import BookInLib
# from pydantic.functional_validators import Annotated, BeforeValidator
# import datetime
#

# class User(Document):
#     userName: str = Field(...)
#     password: str = Field(...)
#     dateOfBirth: datetime.date = Field(...)
#     role: str = Field(..., enum = ['admin', 'user', 'library'])
#     listOfLib: Optional[List[PydanticObjectId]] = Field()
#
#     class Config:
#         schema_extra = {
#             "example": {
#                 "userName": "admin1",
#                 "password": "admin1",
#                 "dateOfBirth": "02-03-2003",
#                 "role": "admin",
#                 "listOfLib": []
#             }
#         }
#
# class UserUpdate(BaseModel):
#     userName: str = Field(...)
#     password: str = Field(...)
#     dateOfBirth: datetime.date = Field(...)
#     role: str = Field(..., enum=['admin', 'user', 'library'])
#     listOfLib: Optional[List[PydanticObjectId]] = Field()
#
#     class Config:
#         schema_extra = {
#             "example": {
#                 "userName": "admin1",
#                 "password": "admin1",
#                 "dateOfBirth": "02-03-2003",
#                 "role": "admin",
#                 "listOfLib": []
#             }
#         }