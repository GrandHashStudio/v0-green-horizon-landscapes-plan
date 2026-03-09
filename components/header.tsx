'use client'

import { useState, useEffect } from 'react'
import { Leaf, Menu, X, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface HeaderProps {
  onOpenBooking: () => void
}

export function Header({ onOpenBooking }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Our Work' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#process', label: 'Process' },
    { href: '#faq', label: 'FAQ' },
  ]

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-forest-950/95 backdrop-blur-md shadow-lg' 
          : 'bg-forest-950'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo / Business Name */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-forest-600 flex items-center justify-center group-hover:bg-forest-500 transition-colors">
              <Leaf className="size-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg lg:text-xl font-bold text-white leading-tight">
                GreenHorizon
              </span>
              <span className="text-[10px] lg:text-xs text-forest-300 uppercase tracking-wider leading-tight">
                Landscapes
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-forest-200 hover:text-white transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="tel:+15125551234" 
              className="text-sm text-forest-200 hover:text-white transition-colors"
            >
              (512) 555-1234
            </a>
            <Button
              onClick={onOpenBooking}
              className="bg-forest-600 hover:bg-forest-500 text-white font-semibold px-6 rounded-full"
            >
              Book Consultation
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? (
              <X className="size-6" />
            ) : (
              <Menu className="size-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-forest-800">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-forest-200 hover:text-white transition-colors font-medium py-2"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 border-t border-forest-800">
                <Button
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    onOpenBooking()
                  }}
                  className="w-full bg-forest-600 hover:bg-forest-500 text-white font-semibold rounded-full"
                >
                  Book Consultation
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
