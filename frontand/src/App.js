import React from 'react';
import './App.css';
import logo from './assets/logo.svg';
import api from './services/api';

function App() {
  function hendSubmit(event){
    event.preventDeDefault();
 console.log('hello world');
  }

  return (
 <div className= "container">
   <img src={logo} alt="AirCnC"/>
   <div className="content">
     <p>
       Ofereça <strong>spots</strong> para progamaores e encontre <strong>talentos</strong> para sua empresa
     </p>
     <form onSubmit={hendSubmit}>
     <label htmlFor="email">E-mail *</label>
     <input 
     type="email" 
     id= "email"
     placeholder = "Seu melhor e-mail" 
     />
     <button className="btn" type="submit">Entrar</button>
   </form>
   </div>

 </div>
  );
}

export default App;
