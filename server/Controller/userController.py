from fastapi import HTTPException, Query
from typing import Any, List, Optional
from Database.connection import Database
from beanie import init_beanie, PydanticObjectId
from Model.userModel import User
from Model.userModel import UserUpdate

from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
user_database = Database(User)

class UserController:
    @staticmethod
    async def register(user: User) -> dict:
        #existing_user = await user_database.get_all({"username": user.username})
        #if existing_user:
        #    raise HTTPException(status_code=400, detail="Username already registered")
        
        hashed_password = pwd_context.hash(user.password)
        
        new_user = User(
            username=user.username,
            password=hashed_password,
            dateOfBirth=user.dateOfBirth,
            role=user.role,
            listOfLib=user.listOfLib,
            address=user.address,
            email=user.email,
            status=True,
            avatarUrl=user.avatarUrl   
        )
        await user_database.create(new_user)
        return{"message": "User register successfully"}

    @staticmethod
    async def update_user(body: UserUpdate, id: PydanticObjectId) -> User:
        user = await user_database.get_one(id)
        if not user:
            raise HTTPException(status_code=404,detail= "Can't Update User")
            
        user = await user_database.update(id=id, body=body)

        return user

    @staticmethod
    async def get_user(id: PydanticObjectId) -> User:
        user = await user_database.get_one(id)
        if not user:
            raise HTTPException(status_code=404, detail="User not found")
        return user
    
    @staticmethod
    async def get_all_user(
        limit: Optional[int] = 10,
        page: Optional[int] = 1,
        sort_by: Optional[str] = "username",
        role: Optional[str] = None) -> List[User]:
        query = {}

        if role is not None:
            query.update({"role": role})
        user = await user_database.get_all(limit=limit, page=page, sort_by=sort_by, query=query)
        
        return user

    @staticmethod
    async def delete_user(id: PydanticObjectId) -> dict:
        is_delete = await user_database.delete(id)
        if not is_delete:
            raise HTTPException(status_code=404, detail="User not found")
        return {"message": "User is deleted successfully"}
