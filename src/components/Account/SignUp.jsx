import React from 'react';
import Styles from './SignUp.module.css';

const SignUp = () => {
    return (
    <div className={Styles.loginBox}>
            <div className={Styles.textbox}>
                <input type="text" placeholder="Username" />
            </div>
            <div className={Styles.textbox}>
                <input type="email" placeholder="Email" />
            </div>
            <div className={Styles.textbox}>
                <input type="password" placeholder="Password" />
            </div>
            <button className={Styles.btn} value="Sign in" >SignUp</button>    
    </div>
    );
}

export default SignUp;