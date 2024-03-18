// import React, { useState } from 'react';

// const BudgetForm = ({ addExpense }) => {
//   const [name, setName] = useState('');
//   const [amount, setAmount] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (name.trim() !== '' && amount.trim() !== '') {
//       const newExpense = {
//         id: Math.random().toString(),
//         name,
//         amount: parseFloat(amount)
//       };
//       addExpense(newExpense);
//       setName('');
//       setAmount('');
//     }
//   };

//   return (
//     <div className="budget-form">
//       <h2>Add Expense</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name:</label>
//           <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//         </div>
//         <div>
//           <label>Amount:</label>
//           <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
//         </div>
//         <button type="submit">Add Expense</button>
//       </form>
//     </div>
//   );
// };

// export default BudgetForm;

// BudgetForm.js
import React, { useState } from 'react';

const BudgetForm = ({ addExpense }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      id: Math.random().toString(),
      description,
      amount: parseFloat(amount)
    };
    addExpense(newExpense);
    setDescription('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="mb-4">
        <label htmlFor="description" className="block mb-1">Description</label>
        <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full px-3 py-2 border rounded-md outline-none" />
      </div>
      <div className="mb-4">
        <label htmlFor="amount" className="block mb-1">Amount</label>
        <input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} className="w-full px-3 py-2 border rounded-md outline-none" />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">Add Expense</button>
    </form>
  );
};

export default BudgetForm;
