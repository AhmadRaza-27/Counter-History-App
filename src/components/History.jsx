function History({ history, clearHistory }) {
  return (
    <div className="w-80 bg-white p-4 rounded-xl shadow-md flex flex-col items-center">

      <h3 className="text-xl font-semibold mb-3">
        History
      </h3>

      {/* If no history */}
      {history.length === 0 ? (
        <p className="text-gray-500">No history yet</p>
      ) : (
        <>
          <ul className="max-h-40 w-full overflow-y-auto mb-3">
            {history.map((value, index) => (
              <li
                key={index}
                className="border-b py-1 text-center"
              >
                {value}
              </li>
            ))}
          </ul>

          {/* Clear History Button */}
          <button
            onClick={clearHistory}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          >
            Clear History
          </button>
        </>
      )}
    </div>
  );
}

export default History;