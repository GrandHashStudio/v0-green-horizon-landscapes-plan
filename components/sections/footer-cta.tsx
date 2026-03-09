'use client'

import { ArrowRight, Mail, MapPin, Phone, Leaf, TreePine } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ScrollReveal } from '@/components/scroll-reveal'

interface FooterCTASectionProps {
  onOpenBooking: () => void
}

export function FooterCTASection({ onOpenBooking }: FooterCTASectionProps) {
  return (
    <>
      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden bg-forest-600">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <TreePine className="absolute top-10 left-[5%] size-20 text-forest-500/30" />
          <Leaf className="absolute bottom-10 right-[8%] size-16 text-forest-500/40" />
          <Leaf className="absolute top-1/2 left-[10%] size-12 text-forest-500/20 rotate-45" />
          <TreePine className="absolute bottom-20 left-[15%] size-14 text-forest-500/25" />
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="footer-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <circle cx="40" cy="40" r="2" fill="currentColor" className="text-white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#footer-pattern)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform
              <span className="block text-forest-100">Your Outdoor Space?</span>
            </h2>
            <p className="text-lg text-forest-100 max-w-2xl mx-auto mb-10 leading-relaxed">
              Join 150+ Austin homeowners who have already made the switch to sustainable, 
              beautiful landscaping. Your dream yard is just one consultation away.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <Button
              onClick={onOpenBooking}
              size="lg"
              className="h-16 px-10 text-xl font-semibold rounded-full bg-white text-forest-700 hover:bg-forest-50 shadow-xl hover:shadow-2xl transition-all duration-300 animate-pulse-subtle"
            >
              Book Your Free Consultation
              <ArrowRight className="ml-3 size-6" />
            </Button>
            <p className="mt-6 text-forest-100 text-sm">
              No commitment required. We will create a custom plan just for you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-forest-950 border-t border-forest-800 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-forest-600 flex items-center justify-center">
                  <Leaf className="size-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white leading-tight">GreenHorizon</h3>
                  <span className="text-xs text-forest-400 uppercase tracking-wider">Landscapes</span>
                </div>
              </div>
              <p className="text-forest-300 text-sm leading-relaxed mb-4">
                Sustainable landscaping solutions for Austin homeowners. 
                Creating beautiful, water-wise outdoor spaces since 2018.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Contact
              </h4>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="tel:+15125551234" 
                    className="flex items-center gap-3 text-forest-300 hover:text-white transition-colors"
                  >
                    <Phone className="size-4" />
                    <span>(512) 555-1234</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:elias@greenhorizonlandscapes.com" 
                    className="flex items-center gap-3 text-forest-300 hover:text-white transition-colors"
                  >
                    <Mail className="size-4" />
                    <span>elias@greenhorizonlandscapes.com</span>
                  </a>
                </li>
                <li>
                  <div className="flex items-center gap-3 text-forest-300">
                    <MapPin className="size-4" />
                    <span>Serving Greater Austin Area</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Hours */}
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Hours
              </h4>
              <ul className="space-y-2 text-forest-300 text-sm">
                <li className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>8am - 6pm</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span>9am - 4pm</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-forest-800 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-forest-400 text-sm">
              &copy; {new Date().getFullYear()} GreenHorizon Landscapes. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-forest-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-forest-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
