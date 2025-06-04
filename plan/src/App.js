import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import UpgradePlan from './Components/UpgradePlan';
import PaymentOption from './Components/PaymentOption';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element = {<UpgradePlan />} /> 
        <Route path='/pay' element = {<PaymentOption />} /> 
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
