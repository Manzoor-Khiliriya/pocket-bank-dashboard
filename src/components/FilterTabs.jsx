export default function FilterTabs({ filter, setFilter }) {
  const tabs = [
    { key: "all", label: "All" },
    { key: "credit", label: "Income" },
    { key: "debit", label: "Expenses" },
  ];

  return (
    <div className="mt-6 mb-4">
      <div className="flex gap-2 overflow-x-auto pb-2">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setFilter(tab.key)}
            className={`px-4 py-2 cursor-pointer rounded-full text-sm font-medium whitespace-nowrap transition shadow-md ${
              filter === tab.key
                ? "bg-blue-600 text-white shadow-blue-300/40"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
