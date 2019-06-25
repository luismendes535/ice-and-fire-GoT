import React from "react";
import CharactersList from "./containers/CharactersList/CharactersList";
import Header from "./components/UI/Header/Header";
import classes from "./App.module.scss";;
const App = () => {
  return (
    <div className={classes.App}>
      <Header />
      <CharactersList />
    </div>
  );
};

export default App;
