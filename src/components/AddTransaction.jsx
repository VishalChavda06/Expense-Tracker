import { useState } from 'react';

function AddTransaction({ dispatch }) {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('income');

  const handleSubmit = (e) => {
    e.preventDefault();

    const adjustedAmount = type === 'expense' ? -Math.abs(+amount) : Math.abs(+amount);

    const newTransaction = {
      id: Date.now(),
      text,
      amount: adjustedAmount, // Adjust amount based on type
      type,
    };

    dispatch({ type: "ADD_TRANSACTION", payload: newTransaction });
    console.log('AddTransaction handleSubmit called', newTransaction);

    setText('');
    setAmount('');
    setType('income'); // Reset type to default
  };

  return (
    <div>
      <h3>Add New Transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label>Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} type="text" placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label>Amount  </label>
          <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" placeholder="Enter amount..." />
        </div>
        <div className="form-control">
          <label>Type</label>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </div>
  );
}

export default AddTransaction;
