import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BalanceCard from "./components/BalanceCard";
import TransactionList from "./components/TransactionList";
import TransferForm from "./components/TransferForm";
import FilterTabs from "./components/FilterTabs";
import { initialTransactions } from "./data/transactions";
import { processTransfer } from "./utils/transferService";
import { calculateInitialBalance } from "./utils/calculateInitialBalance";

export default function App() {
  const [transactions, setTransactions] = useState(initialTransactions);
  const [filter, setFilter] = useState("all");

  const balance = calculateInitialBalance(transactions);

  const filteredTransactions =
    filter === "all"
      ? transactions
      : transactions.filter((t) => t.type === filter);

  const handleTransfer = (transfer) => {
    const { transactions: newTransactions } =
      processTransfer(balance, transactions, transfer);

    setTransactions(newTransactions);
  };

  return (
    <div className="bg-gray-100 text-gray-900">
      <Header />

      <main className="max-w-6xl mt-16 mx-auto p-4 min-h-screen">
        <BalanceCard balance={balance} />
        <FilterTabs filter={filter} setFilter={setFilter} />
        <TransactionList transactions={filteredTransactions} />
        <TransferForm balance={balance} onTransfer={handleTransfer} />
      </main>

      <Footer />
    </div>
  );
}
