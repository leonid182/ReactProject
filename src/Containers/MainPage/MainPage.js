import React from "react";
import Nav from "../../Components/header/Nav";
import Footer from "../../Components/Footer/Footer";
import styles from "./MainPage.module.scss";
import Button from "@mui/material/Button";
import Kids from "../../img/kids.png"

const MainPage = () => {
  return (
    <div>
    <div className={styles.container} >
      <Nav />

      <div className={styles.main__slogan}>
        <p>Learn & Play</p>
      </div>

      <div className={styles.main__button}>
        <Button className={styles.button} variant="contained" disableElevation>
          Записаться
        </Button>
      </div>

      <div className={styles.main__photos} style={{zIndex:'5'}} >
        <img
          src={Kids}
          className={styles.main__photos_main}
          
          alt=""
        />
      </div>
      </div >
     
        <Footer style={{zIndex:'6'}}/>
        
    </div>
  );
};

export default MainPage;
