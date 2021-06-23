import { useState } from 'react';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const  Expenses = (props) => {
  const [filteredYear,setFilteredYear]=useState('2019');
  const filterChangeHandler = (selectedYear) =>{
    setFilteredYear(selectedYear);
  }
  const filteredExpense = props.items.filter((expense) =>
   {return (expense.date.getFullYear().toString()===filteredYear)});

  return (
    <>
    <div className="expenses">
    <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
    <ExpensesChart expenses={filteredExpense}/>
      <ExpensesList items={filteredExpense}/>
    </div>
    </>
  );
}

export default Expenses;