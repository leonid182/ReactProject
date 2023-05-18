import React from 'react'
import routes from "../routes"
import { Link } from 'react-router-dom';
import styles from "./Nav.module.scss"
import logo from "../../img/lamp_logo.svg"
import mainlogo from "../../img/lamp_logo_second.svg"


 const Nav = () => {
  return (
    <header className={styles.container}>
      
    <img src={mainlogo} className={styles.mainlogo}  alt="" />
    <div className={styles.header__nav}>
    <img src={logo} className={styles.logo} alt="" />
    
                  <ul>
                    <Link to={routes.Main}>Main Page</Link>
                    <Link to={routes.About} >About</Link>
                    <Link to={routes.News} >News</Link>
                    <Link to={routes.List}>List</Link>
                  </ul>
      
       
                
                    
                  
                 
             
    </div>
    </header>
  )
}

export default Nav
