from fastapi import HTTPException, Query
from typing import Any, List, Optional
from Database.connection import Database
from beanie import init_beanie, PydanticObjectId
from Model.reviewModel import *

bookreview_database = Database(BookReview)

class ReviewController:
    @staticmethod
    async def create_review(BookReview: BookReview) -> dict:
        await bookreview_database.create(BookReview)
        return {"message": "Review create successfully"}

    @staticmethod
    async def update_review(BookReview: BookReviewUpdate, id = PydanticObjectId) -> BookReview:
        review = await bookreview_database.update(body= BookReview, id=id)
        if not BookReview:
            raise HTTPException(status_code=404, detail="Review not found")
        return review

    @staticmethod 
    async def get_review(id: PydanticObjectId) -> BookReview:
        bookreview = await bookreview_database.get_one(id)
        if not BookReview:
            raise HTTPException(status_code=404, detail="Review Not Found")
        return bookreview

    @staticmethod
    async def get_reviews(
            limit: Optional[int] = 10,
            page: Optional[int] = 1,
            sort_by: Optional[str] = "reviewDate",
            bookID: Optional[str] = "bookID",
            rating: Optional[int] = 5,
    ) -> List[BookReview]:
        query = {}
        if bookID is not None:
            query.update({"bookID": bookID})
    
        reviews = await bookreview_database.get_all(limit = limit, page = page,sort_by = sort_by,bookID = bookID, rating=rating)
        return reviews

    @staticmethod
    async def delete_review(id = PydanticObjectId) -> dict:
        is_delete = await bookreview_database.delete(id)
        if not is_delete:
            raise HTTPException(status_code=500, detail="Review Not Found")
        return {"message": "Review delete successfully"}