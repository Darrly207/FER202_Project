import Navbar from "./components/Navbar";
import ApplicantProvider from "./context/ApplicantContext";
import AuthProvider from "./context/AuthContext";
import CompanyProvider from "./context/CompanyContext";
import JobProvider from "./context/jobContext";

function App() {
  return (
    <AuthProvider>
      <CompanyProvider>
        <JobProvider>
          <ApplicantProvider>
            <div className="p-6 overflow-x-hidden">
              <Navbar />
            </div>
          </ApplicantProvider>
        </JobProvider>
      </CompanyProvider>
    </AuthProvider>
  );
}

export default App;
