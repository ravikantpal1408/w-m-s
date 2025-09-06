from fastapi import FastAPI
from app.db.session import lifespan_context
from app.routers import user_router

app = FastAPI(title="FastAPI Repo Pattern (Async)", lifespan=lifespan_context)

app.include_router(user_router.router)