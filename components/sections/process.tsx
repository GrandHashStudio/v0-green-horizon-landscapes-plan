'use client'

import Image from 'next/image'
import { Search, Palette, Hammer, Sparkles, Leaf } from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Discovery',
    description: 'We visit your property, assess soil conditions, sun exposure, and listen to your vision. Together, we identify the perfect approach for your unique space.',
    duration: 'Week 1',
    image: '/images/process/discovery.jpg',
  },
  {
    number: '02',
    icon: Palette,
    title: 'Design',
    description: 'Our designers create a custom plan with plant selections, hardscape elements, and irrigation layout. You get detailed 3D renderings before we break ground.',
    duration: 'Week 2-3',
    image: '/images/process/design.jpg',
  },
  {
    number: '03',
    icon: Hammer,
    title: 'Installation',
    description: 'Our expert crew brings your vision to life with precision installation. We handle everything from soil prep to final planting, minimizing disruption to your daily life.',
    duration: 'Week 4-6',
    image: '/images/process/installation.jpg',
  },
  {
    number: '04',
    icon: Sparkles,
    title: 'Thrive',
    description: 'We provide care instructions and optional maintenance packages to ensure your landscape flourishes. Most plants are fully established within 6-12 months.',
    duration: 'Ongoing',
    image: '/images/process/thrive.jpg',
  },
]

export function ProcessSection() {
  return (
    <section className="py-24 bg-white" id="process">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-forest-100 text-forest-700 text-sm font-medium mb-4 border border-forest-200">
              <Leaf className="size-4" />
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-700 mb-6">
              Your Journey to a
              <span className="block text-forest-600">Sustainable Oasis</span>
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              From consultation to completion, we guide you through every step 
              of creating your dream landscape.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {steps.map((step, index) => (
            <ScrollReveal key={step.number} delay={index * 150}>
              <div className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}>
                {/* Image */}
                <div className="flex-1 relative">
                  <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg border border-forest-200">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-forest-600 flex items-center justify-center shadow-md flex-shrink-0">
                      <step.icon className="size-7 text-white" />
                    </div>
                    <div>
                      <span className="text-sm font-bold text-forest-600">{step.number}</span>
                      <span className="text-xs text-slate-500 px-3 py-1 bg-forest-50 rounded-full border border-forest-100 ml-2">
                        {step.duration}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-700">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">{step.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
