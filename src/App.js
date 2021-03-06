import { Routes, Route } from "react-router-dom";
import "./App.css";
import AdminPage from "./pages/AdminPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import AdminSignupPage from "./pages/AdminSignupPage";
import DonorSignupPage from "./pages/DonorSignupPage";
import CoordinatorSignupPage from "./pages/CoordinatorSignupPage";
import ManagementSignupPage from "./pages/ManagementSignupPage";
import LandingPage from "./pages/LandingPage";
import ProtectedRoute from "./pages/ProtectedRoute";
import ManagementPage from "./pages/ManagementPage";
import CoordinatorPage from "./pages/CoordinatorPage";
import DonorPage from "./pages/DonorPage";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import { Suspense } from "react";

function App ()
{
  return (
    <>
      <Suspense>
        <UserAuthContextProvider>
          <Routes>
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <HomePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/Coordinator"
              element={
                <ProtectedRoute>
                  <CoordinatorPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/Management"
              element={
                <ProtectedRoute>
                  <ManagementPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/donor"
              element={
                <ProtectedRoute>
                  <DonorPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminPage />
                </ProtectedRoute>
              }
            />

            <Route path="/login" element={ <LoginPage /> } />
            <Route path="/signup" element={ <SignupPage /> } />
            <Route path="/adminSignup" element={ <AdminSignupPage /> } />
            <Route path="/donorSignup" element={ <DonorSignupPage /> } />
            <Route
              path="/coordinatorSignup"
              element={ <CoordinatorSignupPage /> }
            />
            <Route
              path="/managementSignup"
              element={ <ManagementSignupPage /> }
            />
            <Route path="/" element={ <LandingPage /> } />
            <Route path="/Coordinator" element={ <CoordinatorPage /> } />
          </Routes>
        </UserAuthContextProvider>
      </Suspense>
    </>
  );
}

export default App;
