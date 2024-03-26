from fastapi import FastAPI
from Route.bookRoute import bookRoute
from Database.connection import Settings
import uvicorn
from fastapi.responses import RedirectResponse
app = FastAPI()

settings = Settings()

app.include_router(bookRoute, prefix="/book")



@app.on_event("startup")
async def init_db():
    await settings.initialize_database()

@app.get("/")
async def home():
    return RedirectResponse(url="/book")

if __name__ == '__main__':
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)