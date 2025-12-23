export const processTransfer = (prevBalance, prevTransactions, transfer) => {
  const amount = Number(transfer.amount);

  const newTransaction = {
    id: Date.now(),
    description: transfer.name,
    amount,
    date: transfer.date,
    type: "debit",
  };

  return {
    balance: prevBalance - amount,
    transactions: [newTransaction, ...prevTransactions],
  };
};
