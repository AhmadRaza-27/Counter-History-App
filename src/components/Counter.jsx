function Counter({ count, updateCount }) {
  return (
    <div className="p-6 rounded-xl shadow-md bg-white w-80 text-center">

      {/* Display Count */}
      <h2 className="text-2xl font-semibold mb-4">
        Count: {count}
      </h2>

      {/* Buttons */}
      <div className="flex justify-center gap-4">

        <button
          onClick={() => updateCount(count + 1)}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
        >
          + Increment
        </button>

        <button
          onClick={() => updateCount(count - 1)}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          - Decrement
        </button>

      </div>

      {/* Reset Button */}
      <button
        onClick={() => updateCount(0)}
        className="mt-4 bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
      >
        Reset
      </button>

    </div>
  );
}

export default Counter;