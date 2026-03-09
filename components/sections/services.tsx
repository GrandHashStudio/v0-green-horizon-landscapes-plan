'use client'

import { ArrowRight, Droplets, Leaf, Sun } from 'lucide-react'
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
    <section className="py-24 bg-sage-50" id="services">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-sage-200 text-sage-700 text-sm font-medium mb-4">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-700 mb-6">
              Landscapes That Work
              <span className="block text-sage-600">For You & The Planet</span>
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Every project is designed to reduce your environmental footprint while creating 
              outdoor spaces you&apos;ll love for years to come.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 100}>
              <Card className="h-full bg-white border-sand-200 hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-sage-100 flex items-center justify-center mb-4">
                    <service.icon className="size-7 text-sage-600" />
                  </div>
                  <CardTitle className="text-xl text-slate-700">{service.title}</CardTitle>
                  <CardDescription className="text-slate-500 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-sage-500" />
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
              className="h-14 px-8 text-lg font-semibold rounded-full bg-sage-600 hover:bg-sage-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-subtle"
            >
              Book Your Consultation
              <ArrowRight className="ml-2 size-5" />
            </Button>
            <p className="mt-4 text-sm text-slate-400">
              Let&apos;s discuss which services are right for your property
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
