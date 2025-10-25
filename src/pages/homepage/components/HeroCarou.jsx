import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import img1 from '../../../assets/1.png';
import img2 from '../../../assets/2.png';
import img3 from '../../../assets/3.jpg';
import img4 from '../../../assets/5.webp';

const HeroCarou = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselImages = [img1, img2, img3, img4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
<div className="px-4 sm:px-8 lg:px-20 py-8">
  <section
    className="
      relative 
      min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px]
      w-full overflow-hidden
      mt-[-30px] sm:mt-[60px]
    "
  >
    <AnimatePresence mode="wait">
      <motion.div
        key={currentSlide}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 w-full h-full bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${carouselImages[currentSlide]})`,
          backgroundSize: 'contain',
          mixBlendMode: 'multiply',
        }}
      />
    </AnimatePresence>
  </section>
</div>


  );
};

export default HeroCarou;
