'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, Leaf } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface FloatingCTAProps {
  onOpenBooking: () => void
}

export function FloatingCTA({ onOpenBooking }: FloatingCTAProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past 100vh (the hero section)
      const scrollThreshold = window.innerHeight
      setIsVisible(window.scrollY > scrollThreshold)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Check initial position

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 p-4 bg-forest-950/95 backdrop-blur-sm border-t border-forest-800 shadow-lg md:hidden transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
      style={{
        willChange: 'transform',
      }}
      role="complementary"
      aria-label="Book consultation"
    >
      <Button
        onClick={onOpenBooking}
        className="w-full h-12 text-base font-semibold rounded-full bg-forest-600 hover:bg-forest-500 text-white shadow-md animate-pulse-subtle"
      >
        <Leaf className="mr-2 size-4" />
        Book Your Consultation
        <ArrowRight className="ml-2 size-5" />
      </Button>
    </div>
  )
}
