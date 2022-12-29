import React, {useState} from 'react';
import { IonButton, IonImg, IonInput, IonItemDivider } from '@ionic/react';
import logo from './logo.png';
import './Login.css';

const Login = () => {
    const [name, setName] = useState("SignUp");

    if (name === "SignUp") {
        return (
            <>
            <IonItemDivider className="pink-background" />
            <form className="form">
                <IonInput type="email" name="email" placeholder="מייל" required />
                <hr className="line"></hr>
                <IonInput type="password" name="password" placeholder="קוד הזמנה" required />
                <hr className="line"></hr>
                <IonButton className="button" type="submit" expand="full" color="medium-contrast" shape="round"
                    onClick={ () => setName("NewPassword") }> הבא </IonButton>
            </form>
            <a className="a" onClick={ () => setName("SignIn") }> יש לך כבר חשבון? </a>
            <IonImg className="logo" src={logo} />
        </>
        );
    }

    if (name === "NewPassword") {
        return (
            <>
            <IonItemDivider className="pink-background" />
            <form className="form">
                <h6> צור סיסמה חדשה: </h6>
                <IonInput type="password" name="password" placeholder="סיסמה" required/>
                <hr className="line"></hr>
                <IonInput type="text" name="validation" placeholder="אימות סיסמה" required />
                <hr className="line"></hr>
                <IonButton className="button" type="submit" expand="full" color="medium-contrast" shape="round"> הרשם </IonButton>
            </form>
            <IonImg className="logo" src={logo} />
            </>
        );
    }

    if (name === "SignIn") {
        return (
            <>
            <IonItemDivider className="pink-background" />
            <form className="form">
                <IonInput className="input" type="email" name="email" placeholder="מייל" required />
                <hr className="line"></hr>
                <IonInput className="input" type="password" name="password" placeholder="סיסמה" required />
                <hr className="line"></hr>
                <IonButton className="button" type="submit" expand="full" color="medium-contrast" shape="round"> התחבר </IonButton>
            </form>
            <a className="a" onClick={ () => setName("SignUp") }> עדיין לא רשום? </a>
            <IonImg className="logo" src={logo} />
            </>
        );
    }
}

export default Login;