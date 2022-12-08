import "./App.css";
import Router from "./routes/Router";
import GlobalStyles from "./styles/globalStyles";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  const [user, setUser] = useState("");

  return (
    <div className="App">
      <GlobalStyles />
      <ToastContainer theme="dark" />
      <Router user={user} setUser={setUser} />
    </div>
  );
}

export default App;