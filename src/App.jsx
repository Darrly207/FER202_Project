import Navbar from "./components/Navbar";
import AuthProvider from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div className="pt-7 overflow-x-hidden">
        <Navbar />
      </div>
    </AuthProvider>
  );
}

export default App;
