from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="TUGIT API", description="TUGIT Prototype Backend", version="1.0.0")

# Set up CORS for React frontend (default vite port is 5173)
origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "TUGIT API is running"}

from pydantic import BaseModel
class LogMsg(BaseModel):
    message: str
    
@app.post("/log")
def log_front(msg: LogMsg):
    print(f"FRONTEND LOG: {msg.message}")
    return {"ok": True}
