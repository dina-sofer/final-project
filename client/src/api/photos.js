import axios from 'axios';

// שליפת כל התמונות
export const getAllPhotos = async () => {
    try {
        const res = await axios.get('http://localhost:8080/photos');
        return res.data;
    }
    catch(error) {
        console.log(error);
    }
}