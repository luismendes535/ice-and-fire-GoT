import React from 'react';
import CharactersList from "./containers/CharactersList/CharactersList";
import Header from './components/UI/Header/Header'
import './App.css'
function App() {
  return (
    <div className="App">
      <Header/>
      <CharactersList/>
    </div>
  );
}

export default App;
