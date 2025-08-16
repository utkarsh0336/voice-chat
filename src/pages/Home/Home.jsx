import React from "react";
import styles from "./Home.module.css";
import Card from "../../components/shared/Card/Card";
import { NavLink , useNavigate } from "react-router-dom";
import Button from "../../components/shared/Button/Button";
const Home = () => {

  
  const signInLinkStyle = {
    color: '#0077ff',
    fontWeight: 'bold',
    textDecoration: 'none',
    marginLeft: '10px'
  }
  
  const history = useNavigate();
  function startRegister(){
    history('/register');
  }

  return (
    <div className={styles.cardWrapper}>
      <Card title="Welcome to Parlons !" icon="logo">
        <p className={styles.text}>
          We're working hard to get Codershouse ready for everyone! While we
          wrap up the finishing youches, we’re adding people gradually to make
          sure nothing breaks
        </p>
        <div>
          <Button onClick={startRegister} text="Get your username"/>
          <div className={styles.signinWrapper}>
            <span className={styles.hasInvite}>Have an invite text?</span>
            <NavLink style={signInLinkStyle} to="/login">Sign in</NavLink>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Home;
