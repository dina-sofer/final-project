import React, { useState } from 'react';
import { IonImg } from '@ionic/react';
import { getAllPhotos } from '../api/photos';
import './Photos.css';
// import img from '../photos/IMG-20221116-WA0003.jpg';

const Photos = () => {
    const [photos, setPhotos] = useState([]);
    // שליפת כל התמונות
    getAllPhotos().then(res => {
        setPhotos(res);
    });

    return (
        <div>
            {photos.map(photo => {
                let path = photo.path;
                // return (
                //     // <IonImg className="img" src={path} />
                // )
            })}
        </div>
    );
}

export default Photos;