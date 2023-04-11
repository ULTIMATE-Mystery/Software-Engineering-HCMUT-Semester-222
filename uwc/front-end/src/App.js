// import { useState } from "react";
// import { Routes, Route, useNavigate } from "react-router-dom";
// import Topbar from "./scenes/global/Topbar";
// import Sidebar from "./scenes/global/Sidebar";
// import Dashboard from "./scenes/dashboard";
// import Team from "./scenes/team";
// import Invoices from "./scenes/invoices";
// import WorkerInfo from "./scenes/workerinfo";
// import Bar from "./scenes/bar";
// import Form from "./scenes/form";
// import Line from "./scenes/line";
// import Pie from "./scenes/pie";
// import FAQ from "./scenes/faq";
// import Geography from "./scenes/geography";
// import { CssBaseline, ThemeProvider } from "@mui/material";
// import { ColorModeContext, useMode } from "./theme";
// import Calendar from "./scenes/calendar/calendar";
// import LoginPage from "./scenes/login/login";

// function App() {
// 	const [theme, colorMode] = useMode();
// 	const [isSidebar, setIsSidebar] = useState(true);
  
// 	return (
// 	  <ColorModeContext.Provider value={colorMode}>
// 		<ThemeProvider theme={theme}>
// 		  <CssBaseline />
// 		  <div className="app">
// 			<Sidebar isSidebar={isSidebar} />
// 			<main className="content">
// 			  <Topbar setIsSidebar={setIsSidebar} />
// 			  <Routes>
// 				<Route path="/login" element={<LoginPage />} />
// 				<Route path="/" element={<Dashboard />} />
// 				<Route path="/team" element={<Team />} />
// 				<Route path="/workerinfo" element={<WorkerInfo />} />
// 				<Route path="/invoices" element={<Invoices />} />
// 				<Route path="/form" element={<Form />} />
// 				<Route path="/bar" element={<Bar />} />
// 				<Route path="/pie" element={<Pie />} />
// 				<Route path="/line" element={<Line />} />
// 				<Route path="/faq" element={<FAQ />} />
// 				<Route path="/calendar" element={<Calendar />} />
// 				<Route path="/geography" element={<Geography />} />
// 			  </Routes>
// 			</main>
// 		  </div>
// 		</ThemeProvider>
// 	  </ColorModeContext.Provider>
// 	);
//   }
  
// export default App;
  


import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import WorkerInfo from "./scenes/workerinfo";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import LoginPage from "./scenes/login/login";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [authenticated, setAuthenticated] = useState(
	localStorage.getItem("authenticated") === "true"
  );
  
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
		  {authenticated && <Sidebar isSidebar={isSidebar} />}
          <main className="content">
		  {authenticated &&  <Topbar setIsSidebar={setIsSidebar} />}
            <Routes>
              <Route
                path="/login"
				element={
					authenticated ? (
						<Navigate to="/" replace state={{ from: '/' }} />
					) : (
						<LoginPage setAuthenticated={setAuthenticated}/>
					)
				  }
              />
              <Route
                path="/"
                element={
                  authenticated ? (
                    <Dashboard />
                  ) : (
                    <Navigate to="/login" replace state={{ from: '/' }} />
                  )
                }
              />
			  
              <Route
                path="/team"
                element={
                  authenticated ? (
                    <Team />
                  ) : (
                    <Navigate to="/login" replace state={{ from: '/' }} />
                  )
                }
              />
              <Route
                path="/workerinfo"
                element={
                  authenticated ? (
                    <WorkerInfo />
                  ) : (
                    <Navigate to="/login" replace state={{ from: '/' }} />
                  )
                }
              />
              <Route
                path="/invoices"
                element={
                  authenticated ? (
                    <Invoices />
                  ) : (
                    <Navigate to="/login" replace state={{ from: '/' }} />
                  )
                }
              />
              <Route
                path="/form"
                element={
                  authenticated ? (
                    <Form />
                  ) : (
                    <Navigate to="/login" replace state={{ from: '/' }} />
                  )
                }
              />
              <Route
                path="/bar"
                element={
                  authenticated ? (
                    <Bar />
                  ) : (
                    <Navigate to="/login" replace state={{ from: '/' }} />
                  )
                }
              />
              <Route
                path="/pie"
                element={
                  authenticated ? (
                    <Pie />
                  ) : (
                    <Navigate to="/login" replace state={{ from: '/' }} />
                  )
                }
              />
              <Route
                path="/line"
                element={
                  authenticated ? (
                    <Line />
                  ) : (
                    <Navigate to="/login" replace state={{ from: '/' }} />
                  )
                }
              />
              <Route
                path="/faq"
                element={
                  authenticated ? (
                    <FAQ />
                  ) : (
                    <Navigate to="/login" replace state={{ from: '/' }} />
                  )
                }
              />
              <Route
                path="/calendar"
                element={
                  authenticated ? (
                    <Calendar />
                  ) : (
                    <Navigate to="/login" replace state={{ from: '/' }} />
                  )
                }
              />
              <Route
                path="/geography"
                element={
                  authenticated ? (
                    <Geography />
                  ) : (
                    <Navigate to="/login" replace state={{ from: '/' }} />
                  )
                }
              />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
