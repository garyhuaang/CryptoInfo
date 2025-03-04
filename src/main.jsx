import { createRoot } from "react-dom/client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import "./index.css";
import App from "./app/";
import Provider from "./components/ChackraUI/provider.jsx";

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
