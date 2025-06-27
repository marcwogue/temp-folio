import Truv from './components/ui/truv';
import Head from './head';
import Acceuil from './components/pages/acceuil';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AnimatePresence } from "framer-motion";

import Education from './components/pages/Education';
import FullscreenToggle from './components/ui/fullscreen';
import Competences from './components/pages/competences';
import Experience from './components/pages/experience';
import Portfolio from './components/pages/portfolio';
import Certifications from './components/pages/certifications';
import FooterNav from './components/ui/footer';
import Blog from './components/pages/blog';
import Conferences from './components/pages/conferences';
import Contact from './components/pages/contact';
import SpeecialAnimatedPage from './components/ui/SpecialAnimated';
import ContainerAnimatedPage from './components/ui/conteneurdiV';
import Loader from './components/ui/loader';
import Update from './components/pages/update';

function App() {
  const location = useLocation();
  const [isLoading,setStop] = useState(true);

  useEffect(() => {
      const timer = setTimeout(() => {
        setStop(false)
      }, 1000);
  
    return () => {
      clearTimeout(timer)
    }
  }, [])
  

  const [left, setLeft] = useState(() => {
    const stored = localStorage.getItem("lefty");
    return stored ? JSON.parse(stored) : false;
  });
  const handlelift = () => {
    const newval = !left;
    setLeft(newval);
    localStorage.setItem('lefty', JSON.stringify(newval));
    console.log(left);
  };

  return (
    <>
     <AnimatePresence>
        {isLoading && <Loader />}
      </AnimatePresence>

      <div className="grid grid-rows-12 grid-cols-12 h-[100vh]">
      <Head value={left} fonc={handlelift} />

      <div
        className={`col-span-12 sm:rounded-2xl sm:ml-[5vw] sm:mr-[5vw] sm:mt-[5vh] sm:row-span-11 p-4 overflow-scroll row-span-9 sm:col-span-11 bg-base-200 ${
          left ? 'lg:col-span-10' : 'lg:col-span-11'
        }`}
      >
        <div className="flex justify-between">
          <Truv />
          <FullscreenToggle className="fixed z-50 bottom-0 ml-[66%] scale-75 hidden sm:block float-end" />
        </div>

        <ContainerAnimatedPage>

            <div className="m-8">
              <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                  <Route path="/" element={<SpeecialAnimatedPage><Acceuil /></SpeecialAnimatedPage>} />
                  <Route path="/Education" element={<SpeecialAnimatedPage><Education /></SpeecialAnimatedPage>} />
                  <Route path="/Capacites" element={<SpeecialAnimatedPage><Competences /></SpeecialAnimatedPage>} />
                  <Route path="/Experience" element={<SpeecialAnimatedPage><Experience /></SpeecialAnimatedPage>} />
                  <Route path="/portfolio" element={<SpeecialAnimatedPage><Portfolio /></SpeecialAnimatedPage>} />
                  <Route path="/realisations" element={<SpeecialAnimatedPage><Certifications /></SpeecialAnimatedPage>} />
                  <Route path="/blog" element={<SpeecialAnimatedPage><Blog /></SpeecialAnimatedPage>} />
                  <Route path="/conferences" element={<SpeecialAnimatedPage><Conferences /></SpeecialAnimatedPage>} />
                  <Route path="/contact" element={<SpeecialAnimatedPage><Contact /></SpeecialAnimatedPage>} />
                  <Route path="/maj" element={<SpeecialAnimatedPage><Update /></SpeecialAnimatedPage>} />
                </Routes>
              </AnimatePresence>
            </div>
        </ContainerAnimatedPage>
      </div>

      <FooterNav />
    </div>
    </>


  );
}

export default App;
