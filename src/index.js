import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import App from './App';
import Requests from "./Routes/requests";
import Customers from "./Routes/customers";
import Providers from "./Routes/providers";
import Quotes from "./Routes/quotes";
import Payment from "./Routes/payments";
import Locator from "./Routes/locator";
import Documents from "./Routes/documents";
import Analytics from "./Routes/analytics";
import Login from "./Routes/login";



ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='requests' element={<Requests/>}/>
      <Route path='customers' element={<Customers/>}/>
      <Route path='providers' element={<Providers/>}/>
      <Route path='quotes' element={<Quotes/>}/>
      <Route path='payment' element={<Payment/>}/>
      <Route path='locator' element={<Locator/>}/>
      <Route path='documents' element={<Documents/>}/>
      <Route path='analytics' element={<Analytics/>}/>
      <Route path='login' element={<Login/>}/>
      
    </Routes>
  
  </BrowserRouter>,
    
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
