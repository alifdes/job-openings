import { Routes, Route } from "react-router-dom";
import JobDetails from "./pages/JobDetails";
import { QueryClient, QueryClientProvider } from "react-query";
import JobListing from "./pages/JobsListing";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Routes>
          <Route path="/" element={<JobListing />} />
          <Route path="/jobs/:id" element={<JobDetails />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
