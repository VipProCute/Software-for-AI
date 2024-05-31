from fastapi import APIRouter, HTTPException, Query
from typing import List, Optional
from Model.userModel import User, UserUpdate
from Controller.userController import UserController
from beanie import PydanticObjectId

userRoute = APIRouter(
    tags= ["User"]
)

@userRoute.get("", response_model=List[User])
async def get_all_users(
        limit: Optional[int] = 10,
        page: Optional[int] = 1,
        sort_by: Optional[str] = "username",
        role: Optional[str] = Query(None, alias="role"),
) -> List[User]:
    list_user = await UserController.get_all_user(limit=limit, page=page, sort_by=sort_by,
                                               role= role)
    return list_user

@userRoute.get("/{id}", response_model=User)
async def get_user_by_id(id) -> User:
    user = await UserController.get_user(id)
    return user

@userRoute.post("/register") 
async def register(body: User) -> dict:
    try:
        new_user = await UserController.register(body)
        return new_user
    except HTTPException as e:
        raise e
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@userRoute.put("/{id}", response_model=User)
async def update_user(id: PydanticObjectId, body: UserUpdate) -> User:
    try:
        user = await UserController.update_user(id= id, body= body)
        return user
    except HTTPException as e:
        raise e
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@userRoute.delete("/{id}", response_model=dict)
async def delete_user(id:PydanticObjectId) -> dict:
    user = await UserController.delete_user(id)
    return user