function HistoryList({ history, onClear }) {
  if (history.length === 0) return null;

  return (
    <div className="mt-4">
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-semibold">History</h2>
        <button onClick={onClear} className="text-sm text-red-500 hover:underline">
          Clear
        </button>
      </div>
      <ul className="space-y-1 text-sm">
        {history.map((entry) => (
          <li key={entry.id} className="border-b py-1 flex justify-between">
            <span>{entry.bmi}</span>
            <span>{entry.category}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HistoryList;