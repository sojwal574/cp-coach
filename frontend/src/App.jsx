import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Connecting to CP Coach...");

  useEffect(() => {
    fetch("http://localhost:5000/api/health")
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
      })
      .catch((error) => {
        console.error("API error:", error);
        setMessage("Could not connect to CP Coach backend");
      });
  }, []);

  return (
    <div>
      <h1>CP Coach</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
