import TopBar from './components/TopBar/TopBar.js';
import Header from './components/Header/Header.js';
import Hero from './components/Hero/Hero.js';
import Programs from './components/Programs/Programs.js';
import HowItWorks from './components/HowItWorks/HowItWorks.js';
import CTA from './components/CTA/CTA.js';
import Footer from './components/Footer/Footer.js';
import Analytics from './components/Analytics/Analytics.js';

function App() {
  return (
    <>
      <Analytics />
      <TopBar />
      <Header />
      <main>
        <Hero />
        <Programs />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
