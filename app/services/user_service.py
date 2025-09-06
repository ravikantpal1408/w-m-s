from sqlalchemy.ext.asyncio import AsyncSession
from app.repositories.user_repo import UserRepository
from app.schemas import UserCreate, UserUpdate

class UserService:
    def __init__(self, db: AsyncSession):
        self.repo = UserRepository(db)

    async def list(self):
        return await self.repo.list()

    async def get(self, user_id: int):
        return await self.repo.get(user_id)

    async def create(self, payload: UserCreate):
        return await self.repo.create(name=payload.name, email=payload.email)

    async def update(self, user_id: int, payload: UserUpdate):
        return await self.repo.update(user_id, name=payload.name, email=payload.email)

    async def delete(self, user_id: int):
        return await self.repo.delete(user_id)
