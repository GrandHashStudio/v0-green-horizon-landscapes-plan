'use client'

import { ArrowRight, Droplets, Leaf, Sun, TreePine } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollReveal } from '@/components/scroll-reveal'

interface ServicesSectionProps {
  onOpenBooking: () => void
}

const services = [
  {
    icon: Sun,
    title: 'Sustainable Xeriscaping',
    description: 'Drought-tolerant landscapes that thrive in Austin\'s climate. Reduce water usage by up to 70% while maintaining a lush, beautiful yard year-round.',
    features: ['Native & adapted plants', 'Efficient soil preparation', 'Strategic plant placement'],
  },
  {
    icon: Droplets,
    title: 'Smart Irrigation',
    description: 'Weather-responsive systems that water only when needed. Our smart controllers adjust to rainfall, temperature, and soil moisture automatically.',
    features: ['WiFi-enabled controllers', 'Drip irrigation zones', 'Rainwater harvesting'],
  },
  {
    icon: Leaf,
    title: 'Native Plant Gardens',
    description: 'Create thriving ecosystems with plants native to Central Texas. Support local pollinators while enjoying lower maintenance and natural beauty.',
    features: ['Pollinator-friendly design', 'Seasonal bloom planning', 'Wildlife habitats'],
  },
]

export function ServicesSection({ onOpenBooking }: ServicesSectionProps) {
  return (
    <section className="relative py-24 bg-forest-950 overflow-hidden" id="services">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <TreePine className="absolute top-20 left-[5%] size-16 text-forest-800/30" />
        <Leaf className="absolute bottom-20 right-[8%] size-12 text-forest-700/20" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-forest-800/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-forest-700/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-forest-800 text-forest-200 text-sm font-medium mb-4 border border-forest-700">
              <Leaf className="size-4" />
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Landscapes That Work
              <span className="block text-forest-400">For You & The Planet</span>
            </h2>
            <p className="text-lg text-forest-200 max-w-2xl mx-auto">
              Every project is designed to reduce your environmental footprint while creating 
              outdoor spaces you&apos;ll love for years to come.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 100}>
              <Card className="h-full bg-forest-900/80 backdrop-blur-sm border-forest-700 hover:bg-forest-800/90 hover:border-forest-600 transition-all duration-300">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-forest-600 flex items-center justify-center mb-4">
                    <service.icon className="size-7 text-white" />
                  </div>
                  <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                  <CardDescription className="text-forest-200 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-forest-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-forest-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={400}>
          <div className="text-center">
            <Button
              onClick={onOpenBooking}
              size="lg"
              className="h-14 px-8 text-lg font-semibold rounded-full bg-forest-600 hover:bg-forest-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-subtle"
            >
              Book Your Consultation
              <ArrowRight className="ml-2 size-5" />
            </Button>
            <p className="mt-4 text-sm text-forest-300">
              Let&apos;s discuss which services are right for your property
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
