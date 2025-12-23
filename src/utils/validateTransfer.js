export const validateTransfer = ({ amount, date }, balance) => {
  const numericAmount = Number(amount);

  if (!numericAmount || numericAmount <= 0) {
    return "Amount must be greater than 0";
  }

  if (numericAmount > balance) {
    return "Insufficient Funds";
  }

  if (!date) {
    return "Please select a transfer date";
  }

  const selectedDate = new Date(date);
  const today = new Date();

  today.setHours(0, 0, 0, 0);
  selectedDate.setHours(0, 0, 0, 0);

  if (selectedDate < today) {
    return "Transfer date cannot be in the past";
  }

  return null;
};
