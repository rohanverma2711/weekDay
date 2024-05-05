import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import Filters from "./components/Filters";
import JobList from "./components/JobList";
import { Box } from "@mui/material";
import "./App.css";

const theme = createTheme({
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
});

function App() {
  const [filters, setFilters] = useState({
    role: [],
    experience: [],
    remote: [],
    salary: null,
    location: [],
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Box display="flex" justifyContent="center" sx={{ p: 7 }}>
          <Filters filters={filters} setFilters={setFilters} />
        </Box>
        <JobList filters={filters} />
      </div>
    </ThemeProvider>
  );
}

export default App;