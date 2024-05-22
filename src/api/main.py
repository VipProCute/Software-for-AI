from fastapi import FastAPI
from src.api.Route.bookRoute import bookRoute
from src.api.Route.libraryRoute import libraryRoute
from src.api.Database.connection import Settings
import uvicorn
from fastapi.responses import RedirectResponse

app = FastAPI()

settings = Settings()

app.include_router(bookRoute, prefix="/books")
app.include_router(libraryRoute, prefix="/libraries")

@app.on_event("startup")
async def init_db():
    await settings.initialize_database()

if __name__ == '__main__':
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)