import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Jobs from "./Components/Jobs";
import JobDetails from "./Components/JobDetails";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="jobs" element={<Jobs />} />
        </Route>
        <Route path="/job-details/:id" element={<JobDetails />} />      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();