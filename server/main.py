from fastapi import FastAPI
from Route.bookRoute import bookRoute
from Route.libraryRoute import libraryRoute
from Route.bookLibraryRoute import bookLibraryRoute
from Database.connection import Settings
import uvicorn
from fastapi.responses import RedirectResponse
app = FastAPI()

settings = Settings()

app.include_router(bookRoute, prefix="/book")
app.include_router(libraryRoute, prefix="/library")
app.include_router(bookLibraryRoute, prefix="/bookLib")


@app.on_event("startup")
async def init_db():
    await settings.initialize_database()


if __name__ == '__main__':
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)