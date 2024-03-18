// import React from 'react';

// const BudgetSummary = ({ expenses }) => {
//   const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);

//   return (
//     <div className="budget-summary">
//       <h2>Budget Summary</h2>
//       <p>Total Expenses: ${totalExpenses}</p>
//     </div>
//   );
// };

// export default BudgetSummary;


// BudgetSummary.js
import React from 'react';

const BudgetSummary = ({ expenses }) => {
  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Budget Summary</h2>
      <div className="bg-gray-100 rounded-md p-4">
        <p className="mb-2">Total Expenses: {totalExpenses}</p>
        <p className="mb-2">Number of Expenses: {expenses.length}</p>
      </div>
    </div>
  );
};

export default BudgetSummary;
