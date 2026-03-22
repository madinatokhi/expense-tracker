import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(e => e.id !== id));
  };

  const total = expenses.reduce((sum, e) => sum + Number(e.amount), 0);

  return (
    <>
      <h2>Expense Tracker</h2>

      <ExpenseForm onAdd={addExpense} />

      {expenses.length === 0 && <p>No expenses yet</p>}

      <ExpenseList items={expenses} onDelete={deleteExpense} />

      <h3>Total: ${total}</h3>
    </>
  );
}

export default App;