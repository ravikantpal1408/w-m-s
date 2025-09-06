from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.schemas import UserCreate, UserRead
from app.services.user_service import UserService
from models.database import get_db
from typing import List

router = APIRouter(prefix="/users", tags=["Users"])

@router.get("/", response_model=List[UserRead])
def get_users(db: Session = Depends(get_db)):
    service = UserService(db)
    return service.list_users()

@router.get("/{user_id}", response_model=UserRead)
def get_user(user_id: int, db: Session = Depends(get_db)):
    service = UserService(db)
    return service.get_user_by_id(user_id)

@router.post("/", response_model=UserRead)
def create_user(user: UserCreate, db: Session = Depends(get_db)):
    service = UserService(db)
    return service.create_user(user)
