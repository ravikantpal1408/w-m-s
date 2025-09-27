from typing import Any, Coroutine, Sequence
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, update, delete, Row, RowMapping
from app.models import User

class UserRepository:
    def __init__(self, db: AsyncSession):
        self.db = db

    async def list(self) -> Sequence[User]:
        res = await self.db.execute(select(User).order_by(User.id))
        return res.scalars().all()

    async def get(self, user_id: int) -> User | None:
        res = await self.db.execute(select(User).where(User.id == user_id))
        return res.scalars().first()

    async def create(self, name: str, email: str) -> User:
        user = User(name=name, email=email)
        self.db.add(user)
        await self.db.commit()
        await self.db.refresh(user)
        return user

    async def update(self, user_id: int, *, name: str | None, email: str | None) -> User | None:
        stmt = (
            update(User)
            .where(User.id == user_id)
            .values(**{k: v for k, v in {"name": name, "email": email}.items() if v is not None})
            .returning(User)
        )
        res = await self.db.execute(stmt)
        row = res.fetchone()
        if not row:
            return None
        await self.db.commit()
        return row[0]

    async def delete(self, user_id: int) -> bool:
        res = await self.db.execute(delete(User).where(User.id == user_id))
        await self.db.commit()
        return res.rowcount > 0
