import logo from "./logo.svg";
import "./App.css";

const name = prompt("Enter your name:");

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <h1>Hello World</h1>
          <p>{name}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
