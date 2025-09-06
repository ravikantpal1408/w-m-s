from sqlalchemy.orm import Session
from app import models, schemas

class UserRepository:
    def __init__(self, db: Session):
        self.db = db

    def get_users(self):
        return self.db.query(models.User).all()

    def get_user(self, user_id: int):
        return self.db.query(models.User).filter(models.User.id == user_id).first()

    def create_user(self, user: schemas.UserCreate):
        db_user = models.User(name=user.name, email=user.email)
        self.db.add(db_user)
        self.db.commit()
        self.db.refresh(db_user)
        return db_user
