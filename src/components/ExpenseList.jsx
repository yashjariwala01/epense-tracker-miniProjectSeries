
// import React from 'react';

// const ExpenseList = ({ expenses, deleteExpense }) => {
//   return (
//     <div className="mt-8">
//       <h2 className="text-xl font-bold mb-4">Expense List</h2>
//       <ul className="bg-gray-100 rounded-md p-4">
//         {expenses.map(expense => (
//           <li key={expense.id} className="flex justify-between items-center border-b border-gray-300 py-2">
//             <span>{expense.description}</span>
//             <span>{expense.amount}</span>
//             <button onClick={() => deleteExpense(expense.id)} className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition duration-300">Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ExpenseList;


// ExpenseList.js
import React from 'react';

const ExpenseList = ({ expenses, deleteExpense }) => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Expense List</h2>
      <ul className="grid grid-cols-3 gap-4">
        {expenses.map(expense => (
          <li key={expense.id} className="bg-gray-100 rounded-md p-4 flex justify-between items-center border border-gray-200">
            <span>{expense.description}</span>
            <span>₹{expense.amount}</span>
            <button onClick={() => deleteExpense(expense.id)} className="text-white bg-red-500 px-3 py-1 rounded-md hover:bg-red-600 transition duration-300">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
