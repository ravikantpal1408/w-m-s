from fastapi import FastAPI
from app.routers import user_router

app = FastAPI(title="FastAPI Repository Pattern Example")

app.include_router(user_router.router)
