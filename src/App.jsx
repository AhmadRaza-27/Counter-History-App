import { useState, useEffect } from "react";
import Counter from "./components/Counter";
import History from "./components/History";

function App() {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);

  // Load history from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("history"));
    if (saved) setHistory(saved);
  }, []);

  // Save history to localStorage
  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history));
  }, [history]);

  // Update count + add timestamp
  const updateCount = (newValue) => {
    setCount(newValue);

    const newEntry = {
      value: newValue,
      time: new Date().toLocaleTimeString(),
    };

    setHistory([...history, newEntry]);
  };

  // Clear history
  const clearHistory = () => {
    setHistory([]);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 p-4">

      <h1 className="text-4xl font-bold text-[var(--text-h)]">
        Counter with History
      </h1>

      <Counter count={count} updateCount={updateCount} />

      <History
        history={history}
        currentCount={count}
        clearHistory={clearHistory}
      />

    </div>
  );
}

export default App;