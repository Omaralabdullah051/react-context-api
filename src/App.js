import './App.css';
import ClickCounter from './components/ClickCounter';
import Section from './components/Section';
import Counter from './components/Counter';
import React from 'react';
import ThemeContext from './Contexts/themeContext';

export default class App extends React.Component {
  state = {
    theme: 'dark'
  };
  render() {
    const { theme } = this.state;
    return (
      <div className="App">
        <Counter>
          {(count, handleEvent) => (
            <ClickCounter count={count} handleEvent={handleEvent} />
          )}
        </Counter >


        <ThemeContext.Provider value={{ theme: theme }}><Section /></ThemeContext.Provider>

      </div >
    );
  }
}

