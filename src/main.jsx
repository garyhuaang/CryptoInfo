import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app/";
import Provider from "./components/ChackraUI/provider.jsx";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <Provider>
      <main className="app-wrapper">
        <App />
      </main>
    </Provider>
  </QueryClientProvider>
);
