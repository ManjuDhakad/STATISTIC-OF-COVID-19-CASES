import React from 'react';
import Styles from './SignIn.module.css';

const SignIn = () => {
    return (
    <div className={Styles.loginBox}>
            <div className={Styles.textbox}>
                <input type="email" placeholder="Email" />
            </div>
            <div className={Styles.textbox}>
                <input type="password" placeholder="Password" />
            </div>
            <button className={Styles.btn} value="Sign in" >SignIn</button>    
    </div>
    );
}

export default SignIn;