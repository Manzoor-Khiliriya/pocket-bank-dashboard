export const calculateInitialBalance = (transactions) => {
  return transactions.reduce((total, tx) => {
    return tx.type === "credit"
      ? total + tx.amount
      : total - tx.amount;
  }, 0);
};
