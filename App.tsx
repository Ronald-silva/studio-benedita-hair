import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Specialties from './components/Specialties';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Services from './components/Services';
import FAQ from './components/FAQ';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  return (
    <div className="min-h-screen font-sans text-studio-text antialiased selection:bg-studio-gold selection:text-white">
      <Header onOpenBooking={openBooking} />
      
      <main>
        <Hero onOpenBooking={openBooking} />
        <Specialties />
        <Services onOpenBooking={openBooking} />
        <Gallery />
        <Testimonials />
        <About />
        <FAQ />
        <CTASection onOpenBooking={openBooking} />
      </main>

      <Footer />

      {/* Booking Modal Integration */}
      <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
    </div>
  );
}

export default App;