import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import HomePage from "./scenes/home";
import WorkerInfo from "./scenes/workerinfo";
import FAQ from "./scenes/faq";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import LoginPage from "./scenes/login/login";
import EditInfor from "./scenes/account";
import SignUpPage from "./scenes/signup/signup";
import ChatsPage from "./scenes/chat/chat";
import Vehicle from "./scenes/vehicles";
import Task from "./scenes/task";
import RouteMap from "./scenes/route";
import SelectWorker from "./scenes/select";
import MCPs from "./scenes/MCPs";

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
  const [vehicle, setVehicle] = useState(['']);
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
                      setVehicle={setVehicle}
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
                    <HomePage allUserAccount={allUserAccount} vehicle={vehicle}/>
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

            <Route
                path="/mcps"
                element={
                  authenticated ? (
                    <MCPs />
                  ) : (
                    <Navigate to="/login" replace state={{ from: '/' }} />
                  )
                }
              />

              <Route
                path="/select"
                element={
                  authenticated ? (
                    <SelectWorker />
                  ) : (
                    <Navigate to="/login" replace state={{ from: '/' }} />
                  )
                }
              />

              <Route
                path="/vehicle"
                element={
                  authenticated ? (
                    <Vehicle />
                  ) : (
                    <Navigate to="/login" replace state={{ from: '/' }} />
                  )
                }
              />

              <Route
                path="/task"
                element={
                  authenticated ? (
                    <Task />
                  ) : (
                    <Navigate to="/login" replace state={{ from: '/' }} />
                  )
                }
              />

              <Route
                path="/route"
                element={
                  authenticated ? (
                    <RouteMap />
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

            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;