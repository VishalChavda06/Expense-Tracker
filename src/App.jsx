import { useReducer } from 'react';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return [action.payload, ...state];
    case "DELETE_TRANSACTION":
      return state.filter(t => t.id !== action.payload);
    default:
      return state;
  }
};

function App() {
  const [transactions, dispatch] = useReducer(reducer, []);

  return (
    <div className="container">
      <h2>💸 Expense Tracker</h2>
      <Balance transactions={transactions} />
      <IncomeExpense transactions={transactions} />
      <TransactionList transactions={transactions} dispatch={dispatch} />
      <AddTransaction dispatch={dispatch} />
    </div>
  );
}

export default App;
