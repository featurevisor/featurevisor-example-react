import React from "react";
import ReactDOM from "react-dom/client";
import { createInstance } from "@featurevisor/sdk";
import { FeaturevisorProvider } from "@featurevisor/react";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const DATAFILE_URL =
  "https://featurevisor-example-cloudflare.pages.dev/production/featurevisor-tag-all.json";

const datafileContent = await fetch(DATAFILE_URL).then((response) =>
  response.json()
);

const f = createInstance({
  datafile: datafileContent,
  context: { userId: "123" },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FeaturevisorProvider instance={f}>
      <App />
    </FeaturevisorProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
