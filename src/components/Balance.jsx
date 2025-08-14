
function Balance({ transactions }) {
  const total = transactions.reduce((acc, t) => acc + t.amount, 0);
  console.log('Balance calculated', { total });
  return (
    <div className="balance-card">
      <h4 className="balance-title">Your Balance</h4>
      <h1 className="balance-amount">₹ {total}</h1>
    </div>
  );
}

export default Balance;
