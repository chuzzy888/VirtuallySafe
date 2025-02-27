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
import ISSF from "./Programs/ISSF";
import Contact from "./pages/Contact";
import Dashboard from "./components/Dashboard";
import Research from "./Programs/Research";
import Programs from "./Programs/Programs";
import ISSC from "./Programs/ISSC";
import CSC from "./Programs/CSC";
import Hacktivate from "./Programs/Hacktivate";
import Competition from "./Programs/Competition";
import YoungFellows from "./Programs/YoungFellows";
import AwarenessCampaign from "./Programs/AwarenessCampaign";
import SaferGamble from "./Programs/SaferGamble";
import ScrollToTop from "./components/ScrollToTop";

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
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/young-people" element={<YoungPeople />} />
            <Route path="/parent" element={<Parent />} />
            <Route path="/educators" element={<Educators />} />
            <Route path="/parent-resources" element={<ParentResources />} />
            <Route
              path="/educators-resources"
              element={<EducatorsResources />}
            />
            <Route path="/general-resources" element={<GeneralResources />} />
            <Route path="/issf" element={<ISSF />} />
            <Route path="/issc" element={<ISSC />} />
            <Route path="/csc" element={<CSC />} />
            <Route path="/hacktivate" element={<Hacktivate />} />
            <Route path="/competition" element={<Competition />} />
            <Route path="/programs-report" element={<Programs />} />
            <Route path="/young-fellows-program" element={<YoungFellows />} />
            <Route path="/awarenes-campaign" element={<AwarenessCampaign />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/safer-gambling" element={<SaferGamble />} />
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/research" element={<Research />} />
            <Route
              path="/young-people-resources"
              element={<YoungPeopleResources />}
            />
          </Routes>
        </ScrollToTop>
      </Layout>
    </Router>
  );
}

export default App;
