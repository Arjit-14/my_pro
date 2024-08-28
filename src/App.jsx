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
import Instruction from "./Pages/Instruction";
import Call_for_papers from "./Pages/Call_for_papers";
import Important_dates from "./Pages/Important_dates";
import Paper_Submission from "./Pages/Paper_Submission";
import Registration_fee from "./Pages/Registration_fee";
import Publication from "./Pages/Publication";
import Call_for_sponsors from "./Pages/Call_for_sponsors";
import Venue from "./Pages/Venue";
import Visa from "./Pages/Visa";
import Contact_Us from "./Pages/Contact_Us";

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
          <Route path="/instruction" element={<Instruction />} />
          <Route path="/call_for_papers" element={<Call_for_papers />} />
          <Route path="/important_dates" element={<Important_dates />} />
          <Route path="/paper_submission" element={<Paper_Submission />} />
          <Route path="/registration_fee" element={<Registration_fee />} />
          <Route path="/publication" element={<Publication />} />
          <Route path="/call_for_sponsors" element={<Call_for_sponsors />} />
          <Route path="/venue" element={<Venue />} />
          <Route path="/visa" element={<Visa />} />
          <Route path="/contact_us" element={<Contact_Us />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
