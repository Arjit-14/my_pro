import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Committees from "./Pages/Committees";
import Committee_int_advisory from "./Pages/Committee_int_advisory";
import Committee_nat_advisory from "./Pages/Committee_nat_advisory";
import Committee_technical from "./Pages/Committee_technical";
import Committee_stu_volunteer from "./Pages/Committee_stu_volunteer";
import Speakers from "./Pages/Speakers";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/committees" element={<Committees />} />
          <Route path="Committee_int_advisory" element={<Committee_int_advisory />} />
          <Route path="Committee_nat_advisory" element={<Committee_nat_advisory />} />
          <Route path="Committee_technical" element={<Committee_technical />} />   
          <Route path="Committee_stu_volunteer" element={<Committee_stu_volunteer />} />
          <Route path="/speakers" element={<Speakers />} />       
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
