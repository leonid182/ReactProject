import React, { useEffect, useState } from 'react';
import styles from './NewsPage.module.scss'
import Nav from "../../Components/header/Nav";
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';



const api = ' https://content.guardianapis.com/search?api-key=8f110212-c6c7-4037-8c8a-56a0c94607a0';


const ContactPage = () => {

const[article, setArticle] = useState([]);

useEffect(()=>{
  axios.get(api).then(data=>{
    setArticle(data.data.response.results);
  })
}, [])
  return (
    
    <div>
      <Nav/>
     <div style={{textAlign:'center', marginTop:'10vh'}}>
        {article.map(item=>{
          return(
          
          <div key={item.webPublicationDate} className={styles.container}><p><a href={item.webUrl}  key={item.webPublicationDate}>{item.webTitle}</a></p></div>
  
  
  
          
          )
        })}
     </div>
    </div>
  )
}

export default ContactPage
