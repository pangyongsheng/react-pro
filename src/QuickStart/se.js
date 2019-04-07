import React, { Component } from 'react';

// 创建一个 theme Context,  默认 theme 的值为 light
const ThemeContext = React.createContext('light');

function ThemedButton(props) {
  // ThemedButton 组件从 context 接收 theme
  return (
    <ThemeContext.Consumer>
      {theme => <button {...props}>{theme}</button>}
    </ThemeContext.Consumer>
  );
}

// 中间组件
function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

export default class App extends React.Component {
  render() {
    return (
      <ThemeContext.Provider value="qwqwqw">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}