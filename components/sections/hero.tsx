'use client'

import { ArrowRight, Award, Droplets, Leaf } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ScrollReveal } from '@/components/scroll-reveal'

interface HeroSectionProps {
  onOpenBooking: () => void
}

export function HeroSection({ onOpenBooking }: HeroSectionProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-sand-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="leaf-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M30 5 Q40 15 30 30 Q20 15 30 5" fill="currentColor" className="text-sage-800" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#leaf-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <ScrollReveal>
          <span className="inline-block px-4 py-2 rounded-full bg-sage-100 text-sage-700 text-sm font-medium mb-6">
            Austin&apos;s Premier Sustainable Landscaping
          </span>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-700 leading-tight mb-6">
            Transform Your Yard Into an
            <span className="block text-sage-600">Urban Oasis</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="text-lg sm:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            Water-wise landscaping that saves you money, increases property value by 15-20%, 
            and creates a stunning outdoor sanctuary. No more brown lawns or sky-high water bills.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <Button
            onClick={onOpenBooking}
            size="lg"
            className="h-14 px-8 text-lg font-semibold rounded-full bg-sage-600 hover:bg-sage-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-subtle"
          >
            Book Your Consultation
            <ArrowRight className="ml-2 size-5" />
          </Button>
          <p className="mt-4 text-sm text-slate-400">
            Free consultation. No obligation. Results guaranteed.
          </p>
        </ScrollReveal>

        {/* Trust Badges */}
        <ScrollReveal delay={400}>
          <div className="mt-16 pt-10 border-t border-sand-300">
            <p className="text-sm text-slate-400 mb-6 uppercase tracking-wider">Trusted & Certified</p>
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
              <div className="flex items-center gap-2 text-slate-500">
                <Award className="size-6 text-sage-600" />
                <span className="text-sm font-medium">ASLA Certified</span>
              </div>
              <div className="flex items-center gap-2 text-slate-500">
                <Droplets className="size-6 text-sage-600" />
                <span className="text-sm font-medium">WaterSense Partner</span>
              </div>
              <div className="flex items-center gap-2 text-slate-500">
                <Leaf className="size-6 text-sage-600" />
                <span className="text-sm font-medium">Native Plant Society</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Stats */}
        <ScrollReveal delay={500}>
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-sage-600">150+</p>
              <p className="text-sm text-slate-500">Projects Completed</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-sage-600">10K</p>
              <p className="text-sm text-slate-500">Gallons Saved Monthly</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-sage-600">20%</p>
              <p className="text-sm text-slate-500">Property Value Boost</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
