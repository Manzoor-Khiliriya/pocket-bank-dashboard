import { useState } from "react";
import { validateTransfer } from "../utils/validateTransfer";

export default function TransferForm({ balance, onTransfer }) {
  const [form, setForm] = useState({ name: "", amount: "", date: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const validationError = validateTransfer(form, balance);
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);

    setTimeout(() => {
      onTransfer(form);
      setLoading(false);
      setSuccess("Transfer successful 🎉");
      setForm({ name: "", amount: "", date: "" });
    }, 1500);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-2xl shadow mt-6"
    >
      <h2 className="text-lg font-semibold mb-4">Send Money</h2>

      <div className="space-y-3">
        <input
          className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
          placeholder="Recipient Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />

        <input
          type="number"
          className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
          placeholder="Amount"
          value={form.amount}
          onChange={(e) => setForm({ ...form, amount: e.target.value })}
          required
        />

        <input
          type="date"
          className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          required
        />
      </div>

      {error && <p className="text-red-600 text-sm mt-3">{error}</p>}
      {success && <p className="text-green-600 text-sm mt-3">{success}</p>}

      <button
        disabled={loading}
        className="w-full mt-4 cursor-pointer bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition disabled:opacity-50"
      >
        {loading ? "Sending..." : "Send Money"}
      </button>
    </form>
  );
}
