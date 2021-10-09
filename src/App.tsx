import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./GlobalStyles.css";
import Homepage from './Components/Homepage/Homepage';
import Loginpage from './Components/LoginPage/LoginPage';
import {NavBar} from './Components/NavBar/NavBar';
import { useContext } from 'react';
import { myContext } from './Context';
import { IUser } from './types/maintypes';

function App() {
  const userObject = useContext(myContext) as IUser;
  console.log(userObject);
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/login" component={Loginpage} />
      </Switch>
    </BrowserRouter> 
  );
}

export default App;
