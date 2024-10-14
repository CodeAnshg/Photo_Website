import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './Components/Header';
import MainSection from './Components/MainSection';
import Features from './Components/Features';
import PhotoFeature from './Components/PhotoFeature';
import PhotoGallery from './Components/PhotoGallery';
import Form from './Components/Form';
import Footer from './Components/Footer';
import LoginForm from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/*"
          element={
            <>
              <div id="home">
                <MainSection />
              </div>
              <div id="features">
                <Features />
              </div>
              <div id="pricing">
                <PhotoFeature />
              </div>
              <div id="community">
                <PhotoGallery />
              </div>
              <div id="support">
                <Form />
              </div>
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
