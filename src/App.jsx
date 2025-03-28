import { GoogleAuthProvider } from "firebase/auth";
import Navbar from "./components/Navbar";
import ApplicantProvider from "./context/ApplicantContext";
import AuthProvider from "./context/AuthContext";
import CompanyProvider from "./context/CompanyContext";
import JobProvider from "./context/JobContext";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <CompanyProvider>
      <AuthProvider>
        <JobProvider>
          <ApplicantProvider>
            <div className="p-6 bg-gray-100 overflow-hidden h-full">
              <Navbar />
            </div>
          </ApplicantProvider>
        </JobProvider>
      </AuthProvider>
    </CompanyProvider>
  );
}

export default App;
