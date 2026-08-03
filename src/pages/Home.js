import Hero from '../components/Hero/Hero.js';
import Programs from '../components/Programs/Programs.js';
import Compare from '../components/Compare/Compare.js';
import HowItWorks from '../components/HowItWorks/HowItWorks.js';
import FAQ from '../components/FAQ/FAQ.js';
import CountyGrid from '../components/CountyGrid/CountyGrid.js';
import CTA from '../components/CTA/CTA.js';

function Home() {
  return (
    <>
      <Hero />
      <Programs />
      <Compare />
      <HowItWorks />
      <FAQ />
      <CountyGrid />
      <CTA />
    </>
  );
}

export default Home;
