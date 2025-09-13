import type { ReactNode } from 'react';
import { ThemeProvider } from '../contexts/ThemeContext';
import AnimatedBackground from './AnimatedBackground';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Products from './Products';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';

interface AppProps {
  children?: ReactNode;
}

const App = ({ children }: AppProps) => {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen">
        <AnimatedBackground />
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Products />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        {children}
      </div>
    </ThemeProvider>
  );
};

export default App;
