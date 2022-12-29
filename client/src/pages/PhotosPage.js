import React from 'react';
import { IonPage } from '@ionic/react';
import Photos from '../components/Photos';

const PhotosPage = () => {
    return (
        <IonPage>
            <React.Fragment>
                <Photos />
            </React.Fragment>
        </IonPage>
    );
}

export default PhotosPage;