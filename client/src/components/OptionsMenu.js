import React, { useRef, useState } from 'react';
import { IonButton, IonItem, IonLabel, IonList, IonModal, IonPage, IonToolbar, IonHeader, IonTitle, IonContent, IonButtons } from '@ionic/react';
import './OptionsMenu.css';

const OptionsMenu = () => {
    const modal = useRef(null);

    return (
        // <IonModal id="example-modal" ref={modal} isOpen={true}>
            <IonList lines="none">
                <IonItem button={true} detail={false} onClick={console.log('clicked')}>
                    <IonLabel slot='end'>כל התמונות</IonLabel>
                </IonItem>
                <IonItem button={true} detail={false} onClick={console.log('clicked')}>
                    <IonLabel slot='end'>מיין</IonLabel>
                </IonItem>
                <IonItem button={true} detail={false} onClick={console.log('clicked')}>
                    <IonLabel slot='end'>הצגת שקופיות</IonLabel>
                </IonItem>
                <IonItem button={true} detail={false} onClick={console.log('clicked')}>
                    <IonLabel slot='end'>שנה תמונת פרופיל</IonLabel>
                </IonItem>
            </IonList>
        // </IonModal>
        // <IonList inset={true}>
        //     <IonItem button={true} detail={false} onClick={console.log('clicked')}>
        //         <IonLabel slot='end'>עריכה</IonLabel>
        //     </IonItem>
        //     <IonItem button={true} detail={false} onClick={console.log('clicked')}>
        //         <IonLabel slot='end'>מיין</IonLabel>
        //     </IonItem>
        //     <IonItem button={true} detail={false} onClick={console.log('clicked')}>
        //         <IonLabel slot='end'>הצגת שקופיות</IonLabel>
        //     </IonItem>
        //     <IonItem button={true} detail={false} onClick={console.log('clicked')}>
        //         <IonLabel slot='end'>שנה תמונת פרופיל</IonLabel>
        //     </IonItem>
        // </IonList>
    );
}

export default OptionsMenu;