from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    APP_NAME: str = "FastAPI Repo Pattern (Async)"
    # Default runs with SQLite (async)
    DATABASE_URL: str = "sqlite+aiosqlite:///./app.db"
    ECHO_SQL: bool = True

    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8")

settings = Settings()
