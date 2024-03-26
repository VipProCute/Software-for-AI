from bson import ObjectId
from beanie import Document, PydanticObjectId
from pydantic import BaseModel, Field
from typing import List, Optional
from pydantic.functional_validators import BeforeValidator

from typing_extensions import Annotated

PyObjectId = Annotated[str, BeforeValidator(str)]

class Book(Document):
    title: str = Field(...)
    author: List[str] = Field(...)
    genres: Optional[List[str]] = Field(...)
    description: str = Field(...)
    language: str = Field(...)
    numPages : int = Field(...)
    imageUrl: str = Field(...)
    publisher: str = Field(...)
    publishDate: str = Field(...)
    series: Optional[list[str]] = Field(...)
    totalLoan: int = Field(...)
    class Config:
        schema_extra = {
            "example" : {
                "title": "The book",
                "author": ["Vu Minh Thu", "Nguyen Phuong"],
                "description": "This book is delicious",
                "language": "en",
                "numPages": 255,
                "imageUrl": "https:example.com",
                "publisher": "NXB NP",
                "publishDate": "02-03-2003",
                "totalLoan": 10
            }
        }


class BookUpdate(BaseModel):
    title: str = Field(...)
    author: List[str] = Field(...)
    genres: Optional[List[str]] = Field(...)
    description: str = Field(...)
    language: str = Field(...)
    numPages: int = Field(...)
    imageUrl: str = Field(...)
    publisher: str = Field(...)
    publishDate: str = Field(...)
    series: Optional[list[str]] = Field(...)
    totalLoan: int = Field(...)
    class Config:
        schema_extra = {
            "example": {
                "title": "The book",
                "author": ["Vu Minh Thu", "Nguyen Phuong"],
                "description": "This book is delicious",
                "language": "en",
                "numPages": 255,
                "imageUrl": "https:example.com",
                "publisher": "NXB NP",
                "publishDate": "02-03-2003",
                "totalLoan": 10
            }
        }


class BookInLib(Document):
    realID: PydanticObjectId = Field(...)
    totalNum: int = Field(...)
    currentNum: int = Field(...)

    class Config:
        schema_extra = {
            "example": {
                "realID": "65ff949550eba541c59a9cb4",
                "totalNum": 10,
                "currentNum": 5
            }
        }

class BookInLibUpdate(BaseModel):
    realID: PydanticObjectId = Field(...)
    totalNum: int = Field(...)
    currentNum: int = Field(...)
    class Config:
        schema_extra = {
            "example": {
                "realID": "65ff949550eba541c59a9cb4",
                "totalNum": 10,
                "currentNum": 5
            }
        }

