import { formatCurrency } from "../utils/formatCurrency";

export default function BalanceCard({ balance }) {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-2xl shadow-lg">
      <p className="text-sm opacity-90">Current Balance</p>
      <h1 className="text-3xl md:text-4xl font-bold mt-2">
        {formatCurrency(balance)}
      </h1>
    </div>
  );
}
