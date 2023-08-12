import React from "react";
import ReactDOM from "react-dom/client";
import { createInstance } from "@featurevisor/sdk";
import { FeaturevisorProvider } from "@featurevisor/react";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const DATAFILE_URL =
  "https://featurevisor-example-cloudflare.pages.dev/production/datafile-tag-all.json";

const f = createInstance({
  datafileUrl: DATAFILE_URL,
  onReady: () => console.log("Featurevisor SDK is ready"),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FeaturevisorProvider sdk={f}>
      <App />
    </FeaturevisorProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
