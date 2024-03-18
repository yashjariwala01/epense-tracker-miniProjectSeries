// import React, { useState } from 'react';
// import './App.css';
// import BudgetForm from './components/BudgetForm';
// import ExpenseList from './components/ExpenseList';
// import BudgetSummary from './components/BudgetSummary';

// const App = () => {
//   const [expenses, setExpenses] = useState([]);

//   const addExpense = (expense) => {
//     setExpenses([...expenses, expense]);
//   };

//   const deleteExpense = (id) => {
//     setExpenses(expenses.filter(expense => expense.id !== id));
//   };

//   return (
//     <div className="container">
//       <h1>Budget Tracker</h1>
//       <BudgetForm addExpense={addExpense} />
//       <BudgetSummary expenses={expenses} />
//       <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
//     </div>
//   );
// };

// export default App;


// App.js
import React, { useState } from 'react';
import BudgetForm from './components/BudgetForm';
import ExpenseList from './components/ExpenseList';
import BudgetSummary from './components/BudgetSummary';

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  return (
    <div className="container bg-yellow-300 mx-auto my-8 py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Budget Tracker</h1>
      <BudgetForm addExpense={addExpense} />
      <BudgetSummary expenses={expenses} />
      <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
    </div>
  );
};

export default App;
