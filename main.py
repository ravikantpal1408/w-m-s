from fastapi import FastAPI
from app.api import user_controller

app = FastAPI()

app.include_router(user_controller.router, prefix="/api", tags=["users"])
