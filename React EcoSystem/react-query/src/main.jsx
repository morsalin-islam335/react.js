import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// const queryClient = new QueryClient(); // this is without global stale time
const queryClient = new QueryClient({
  DefaultOptions: {
    queries: {
      // staleTime: Infinity,
      staleTime: 5000, // it will refetch after each 5 seconds
      // and this is from global scope
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
