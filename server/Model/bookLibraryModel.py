from beanie import Document, PydanticObjectId
from pydantic import Field, BaseModel


class BookLibrary(Document):
    bookID: PydanticObjectId = Field(...)
    libraryID: PydanticObjectId = Field(...)
    totalNum: int = Field(...)
    currentNum: int = Field(...)

    class Config:
        schema_extra = {
                "example": {
                    "bookID": "65ff949550eba541c59a9cb4",
                    "libraryID": "65ff949550eba541c59a9cb3",
                    "totalNum": 10,
                    "currentNum": 5
                }
        }


class BookLibraryUpdate(BaseModel):
    bookID: PydanticObjectId = Field(...)
    libraryID: PydanticObjectId = Field(...)
    totalNum: int = Field(...)
    currentNum: int = Field(...)

    class Config:
        schema_extra = {
            "example": {
                "bookID": "65ff949550eba541c59a9cb4",
                "libraryID": "65ff949550eba541c59a9cb3",
                "totalNum": 10,
                "currentNum": 5
            }
        }