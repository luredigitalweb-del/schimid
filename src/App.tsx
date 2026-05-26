import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problems from './components/Problems';
import Services from './components/Services';
import About from './components/About';
import Differentials from './components/Differentials';
import Social from './components/Social';
import Testimonials from './components/Testimonials';
import Location from './components/Location';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-white font-body overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Problems />
        <Services />
        <About />
        <Differentials />
        <Social />
        <Testimonials />
        <FinalCTA />
        <Location />
      </main>
      <Footer />
    </div>
  );
}
