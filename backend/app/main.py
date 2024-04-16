from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["GET"]
)


users = [
    {'id': 1, 'email': 'user1@email.com'},
    {'id': 2, 'email': 'user2@email.com'},
    {'id': 3, 'email': 'user3@email.com'},
]


@app.get("/api/users/", response_model=list[dict])
def get_users() -> list[dict]:
    return users
