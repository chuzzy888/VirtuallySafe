import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import YoungPeople from "./pages/YoungPeople";
import Footer from "./components/Footer";
import Parent from "./pages/Parent";
import Educators from "./pages/Educators";
import YoungPeopleResources from "./Resources/YoungPeopleResources";
import ParentResources from "./Resources/ParentResources";
import EducatorsResources from "./Resources/EducatorsResources";
import GeneralResources from "./Resources/GeneralResources";
import SaferGamble from "./Policy/SaferGamble";
import Advocacy from "./Policy/Advocacy";
import Contact from "./pages/Contact";
import Dashboard from "./components/Dashboard";

// A wrapper to conditionally show/hide the Navbar and Footer
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  // Hide Navbar and Footer on specific routes
  const hideNavbarFooter = location.pathname === "/admin";

  return (
    <>
      {!hideNavbarFooter && <Navbar />}
      <main>{children}</main>
      {!hideNavbarFooter && <Footer />}
    </>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/young-people" element={<YoungPeople />} />
          <Route path="/parent" element={<Parent />} />
          <Route path="/educators" element={<Educators />} />
          <Route path="/parent-resources" element={<ParentResources />} />
          <Route path="/educators-resources" element={<EducatorsResources />} />
          <Route path="/general-resources" element={<GeneralResources />} />
          <Route path="/safer-gambling" element={<SaferGamble />} />
          <Route path="/advocacy" element={<Advocacy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Dashboard />} />
          <Route
            path="/young-people-resources"
            element={<YoungPeopleResources />}
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
