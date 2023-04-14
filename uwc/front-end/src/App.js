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
import EditInfor from "./scenes/account";
import SignUpPage from "./scenes/signup/signup";
import ChatsPage from "./scenes/chat/chat";
import WorkerPermission from "./components/Worker/workerPermission";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [authenticated, setAuthenticated] = useState(
	  localStorage.getItem("authenticated") === "false"
  );

  const [allUserAccount, setAllUserAccount] = useState({ allUserAccount: null });
  const [userID, setUserID] = useState({ userID: null });
  const [userLogin, setUserLogin] = useState({userLogin: null});
  const [userAccount, setUserAccount] = useState([]); 
  const [user, setUser] = useState(undefined);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
		  {authenticated && <Sidebar userLogin = {userLogin} isSidebar={isSidebar} />}
          <main className="content">
		  {authenticated &&  <Topbar setIsSidebar={setIsSidebar} setAuthenticated={setAuthenticated}/>}
            <Routes>
              <Route
                path="/login"
                element={
                  authenticated ? (
                    <Navigate to="/" replace state={{ from: '/' }} />
                  ) : (
                    <LoginPage 
                      setAuthenticated={setAuthenticated}
                      setUserID={setUserID}
                      setAllUserAccount={setAllUserAccount}
                      setUserLogin={setUserLogin}
                      setUserAccount={setUserAccount}
                      setUser={setUser}
                    />
                  )
                  }
              />

              <Route path="/signup" element={<SignUpPage/>} />

              <Route
                path="/account"
                element={
                  authenticated ? (
                    <EditInfor userAccount={userAccount} setUserAccount={setUserAccount}
                    />
                  ) : (
                    <Navigate to="/login" replace state={{ from: '/' }} />
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
                path="/chat"
                element={
                  authenticated ? (
                    <ChatsPage user={user}/>
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
                    <WorkerInfo 
                    setAllUserAccount={setAllUserAccount}
                    setUserLogin={setUserLogin}
                    userID={userID}
                    />
                  ) : (
                    <Navigate to="/login" replace state={{ from: '/' }} />
                  )
                }
              />

              {/* <Route
                path="/worker_permission"
                element={
                  authenticated ? (
                    <WorkerPermission />
                  ) : (
                    <Navigate to="/login" replace state={{ from: '/' }} />
                  )
                }
              /> */}

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