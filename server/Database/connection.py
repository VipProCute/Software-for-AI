from fastapi import HTTPException

from motor.motor_asyncio import AsyncIOMotorClient
from beanie import init_beanie, PydanticObjectId
from Model.bookModel import Book
# from Model.userModel import User
# from Model.loanModel import Loan
# from Model.libraryModel import Library
from typing import Optional, List, Any
from pydantic import BaseModel
from pydantic_settings import BaseSettings
class Settings(BaseSettings):
    db_url: Optional[str] = 'mongodb://localhost:27017'

    async def initialize_database(self) -> None:
        client = AsyncIOMotorClient("localhost", 27017)
        await init_beanie(database= client.get_default_database("BooksManagement"),
                          document_models=[Book])


class Database:
    def __init__(self, model):
        self.model = model

    async def get_all(self) -> List[Any]:
        print("In database")
        docs = await self.model.find_all().to_list()
        return docs

    async def get_by_id(self, id: PydanticObjectId) -> bool:
        doc = await self.model.get(id)
        if doc:
            return doc
        return False

    async def create(self, document) -> None:
        await self.model.insert_one(document)

    async def update(self, id: PydanticObjectId, body) -> Any:
        body_dict = dict(body)
        body_dict = {k: v for k, v in body_dict.items() if v is not None}
        update_query = {"$set": {
            field: value for (field, value) in body_dict.items()
        }}
        doc = await self.model.get(id)
        if not doc:
            return False
        await doc.update(update_query)
        return doc


    async def delete(self, id: PydanticObjectId) -> bool:
        doc = await self.model.get(id)
        if not doc:
            return False
        await doc.delete()
        return True



