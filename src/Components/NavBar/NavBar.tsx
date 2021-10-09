import React, { useContext } from 'react';
import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';
import axios, { AxiosResponse} from 'axios';
import { IUser } from '../../types/maintypes';
import { myContext } from '../../Context';

export const  NavBar = () => {
  const user = useContext(myContext) as IUser;
  
  const logout = () => {
    axios.get("https://oauthbackendserver.herokuapp.com/auth/logout", {
      withCredentials: true
    }).then(( res: AxiosResponse ) => {
      console.log(res);
      if (res.data === "Done"){
        window.location.href="/";
      }
    })
  }
  return (
    <div className={styles.navBarWrapper}> 
      <ul className={styles.navBar}>
        <li><Link to='/'>Home</Link></li>
        { !user?  
            <li><Link to='/login'>Login</Link></li> :
            <li onClick={logout}>Logout</li>
        }
      </ul>
    </div>
  );
};
