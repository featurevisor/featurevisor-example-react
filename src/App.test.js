import { render, screen } from "@testing-library/react";
import { FeaturevisorProvider } from "@featurevisor/react";
import { createFeaturevisor } from "@featurevisor/sdk";

import App from "./App";

test("evaluates a feature with the provided Featurevisor instance", () => {
  const f = createFeaturevisor({
    datafile: {
      schemaVersion: "2",
      revision: "1",
      features: {
        baz: {
          key: "baz",
          bucketBy: "userId",
          traffic: [
            {
              key: "1",
              segments: "*",
              percentage: 100000,
              allocation: [],
            },
          ],
          hash: "baz",
        },
      },
      segments: {},
    },
    context: { userId: "123" },
    logLevel: "fatal",
  });

  const { unmount } = render(
    <FeaturevisorProvider instance={f}>
      <App />
    </FeaturevisorProvider>
  );

  expect(screen.getByText("Learn Featurevisor")).toBeInTheDocument();
  expect(screen.getByText("true")).toBeInTheDocument();

  unmount();
  f.close();
});
