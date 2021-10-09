import React from 'react'
import googleImage from '../../assets/googleimage.png';
import githubImage from '../../assets/githubImage.png';
import twitterImage from '../../assets/twitterImage.png';
import styles from './LoginPage.module.css';

export default function Loginpage() {
  const googlelogin = () => {
    window.open("https://oauthbackendserver.herokuapp.com/auth/google", "_self")
  }

  const githublogin = () => {
    window.open("https://oauthbackendserver.herokuapp.com/auth/github", "_self")
  }

  const twitterlogin = () => {
    window.open("https://oauthbackendserver.herokuapp.com/auth/twitter", "_self")
  }

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginForm}>
        <h1>Login</h1>
        <div className={styles.googleContainer} onClick = {googlelogin}>
          <img src={googleImage} alt="Google Icon"/>
          <p>Login with Google</p>
        </div>

        <div className={`${styles.googleContainer} ${styles.githubContainer}`} onClick = {githublogin}>
          <img src={githubImage} alt="Github Icon"/>
          <p>Login with Github</p>
        </div>

        <div className={`${styles.googleContainer} ${styles.twitterContainer}`} onClick = {twitterlogin}>
          <img src={twitterImage} alt="Twitter Icon"/>
          <p>Login with Twitter</p>
        </div>
      </div>
    </div>
  )
}
