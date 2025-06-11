function Balance({ transactions }) {
  const total = transactions.reduce((acc, t) => acc + t.amount, 0);

  return (
    <div>
      <h4>Your Balance</h4>
      <h1>₹ {total}</h1>
    </div>
  );
}

export default Balance;
