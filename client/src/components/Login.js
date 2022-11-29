import { IonButton, IonImg, IonInput, IonItemDivider, IonList } from '@ionic/react';
import logo from './logo.png';
import './Login.css';

const SignUp = () => {
    return (
        <>
            <IonItemDivider className="pink-background" />
            <IonList className="form">
                <IonInput type="email" name="email" placeholder="מייל" />
                <hr className="line"></hr>
                <IonInput type="password" name="password" placeholder="קוד הזמנה" />
                <hr className="line"></hr>
                <IonButton className="button" expand="full" color="medium-contrast" shape="round"> הבא </IonButton>
                <h6 className="h6"> יש לך כבר חשבון? </h6>
            </IonList>
            <IonImg className="logo" src={logo} />
        </>
    );
}

const NewPassword = () => {
    return (
        <>
        <IonItemDivider className="pink-background" />
        <IonList className="form">
            <h6> צור סיסמה חדשה: </h6>
            <IonInput type="password" name="password" placeholder="סיסמה" />
            <hr className="line"></hr>
            <IonInput type="text" name="validation" placeholder="אימות סיסמה" />
            <hr className="line"></hr>
            <IonButton className="button" type="submit" expand="full" color="medium-contrast" shape="round"> הרשם </IonButton>
        </IonList>
        <IonImg className="logo" src={logo} />
        </>
    );
}

const SignIn = () => {
    return (
        <>
        <IonItemDivider className="pink-background" />
        <IonList className="form">
            <IonInput className="input" type="email" name="email" placeholder="מייל" />
            <hr className="line"></hr>
            <IonInput className="input" type="password" name="password" placeholder="סיסמה" />
            <hr className="line"></hr>
            <IonButton className="button" type="submit" expand="full" color="medium-contrast" shape="round"> התחבר </IonButton>
            <h6 className="h6"> עדיין לא רשום? </h6>
        </IonList>
        <IonImg className="logo" src={logo} />
        </>
    );
}

const Login = (props) => {
    
    if (props.name === "SignUp") {
        return (
           <SignUp /> 
        );
    }

    if (props.name === "NewPassword") {
        return (
            <NewPassword />
        );
    }

    if (props.name === "SignIn") {
        return (
            <SignIn />
        );
    }
}

export default Login;