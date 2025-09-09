from fastapi import FastAPI
from app.db.session import lifespan_context
from fastapi.middleware.cors import CORSMiddleware   # ✅ import this
from app.routers import user_router

app = FastAPI(title="FastAPI Repo Pattern (Async)", lifespan=lifespan_context)
# ✅ Configure allowed origins
origins = [
    "http://localhost:3000",  # React dev server
    "http://127.0.0.1:3000",  # Sometimes React runs on 127.0.0.1
    # You can add production domains here later
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,          # Which origins can talk to FastAPI
    allow_credentials=True,
    allow_methods=["*"],            # Allow all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],            # Allow all headers
)

app.include_router(user_router.router)