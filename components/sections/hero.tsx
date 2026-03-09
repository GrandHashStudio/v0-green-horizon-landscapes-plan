'use client'

import { ArrowRight, Award, Droplets, Leaf, TreePine } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ScrollReveal } from '@/components/scroll-reveal'

interface HeroSectionProps {
  onOpenBooking: () => void
}

export function HeroSection({ onOpenBooking }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-forest-50 via-white to-forest-50 pt-20">
      {/* Decorative Floating Leaves */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Leaf className="absolute top-32 left-[10%] size-8 text-forest-300/40 animate-float-leaf" style={{ animationDelay: '0s' }} />
        <Leaf className="absolute top-48 right-[15%] size-6 text-forest-400/30 animate-float-leaf" style={{ animationDelay: '1s' }} />
        <TreePine className="absolute bottom-32 left-[5%] size-12 text-forest-200/30 animate-float-leaf" style={{ animationDelay: '2s' }} />
        <Leaf className="absolute bottom-48 right-[8%] size-10 text-forest-300/25 animate-float-leaf" style={{ animationDelay: '3s' }} />
        <TreePine className="absolute top-[40%] left-[3%] size-8 text-forest-200/20 animate-float-leaf" style={{ animationDelay: '4s' }} />
        <Leaf className="absolute top-[35%] right-[5%] size-7 text-forest-300/30 animate-float-leaf" style={{ animationDelay: '5s' }} />
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="leaf-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M40 10 Q55 25 40 45 Q25 25 40 10" fill="currentColor" className="text-forest-800" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#leaf-pattern)" />
        </svg>
      </div>

      {/* Green gradient orbs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-forest-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-forest-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <ScrollReveal>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-forest-100 text-forest-700 text-sm font-medium mb-6 border border-forest-200">
            <Leaf className="size-4" />
            Austin&apos;s Premier Sustainable Landscaping
          </span>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-700 leading-tight mb-6">
            Transform Your Yard Into an
            <span className="block text-forest-600">Urban Oasis</span>
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
            className="h-14 px-10 text-lg font-bold rounded-full bg-forest-600 hover:bg-forest-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 animate-pulse-subtle border-2 border-forest-700"
          >
            Book Your Consultation
            <ArrowRight className="ml-3 size-5" />
          </Button>
          <p className="mt-4 text-sm text-slate-400">
            Free consultation. No obligation. Results guaranteed.
          </p>
        </ScrollReveal>

        {/* Trust Badges */}
        <ScrollReveal delay={400}>
          <div className="mt-16 pt-10 border-t border-forest-200">
            <p className="text-sm text-slate-400 mb-6 uppercase tracking-wider">Trusted & Certified</p>
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
              <div className="flex items-center gap-2 text-slate-600">
                <Award className="size-6 text-forest-600" />
                <span className="text-sm font-medium">ASLA Certified</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <Droplets className="size-6 text-forest-600" />
                <span className="text-sm font-medium">WaterSense Partner</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <Leaf className="size-6 text-forest-600" />
                <span className="text-sm font-medium">Native Plant Society</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Stats */}
        <ScrollReveal delay={500}>
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            <div className="p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-forest-100">
              <p className="text-3xl sm:text-4xl font-bold text-forest-600">150+</p>
              <p className="text-sm text-slate-500">Projects Completed</p>
            </div>
            <div className="p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-forest-100">
              <p className="text-3xl sm:text-4xl font-bold text-forest-600">10K</p>
              <p className="text-sm text-slate-500">Gallons Saved Monthly</p>
            </div>
            <div className="p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-forest-100">
              <p className="text-3xl sm:text-4xl font-bold text-forest-600">20%</p>
              <p className="text-sm text-slate-500">Property Value Boost</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
