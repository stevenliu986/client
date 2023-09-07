import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:8080")
      .then((response) => setData(response.data));
  }, []);
  return <div className="App">{data}</div>;
}

export default App;
