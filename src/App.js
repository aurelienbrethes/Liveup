import "./App.css";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import Event from "./components/pages/Event";
import AddEvent from "./components/pages/AddEvent";
import Account from "./components/pages/Account";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContextProvider } from "./contexts/UserContext";
import { useState } from "react";

function App() {
  const [wheel, setWheel] = useState(false);
  return (
    <div
      className="App"
      onWheel={(e) => (e.deltaY > 0 ? setWheel(true) : setWheel(false))}
    >
      <BrowserRouter>
        <UserContextProvider>
          <Header wheel={wheel} setWheel={setWheel} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/event" element={<Event />} />
            <Route path="/addEvent" element={<AddEvent />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </UserContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
