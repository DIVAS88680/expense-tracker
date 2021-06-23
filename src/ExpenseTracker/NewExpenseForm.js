import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpenseForm.css';

const NewExpenseForm = (props) =>{
    const[isEditing,setIsEditing]=useState(false);
    const SaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData ={
            ...enteredExpenseData,
            id:Math.random().toString(),
        }
        props.onAddExpense(expenseData);
        setIsEditing(false);
    }
    
    const startEditingHandler= ()=>{
        setIsEditing(true);
    }

    const stopEditingHandler= ()=>{
        setIsEditing(false);
    }

    return(
        
        <div className='expense__actions'>
         {!isEditing && <button type="submit" onClick={startEditingHandler}>AddNewExpense</button>}
         {isEditing && <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} onCancel={stopEditingHandler}/>}
        </div>
    )
}
export default NewExpenseForm;