import './Expenses.css';
import react, {useState} from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import React from 'react';
import ExpensesChart from './ExpensesChart';
import ExpensesList from './ExpensesList';
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
const filterChangeHandler = selectedYear =>{
  setFilteredYear(selectedYear);
};
const filteredExpenses = props.item.filter(expense => {
  return expense.date.getFullYear().toString() === filteredYear;
});


  return(<div> <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
    <ExpensesChart expenses={filteredExpenses}/>
    <ExpensesList item={filteredExpenses}/>
    </div>
    );
  
  
    
  };
    
    
   


export default Expenses;
