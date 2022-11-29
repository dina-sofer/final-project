import React from 'react';
import { IonPage } from '@ionic/react';
import Login from '../components/Login';

const Form = () => {
    return (
        <IonPage>
            <React.Fragment>
                <Login name="SignUp"/>
            </React.Fragment>
        </IonPage>
    );
}

export default Form;