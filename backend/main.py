from fastapi import FastAPI

app = FastAPI()


@app.get("/health")
async def  health_check():
    return {"status" : "healthy"}


@app.post("/scan")
async def scan():
    return {
        
        "diagnosis" : 'Healthy', 
        "confidence" : 0.93
        
    }