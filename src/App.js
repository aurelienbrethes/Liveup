import "./App.css";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import Event from "./components/pages/Event";
import AddEvent from "./components/pages/AddEvent";
import Account from "./components/pages/Account";
import { HashRouter, Routes, Route } from "react-router-dom";
import { UserContextProvider } from "./contexts/UserContext";
import { useState } from "react";

function App() {
  const [wheel, setWheel] = useState(false);
  return (
    <div
      className="App"
      onWheel={(e) => (e.deltaY > 0 ? setWheel(true) : setWheel(false))}
    >
      <HashRouter basename="/">
        <UserContextProvider>
          <Header wheel={wheel} setWheel={setWheel} />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/event" element={<Event />} />
            <Route path="/addEvent" element={<AddEvent />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </UserContextProvider>
      </HashRouter>
    </div>
  );
}

export default App;
