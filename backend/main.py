from fastapi import FastAPI

app = FastAPI()


@app.get("/Health")
async def  health_check():
    return {"status" : "healthu"}