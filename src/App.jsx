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

  // Log after each function call
  console.log('App render:', { transactions });

  return (
    <div className="container">
      <h2>💸 Expense Tracker</h2>
      {(() => { const el = <Balance transactions={transactions} />; console.log('Balance called', { transactions }); return el; })()}
      {(() => { const el = <IncomeExpense transactions={transactions} />; console.log('IncomeExpense called', { transactions }); return el; })()}
      {(() => { const el = <TransactionList transactions={transactions} dispatch={dispatch} />; console.log('TransactionList called', { transactions }); return el; })()}
      {(() => { const el = <AddTransaction dispatch={dispatch} />; console.log('AddTransaction called'); return el; })()}
    </div>
  );
}

export default App;
