
import React from 'react';

import css from './App.css';

import NewExpense from './Components/NewExpense/NewExpenses'
import Expenses from './Components/Expenses/Expenses.js'; 
import { useState } from 'react';
import ChartBar from './Components/Chart/ChartBar';
import Chart from './Components/Chart/Chart';


  const Dummy_expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',                       /* Object creation  */  
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { 
      id: 'e2',
     title: 'New TV',
     amount: 799.49,
     date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];



  const App = () => {
   const [expenses,setExpenses]= useState(Dummy_expenses)
  const addExpenseHandler = expense => {
              /*Function creation and declaration  */            
    setExpenses((prevExpenses) =>{
      return [expense,...expenses]
    });
  };

 

  return (
    <div>
      <h1> My Expense Tracker </h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      
      <Expenses items={expenses} />   /* Passing an js object to child Components */
    </div>
  );
}

export default App;