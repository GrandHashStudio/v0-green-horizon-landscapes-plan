'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { HeroSection } from '@/components/sections/hero'
import { ServicesSection } from '@/components/sections/services'
import { BeforeAfterSection } from '@/components/sections/before-after'
import { TestimonialsSection } from '@/components/sections/testimonials'
import { ProcessSection } from '@/components/sections/process'
import { FAQSection } from '@/components/sections/faq'
import { FooterCTASection } from '@/components/sections/footer-cta'
import { BookingModal } from '@/components/booking-modal'
import { FloatingCTA } from '@/components/floating-cta'

export default function HomePage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  const handleOpenBooking = () => {
    setIsBookingOpen(true)
  }

  return (
    <>
      <Header onOpenBooking={handleOpenBooking} />
      <main>
        <HeroSection onOpenBooking={handleOpenBooking} />
        <ServicesSection onOpenBooking={handleOpenBooking} />
        <BeforeAfterSection />
        <TestimonialsSection />
        <ProcessSection />
        <FAQSection />
        <FooterCTASection onOpenBooking={handleOpenBooking} />
      </main>
      
      <BookingModal open={isBookingOpen} onOpenChange={setIsBookingOpen} />
      <FloatingCTA onOpenBooking={handleOpenBooking} />
    </>
  )
}
