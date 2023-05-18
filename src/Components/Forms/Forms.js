import React, {useState} from 'react';
import styles from './Forms.module.scss'

export const Forms = () => {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState('');

  const Change = (e)=>{
    setInput(e.target.value)
  }
  const item = {
    id:Math.floor(Math.random()*1000),
    value: input
  };

  const Add = ()=>{
    if(!input){
      return;
    }
   

    setTodo(list =>[...list, item])
    setInput('')
    
   
  }
  const Del = (id)=>{
  
  setTodo(todo.filter(item => item.id!==id))
 
  }
 
  return (
    <div className={styles.container}>
     <div className={styles.center}>
        <h1>Список Задач: {todo.length}</h1>
        <div className={styles.center_input}>
          <input onChange={Change}
          value={input}
          type='text'
          />
         <button onClick={Add}>Add</button>
        </div>
       
       
       
      <ul>
        {todo.map((item)=>{
          
            return(<li key={item.id}>{item.value}<button onClick={()=>Del(item.id)}>del</button></li>
            )
          
        })}
      </ul>
      
     </div>

    </div>
  )
}

export default Forms
