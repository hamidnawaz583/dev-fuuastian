
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from passlib.context import CryptContext

from database import engine, SessionLocal
import models


# Create database tables
models.Base.metadata.create_all(bind=engine)


# Create FastAPI app
app = FastAPI()


# Allow frontend to connect
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Password hashing
pwd_context = CryptContext(
    schemes=["bcrypt"],
    deprecated="auto"
)


# =========================
# Signup Data
# =========================

class SignupData(BaseModel):
    name: str
    email: str
    password: str


# =========================
# Login Data
# =========================

class LoginData(BaseModel):
    email: str
    password: str


# =========================
# Home
# =========================

@app.get("/")
def home():
    return {
        "message": "DEV FUUAST Backend is running!"
    }


# =========================
# Signup
# =========================

@app.post("/signup")
def signup(user: SignupData):

    db = SessionLocal()

    existing_user = db.query(models.User).filter(
        models.User.email == user.email
    ).first()

    if existing_user:
        db.close()

        raise HTTPException(
            status_code=400,
            detail="Email already registered"
        )

    hashed_password = pwd_context.hash(user.password)

    new_user = models.User(
        name=user.name,
        email=user.email,
        password=hashed_password
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    db.close()

    return {
        "message": "Account created successfully"
    }


# =========================
# Login
# =========================

@app.post("/login")
def login(user: LoginData):

    db = SessionLocal()

    existing_user = db.query(models.User).filter(
        models.User.email == user.email
    ).first()

    if not existing_user:
        db.close()

        raise HTTPException(
            status_code=401,
            detail="Invalid email or password"
        )

    if not pwd_context.verify(
        user.password,
        existing_user.password
    ):
        db.close()

        raise HTTPException(
            status_code=401,
            detail="Invalid email or password"
        )

    db.close()

    return {
        "message": "Login successful",
        "name": existing_user.name
    }
