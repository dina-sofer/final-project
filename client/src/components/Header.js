import React, { useState } from 'react';
import { IonButton, IonButtons, IonIcon, IonTitle, IonToolbar, IonModal, IonList, IonItem, IonLabel } from '@ionic/react';
import { ellipsisVertical, search, menu } from 'ionicons/icons';
import './Header.css';
import OptionsMenu from './OptionsMenu';
import Search from './Search';

const Header = () => {
    const [visibleOptions, setVisibleOptions] = new useState(false);

    const handleOptionsOnClick = () => {
        setVisibleOptions(!visibleOptions);
    }

    return (
        <div>
            { visibleOptions && <OptionsMenu /> }
            <Search/>
            <IonToolbar>
                <IonButtons slot="secondary">
                    <IonButton onClick={handleOptionsOnClick}>
                        <IonIcon
                            slot="icon-only"
                            icon={ellipsisVertical}
                        >
                        </IonIcon>
                    </IonButton>
                    <IonButton>
                        <IonIcon slot="icon-only" icon={search}></IonIcon>
                    </IonButton>
                </IonButtons>
                <IonButtons slot="primary">
                    <IonButton>
                        <IonIcon slot="icon-only" icon={menu}></IonIcon>
                    </IonButton>
                </IonButtons>
                <IonTitle slot='end'>כל התמונות</IonTitle>
            </IonToolbar>
        </div>
    );
};
  
export default Header;