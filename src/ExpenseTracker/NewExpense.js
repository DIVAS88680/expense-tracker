import NewExpenseForm from './NewExpenseForm';
import './NewExpense.css';
const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData={
            ...enteredExpenseData,
            id:Math.random().toString()
        };
        props.onAddExpense(expenseData);

    }
    
    return (
        <div className="new-expense">
            <NewExpenseForm onAddExpense={saveExpenseDataHandler}/>

        </div>
    )

}
export default NewExpense;