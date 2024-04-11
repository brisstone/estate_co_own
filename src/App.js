import "./App.css";
import { BrowserRouter, Route, Router, Routes, Switch } from "react-router-dom";
import Hompage from "./views/Homepage/Hompage";
import "antd/dist/antd.css";
import About from "./views/About/About";
import ContactUs from "./views/ContactUs/ContactUs";
import FaqView from "./views/Faq/FaqView";
import PrivacyPolicy from "./views/PrivacyPolicy/PrivacyPolicy";
import TermsAndConditions from "./views/TermsAndConditions/TermsAndConditions";
import LaunderingPolicy from "./views/LaunderingPolicy/LaunderingPolicy";
import Fees from "./views/Fees/Fees";
import SignUp from "./views/SignUp/SignUp";
import EmailVerification from "./views/EmailVerification/EmailVerification";
import CompleteSignUp from "./views/CompleteSignUp/CompleteSignUp";
import Blog from "./views/Blog/Blog";
import BlogDetails from "./views/BlogDetails/BlogDetails";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hompage />}></Route>
          <Route exact path="about" element={<About />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<BlogDetails />} />

          <Route exact path="faq" element={<FaqView />} />
          <Route exact path="privacy-policy" element={<PrivacyPolicy />} />
           <Route exact path="terms-conditions" element={<TermsAndConditions />} />
            <Route exact path="anti-money-laundering-policy" element={<LaunderingPolicy />} />
             <Route exact path="fees" element={<Fees />} />
             <Route exact path="signup/:referralId" element={<SignUp />} />
             <Route exact path="complete-signup/:email" element={<CompleteSignUp />} />
             <Route exact path="email-verification" element={<EmailVerification />} />
            
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
