import React,{ useState } from 'react';
import './ExpenseItem.css';

import ExpenseDate from './ExpenseDate'; 
import reactDom from 'react-dom';
function ExpenseItem(props)
{
       const [title,setTitle]= useState(props.title);
        
   const clickHandler=()=>{
           setTitle('updated');
           console.log(title);
        };
return <div>
        
        <div className="expense-item">
        <ExpenseDate data={props.date}></ExpenseDate>
        <div className="expense-item__description"><h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
        </div><button onClick={clickHandler}>click here</button>
        </div>
       
 </div>
   
    



}

export default ExpenseItem;