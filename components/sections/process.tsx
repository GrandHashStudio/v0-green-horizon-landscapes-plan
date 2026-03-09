'use client'

import { Search, Palette, Hammer, Sparkles } from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Discovery',
    description: 'We visit your property, assess soil conditions, sun exposure, and listen to your vision. Together, we identify the perfect approach for your unique space.',
    duration: 'Week 1',
  },
  {
    number: '02',
    icon: Palette,
    title: 'Design',
    description: 'Our designers create a custom plan with plant selections, hardscape elements, and irrigation layout. You get detailed 3D renderings before we break ground.',
    duration: 'Week 2-3',
  },
  {
    number: '03',
    icon: Hammer,
    title: 'Installation',
    description: 'Our expert crew brings your vision to life with precision installation. We handle everything from soil prep to final planting, minimizing disruption to your daily life.',
    duration: 'Week 4-6',
  },
  {
    number: '04',
    icon: Sparkles,
    title: 'Thrive',
    description: 'We provide care instructions and optional maintenance packages to ensure your landscape flourishes. Most plants are fully established within 6-12 months.',
    duration: 'Ongoing',
  },
]

export function ProcessSection() {
  return (
    <section className="py-24 bg-sand-50" id="process">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-sand-200 text-sage-700 text-sm font-medium mb-4">
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-700 mb-6">
              Your Journey to a
              <span className="block text-sage-600">Sustainable Oasis</span>
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              From consultation to completion, we guide you through every step 
              of creating your dream landscape.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-sage-200" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <ScrollReveal key={step.number} delay={index * 150} direction="left">
                <div className="relative text-center lg:text-left">
                  {/* Step Number Circle */}
                  <div className="relative z-10 mx-auto lg:mx-0 w-16 h-16 rounded-full bg-sage-600 flex items-center justify-center mb-6 shadow-lg">
                    <step.icon className="size-7 text-white" />
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-center lg:justify-start gap-3">
                      <span className="text-sm font-bold text-sage-600">{step.number}</span>
                      <span className="text-xs text-slate-400 px-2 py-1 bg-sand-100 rounded-full">
                        {step.duration}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-700">{step.title}</h3>
                    <p className="text-slate-500 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
