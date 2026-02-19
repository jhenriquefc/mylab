import { useState, useEffect } from "react";
import "./SystemStatus.css";

export default function SystemStatus() {
  const [quote, setQuote] = useState("INITIALIZING_KANYE_LOG...");
  const [loading, setLoading] = useState(true);

  const fetchQuote = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://api.kanye.rest");
      const data = await response.json();
      setQuote(data.quote.toUpperCase());
    } catch (error) {
      setQuote("SYSTEM_ERROR: COULD_NOT_REACH_KANYE_SERVER");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="status-container">
      <div className="status-header">
        <span className="status-label">KANYE_WEST_WARNING:</span>
        <button onClick={fetchQuote} className="refresh-btn">
          {loading ? "SYNCING..." : "RE_RUN_LOG"}
        </button>
      </div>
      <div className="status-box">
        <p className="status-text">
          <span className="cursor">&gt;</span> "{quote}"
        </p>
      </div>
    </div>
  );
}