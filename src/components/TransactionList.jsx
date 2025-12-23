import { formatCurrency } from "../utils/formatCurrency";

export default function TransactionList({ transactions }) {
  return (
    <div className="bg-white rounded-2xl shadow mt-4 divide-y">
      {transactions.length === 0 && (
        <p className="p-4 text-center text-gray-500">
          No transactions found
        </p>
      )}

      {transactions.map((tx) => (
        <div
          key={tx.id}
          className="flex justify-between items-center p-4"
        >
          <div>
            <p className="font-medium">{tx.description}</p>
            <p className="text-xs text-gray-500">{tx.date}</p>
          </div>

          <p
            className={`font-semibold ${
              tx.type === "credit"
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {tx.type === "credit" ? "+" : "-"}
            {formatCurrency(tx.amount)}
          </p>
        </div>
      ))}
    </div>
  );
}
