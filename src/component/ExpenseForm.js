import { useState } from 'react';
import './ExpenseForm.css'
const ExpenseForm = (props) =>{
   
    const [enteredTitle,setEnteredTitle] = useState('');
    const [enteredAmount,setEnteredAmount] = useState('');
    const [enteredDate,setEnteredDate] = useState('');
const TitleChangedHandler = (event) =>{
        setEnteredTitle(event.target.value);
    };
const AmountChangedHandler = (event) =>{
    setEnteredAmount(event.target.value);
};
const DateChangeHandler = (event) =>{
    setEnteredDate(event.target.value);
};
const submitHandler = (event) =>{
    event.preventDefault();
    const expenseData = {
        title: enteredTitle,
        amount: +enteredAmount,
        date: new Date(enteredDate)

            };
   props.onSaveExpenseData(expenseData);
   setEnteredTitle('');
   setEnteredAmount('');
   setEnteredDate('');

};
    
     
    return(<div>
        <form onSubmit={submitHandler}>
        <div>
            <label>TITLE</label>
            <input type='text' value={enteredTitle} onChange={TitleChangedHandler}></input>
        </div>
        <div>
        <label>AMOUNT</label>
        <input type='number' value={enteredAmount}onChange={AmountChangedHandler}></input>
    </div>
    <div>
    <label>DATE</label>
    <input type='date' value={enteredDate}onChange={DateChangeHandler}></input>
</div>
<div>
     <button type='button' onClick={props.onCancel}>CANCEL</button>
    <button type='submit'>ADD EXPENSE</button>
</div>

</form>
</div>

    );

};
export default ExpenseForm;