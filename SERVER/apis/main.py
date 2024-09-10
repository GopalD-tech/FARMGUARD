from fastapi import FastAPI, File, UploadFile
import uvicorn
import numpy as np
from io import BytesIO
from PIL import Image
import tensorflow as tf


app = FastAPI()


MODEL = tf.keras.models.load_model(r"../models/final_31_8_24_keras_acc-93_loss-20.keras")
CLASS_NAMES = [
                'Apple___Apple_scab', 
               'Apple___Black_rot', 
               'Apple___Cedar_apple_rust', 
               'Apple___healthy', 
               'Blueberry___healthy', 
               'Cherry_(including_sour)___Powdery_mildew', 
               'Cherry_(including_sour)___healthy', 
               'Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot', 
               'Corn_(maize)___Common_rust_', 
               'Corn_(maize)___Northern_Leaf_Blight', 
               'Corn_(maize)___healthy', 
               'Grape___Black_rot', 
               'Grape___Esca_(Black_Measles)', 
               'Grape___Leaf_blight_(Isariopsis_Leaf_Spot)', 
               'Grape___healthy', 
               'Orange___Haunglongbing_(Citrus_greening)', 
               'Peach___Bacterial_spot', 
               'Peach___healthy', 
               'Pepper,_bell___Bacterial_spot', 
               'Pepper,_bell___healthy', 
               'Potato___Early_blight', 
               'Potato___Late_blight', 
               'Potato___healthy', 
               'Raspberry___healthy', 
               'Soybean___healthy', 
               'Squash___Powdery_mildew', 
               'Strawberry___Leaf_scorch', 
               'Strawberry___healthy', 
               'Tomato___Bacterial_spot', 
               'Tomato___Early_blight', 
               'Tomato___Late_blight', 
               'Tomato___Leaf_Mold', 
               'Tomato___Septoria_leaf_spot', 
               'Tomato___Spider_mites Two-spotted_spider_mite', 
               'Tomato___Target_Spot', 
               'Tomato___Tomato_Yellow_Leaf_Curl_Virus', 
               'Tomato___Tomato_mosaic_virus', 
               'Tomato___healthy'
               ]

# converts the image file into a numpy array.
def read_file_as_image(data) -> np.ndarray:
    image = np.array(Image.open(BytesIO(data)))
    return image

# End points

# Test endpoint to check is the server is running.
@app.get('/ping')
async def ping():
    return "hello server is running"

# Pretict endpoint, takes an image file as input and returns predicted class.
@app.post('/predict')
async def predict(file: UploadFile = File(...)):
    image = read_file_as_image(await file.read())
    image_batch = np.expand_dims(image, 0)
    predictions = MODEL.predict(image_batch)
    predicted_class = CLASS_NAMES[np.argmax(predictions[0])].split('___')

    plant_name = predicted_class[0]
    disease = predicted_class[1]
    confidence = round(100 * (np.max(predictions[0])), 2)

    return {
        'predicted_plant': plant_name,
        'predicted_disease': disease,
        'confidence': round(float(confidence), 2)
    }



if __name__ == '__main__':
    uvicorn.run(app, host='localhost', port=8080)

