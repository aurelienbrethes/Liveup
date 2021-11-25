import './App.css';
import Header from './components/Header';
import Home from './components/pages/Home';
import Event from './components/pages/Event';
import AddEvent from './components/pages/AddEvent';
import Account from './components/pages/Account';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<Event />} />
        <Route path="/addEvent" element={<AddEvent />} />
        <Route path="/account" element={<Account />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
