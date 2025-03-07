from fastapi import FastAPI
from pydantic import BaseModel
import joblib
from typing import List

# Load the trained model
model = joblib.load("best_model.pkl")

app = FastAPI()

# Define the input data structure
class InputData(BaseModel):
    features: List[float]

@app.get("/")
def read_root():
    return {"message": "FastAPI is running!"}

@app.post("/predict")
def predict(data: InputData):
    try:
        prediction = model.predict([data.features])
        return {"prediction": int(prediction[0])}
    except Exception as e:
        return {"error": str(e)}

if __name__ == '__main__':
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=5000)
# from fastapi import FastAPI
# from pydantic import BaseModel
# from typing import List

# app = FastAPI()

# class InputData(BaseModel):
#     features: List[float]

# @app.get("/")
# def read_root():
#     return {"message": "FastAPI is running!"}

# @app.post("/predict")
# def predict(data: InputData):
#     # Mocked response instead of real ML prediction
#     return {"prediction": 1, "message": "Mocked Prediction: High Risk"}

# if __name__ == '__main__':
#     import uvicorn
#     uvicorn.run(app, host="0.0.0.0", port=5000)
