import logo from './logo.svg';
import './App.css';
import LogForm from './components/LogForm';
import Dashboard from './components/Dashboard';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogForm />}/>
         
          <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
