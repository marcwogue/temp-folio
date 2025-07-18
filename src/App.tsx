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
import FooterNav from './components/mobile/footer';
import Blog from './components/pages/blog';
import Conferences from './components/pages/conferences';
import Contact from './components/pages/contact';
import SpeecialAnimatedPage from './components/ui/SpecialAnimated';
import ContainerAnimatedPage from './components/ui/conteneurdiV';
import Loader from './components/ui/loader';
import Update from './components/pages/update';
import FullscreenStickySection from './components/ui/screener';
import Chat from './components/Api/chat';

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
        className={`col-span-12  relative sm:rounded-2xl  sm:mb-0 sm:ml-[5vw] sm:mr-[5vw] sm:mt-[5vh] sm:row-span-11 p-4  top-0 h-screen sm:h-[90vh] overflow-hidden sm:overflow-auto row-span-9 sm:col-span-11 bg-base-200 ${
          left ? 'lg:col-span-10' : 'lg:col-span-11'
        }`}
      >
        <div className="hidden sm:flex justify-between">
          <Truv />
          <FullscreenToggle className="fixed z-50 bottom-0 ml-[66%] scale-75 hidden sm:block float-end" />
        </div>

        <ContainerAnimatedPage>

            <div className="my-8">
              <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                  <Route path="/" element={<FullscreenStickySection><SpeecialAnimatedPage><Acceuil /></SpeecialAnimatedPage></FullscreenStickySection>} />
                  <Route path="/Education" element={<FullscreenStickySection><SpeecialAnimatedPage><Education /></SpeecialAnimatedPage></FullscreenStickySection>} />
                  <Route path="/Capacites" element={<FullscreenStickySection><SpeecialAnimatedPage><Competences /></SpeecialAnimatedPage></FullscreenStickySection>} />
                  <Route path="/Experience" element={<FullscreenStickySection><SpeecialAnimatedPage><Experience /></SpeecialAnimatedPage></FullscreenStickySection>} />
                  <Route path="/portfolio" element={<FullscreenStickySection><SpeecialAnimatedPage><Portfolio /></SpeecialAnimatedPage></FullscreenStickySection>} />
                  <Route path="/realisations" element={<FullscreenStickySection><SpeecialAnimatedPage><Certifications /></SpeecialAnimatedPage></FullscreenStickySection>} />
                  <Route path="/blog" element={<FullscreenStickySection><SpeecialAnimatedPage><Blog /></SpeecialAnimatedPage></FullscreenStickySection>} />
                  <Route path="/conferences" element={<FullscreenStickySection><SpeecialAnimatedPage><Conferences /></SpeecialAnimatedPage></FullscreenStickySection>} />
                  <Route path="/contact" element={<FullscreenStickySection><SpeecialAnimatedPage><Contact /></SpeecialAnimatedPage></FullscreenStickySection>} />
                  <Route path="/maj" element={<FullscreenStickySection><SpeecialAnimatedPage><Update /></SpeecialAnimatedPage></FullscreenStickySection>} />
                </Routes>
              </AnimatePresence>
            </div>
        </ContainerAnimatedPage>
      </div>
      <Chat/>

      <FooterNav />
    </div>
    </>


  );
}

export default App;
