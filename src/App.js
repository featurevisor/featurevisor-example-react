import { useFlag } from "@featurevisor/react";

import logo from "./logo.svg";
import "./App.css";

function App() {
  const isEnabled = useFlag("baz");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://featurevisor.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Featurevisor
        </a>

        <hr />

        <p>
          Featurevisor SDK evaluated <code>baz</code> feature flag as{" "}
          <code>{isEnabled.toString()}</code>
        </p>
      </header>
    </div>
  );
}

export default App;
