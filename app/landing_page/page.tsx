"use client"

import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import FeatureDisplay from "../../components/FeatureDisplay";
import Footer from "../../components/Footer";
import { useEffect } from "react";

export default function LandingPage() {
  useEffect(() => {
    // Testimonial carousel functionality
    const setupCarousel = () => {
      const slides = document.querySelectorAll('.testimonial-slide');
      const dots = document.querySelectorAll('.carousel-dot');
      const prev = document.querySelector('button[aria-label="Previous slide"]');
      const next = document.querySelector('button[aria-label="Next slide"]');
      const slidesContainer = document.querySelector('.testimonial-slides');
      
      if (!slides.length || !dots.length || !prev || !next || !slidesContainer) return;
      
      let currentSlide = 0;
      let intervalId;
      const slideCount = slides.length;
      
      // Function to update the carousel position
      const updateCarousel = () => {
        slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // Update active dot
        dots.forEach((dot, index) => {
          if (index === currentSlide) {
            dot.classList.add('bg-indigo-600');
            dot.classList.remove('bg-gray-300');
          } else {
            dot.classList.add('bg-gray-300');
            dot.classList.remove('bg-indigo-600');
          }
        });
      };
      
      // Initialize dots click handlers
      dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
          currentSlide = index;
          updateCarousel();
          resetInterval();
        });
      });
      
      // Initialize prev/next buttons
      prev.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slideCount) % slideCount;
        updateCarousel();
        resetInterval();
      });
      
      next.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slideCount;
        updateCarousel();
        resetInterval();
      });
      
      // Auto-rotation
      const startInterval = () => {
        intervalId = setInterval(() => {
          currentSlide = (currentSlide + 1) % slideCount;
          updateCarousel();
        }, 15000); // 15 seconds
      };
      
      const resetInterval = () => {
        clearInterval(intervalId);
        startInterval();
      };
      
      // Initialize carousel
      updateCarousel();
      startInterval();
    };
    
    // Run setup once the DOM is fully loaded
    if (document.readyState === 'complete') {
      setupCarousel();
    } else {
      window.addEventListener('load', setupCarousel);
      return () => window.removeEventListener('load', setupCarousel);
    }
  }, []);
  
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <FeatureDisplay />
      <Footer />
    </main>
  );
}