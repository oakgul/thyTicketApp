import './App.css';
import SearchFlight from './pages/SearchFlight/searchFlightPage';
import FlightList from './pages/FlightList/flightListPage';
import Completed from './pages/Completed/completedPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchFlight />} />
        <Route path="flight-list" element={<FlightList />} />
        <Route path="completed" element={<Completed />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
