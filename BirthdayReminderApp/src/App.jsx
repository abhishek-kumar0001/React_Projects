import React, { useState } from "react";
import "./App.css";
import List from "./Components/List";

function App() {
  const [showReminder,setShowReminder] = useState(false)

  return (
    <div className="app">
      <List showReminder={showReminder} setShowReminder={setShowReminder}/>      
    </div>
  )
}

export default App
