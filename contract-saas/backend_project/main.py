from fastapi import FastAPI, Depends, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import jwt

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

SECRET = "secretkey"

class User(BaseModel):
    email: str
    password: str

@app.post("/api/auth/login")
def login(user: User):
    if user.email == "test@test.com" and user.password == "password":
        token = jwt.encode({"email": user.email}, SECRET, algorithm="HS256")
        return {"token": token}
    raise HTTPException(status_code=401, detail="Invalid credentials")

@app.post("/api/contracts/upload")
def upload_contract(file: UploadFile = File(...)):
    return {"filename": file.filename}

@app.get("/api/contracts")
def get_contracts():
    return [
        {"id": 1, "name": "Contract A", "parties": "Alice & Bob", "expiry": "2025-12-31", "status": "Active", "risk": "Low"},
        {"id": 2, "name": "Contract B", "parties": "Charlie & Delta", "expiry": "2024-06-30", "status": "Expired", "risk": "High"}
    ]

class Query(BaseModel):
    question: str

@app.post("/api/query")
def query_contracts(q: Query):
    return {
        "answer": "Mock AI answer for: " + q.question,
        "evidence": ["Clause 1: ...", "Clause 5: ..."]
    }