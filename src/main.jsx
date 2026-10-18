import React from "react";
import ReactDOM from "react-dom/client";
import { createFeaturevisor } from "@featurevisor/sdk";
import { FeaturevisorProvider } from "@featurevisor/react";

import "./index.css";
import App from "./App";

const DATAFILE_URL =
  "https://featurevisor-example-cloudflare.pages.dev/production/featurevisor-tag-all.json";

const response = await fetch(DATAFILE_URL);

if (!response.ok) {
  throw new Error(`Failed to fetch datafile: HTTP ${response.status}`);
}

const datafileContent = await response.json();

const f = createFeaturevisor({
  datafile: datafileContent,
  context: { userId: "123" },
});

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <FeaturevisorProvider instance={f}>
      <App />
    </FeaturevisorProvider>
  </React.StrictMode>
);
