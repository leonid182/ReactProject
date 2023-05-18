import React, { useState } from 'react'
import Nav from "../../Components/header/Nav"
import styles from "./AboutPage.module.scss";
import { useSelector, useDispatch } from 'react-redux';
import { createAsyncThunk } from '@reduxjs/toolkit';
const AboutPage = () => {

  const dispatch = useDispatch();
  const count = useSelector(state => state.count)

  const Plus = ()=>{
    dispatch({type:"Plus"});
    
  }

  const Minus = ()=>{
    dispatch({type:"Minus"})
  }



  return (
  
      <div className={styles.container}>
        <Nav/>
       
   
            <div className={styles.count}>
              <p>Count:{count}</p>
              <button className={styles.button} onClick={Plus}>+</button>
              <button className={styles.button} onClick={Minus}>-</button>
            </div>
      
        
      
      </div>
 
  )
}

export default AboutPage
