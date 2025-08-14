function IncomeExpense({ transactions }) {
  const amounts = transactions.map(t => t.amount);
  const income = amounts.filter(a => a > 0).reduce((a, b) => a + b, 0);
  const expense = amounts.filter(a => a < 0).reduce((a, b) => a + b, 0);

  console.log('IncomeExpense calculated', { income, expense });

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">₹ {income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">₹ {Math.abs(expense)}</p>
      </div>
    </div>
  );
}

export default IncomeExpense;
