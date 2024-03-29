from bson import ObjectId
from beanie import Document, PydanticObjectId
from pydantic import BaseModel, Field
from typing import List, Optional



class Library(Document):
    name: str = Field(...)
    address: str = Field(...)
    avatarImageUrl: Optional[str] = Field(...)
    description: str = Field(...)
    slug: str = Field(...)

    class Config:
        schema_extra = {
            "example": {
                "name": "NP Lib",
                "slug": "np-lib",
                "address": "123, NP street, HCM City, VietNam",
                "avatarImageUrl": "http://example.com",
                "description": "This library is good"
            }
        }


class LibraryUpdate(BaseModel):
    name: str = Field(...)
    address: str = Field(...)
    avatarImageUrl: Optional[str] = Field(...)
    description: str = Field(...)
    slug: str = Field(...)
    class Config:
        schema_extra = {
            "example": {
                "name": "NP Lib",
                "slug": "np-lib",
                "address": "123, NP street, HCM City, VietNam",
                "avatarImageUrl": "http://example.com",
                "description": "This library is good"
            }
        }