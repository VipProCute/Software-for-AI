from fastapi import APIRouter, HTTPException, Query
from typing import List, Optional
from Model.reviewModel import *
from Controller.reviewController import *
from beanie import PydanticObjectId

reviewRoute = APIRouter(tags={"BookReview"})

@reviewRoute.get("/{id}", response_model= BookReview)
async def get_review(id: PydanticObjectId) -> BookReview:
    review = await BookController.get_review(id)
    return review

@reviewRoute.get("", response_model=List[BookReview])
async def get_book_review(
    limit: Optional[int]=10,
    page: Optional[int]=1,
    sort_by: Optional[str] = "reviewDate",
    bookID: Optional[str] = "bookID",
    rating: Optional[int] = 5
) -> list[BookReview]:
    list_review = await ReviewController.get_reviews(limit=limit, page=page, sort_by=sort_by,bookID=bookID, rating=rating)
    return list_review

@reviewRoute.post("/new", response_model=dict)
async def create_review(body: BookReview) -> dict:
    review = await ReviewController.create(body)
    return review

@reviewRoute.put("/{id}", response_model=BookReview)
async def update_review(id :PydanticObjectId, body : BookReviewUpdate) -> BookReview:
    review = await ReviewController.update_review(id=id, body=body)
    return review

@reviewRoute.delete("/{id}", response_model=dict)
async def delete_review(id: PydanticObjectId) -> dict:
    review = await ReviewController.delete_book(id)
    return review