from sqlalchemy.orm import Session
from app.repositories.user_repository import UserRepository
from app import schemas

class UserService:
    def __init__(self, db: Session):
        self.repository = UserRepository(db)

    def list_users(self):
        return self.repository.get_users()

    def get_user_by_id(self, user_id: int):
        return self.repository.get_user(user_id)

    def create_user(self, user: schemas.UserCreate):
        return self.repository.create_user(user)
