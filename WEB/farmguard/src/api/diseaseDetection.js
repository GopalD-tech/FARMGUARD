import axios from 'axios';

const API_URL = 'https://your-ai-model-api-url.com/detect-disease';

export const uploadCropImage = async (image) => {
  const formData = new FormData();
  formData.append('image', image);

  try {
    const response = await axios.post(API_URL, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return response;
  } catch (error) {
    console.error('Error uploading image:', error);
    return { data: 'Error detecting disease.' };
  }
};
