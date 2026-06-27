from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers.user import router as user_router
from routers.resume import router as resume_router
from database import Base, engine

import models

app = FastAPI()

# Create database tables
Base.metadata.create_all(bind=engine)

# Allow frontend requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(user_router)
app.include_router(resume_router)

@app.get("/")
def home():
    return {"message": "Backend is running 🚀"}