from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.orm import sessionmaker
from contextlib import asynccontextmanager
from app.core.config import settings
from app.models.base import Base  # metadata only

engine = create_async_engine(settings.DATABASE_URL, echo=settings.ECHO_SQL, future=True)

AsyncSessionLocal = sessionmaker(
    bind=engine,
    class_=AsyncSession,
    expire_on_commit=False,
    autoflush=False,
    autocommit=False,
)

async def init_models() -> None:
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

@asynccontextmanager
async def lifespan_context(app):
    # Startup
    await init_models()
    yield
    # (Optional) Shutdown cleanup e.g. await engine.dispose()

# FastAPI dependency
async def get_db():
    async with AsyncSessionLocal() as session:
        yield session
