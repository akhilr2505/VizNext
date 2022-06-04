
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import AdminSignupPage from "./pages/AdminSignupPage";
import DonorSignupPage from "./pages/DonorSignupPage";
import CoordinatorSignupPage from "./pages/CoordinatorSignupPage";
import ManagementSignupPage from "./pages/ManagementSignupPage";
import LandingPage from "./pages/LandingPage";
import ProtectedRoute from "./pages/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import {Suspense} from "react"

function App() {
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
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/adminSignup" element={<AdminSignupPage />} />
              <Route path="/donorSignup" element={<DonorSignupPage />} />
              <Route path="/coordinatorSignup" element={<CoordinatorSignupPage />} />
              <Route path="/managementSignup" element={<ManagementSignupPage />} />
              <Route path="/" element={<LandingPage />} />
            </Routes>
          </UserAuthContextProvider>
    </Suspense>
         
        
    </>
  );
}

export default App;