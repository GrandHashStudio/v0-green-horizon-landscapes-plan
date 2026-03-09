'use client'

import { Leaf } from 'lucide-react'
import { ComparisonSlider } from '@/components/comparison-slider'
import { ScrollReveal } from '@/components/scroll-reveal'

const projects = [
  {
    id: 1,
    before: '/images/before-after/project1-before.jpg',
    after: '/images/before-after/project1-after.jpg',
    title: 'Henderson Residence',
    location: 'West Austin',
    metrics: {
      water: '65% reduction',
      value: '+18% property value',
    },
  },
  {
    id: 2,
    before: '/images/before-after/project2-before.jpg',
    after: '/images/before-after/project2-after.jpg',
    title: 'Mueller Community Garden',
    location: 'East Austin',
    metrics: {
      water: '70% reduction',
      value: '+22% property value',
    },
  },
]

export function BeforeAfterSection() {
  return (
    <section className="py-24 bg-white" id="portfolio">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-forest-100 text-forest-700 text-sm font-medium mb-4 border border-forest-200">
              <Leaf className="size-4" />
              Our Work
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-700 mb-6">
              See the Transformation
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Drag the slider to see how we transform ordinary lawns into stunning, 
              sustainable landscapes that save water and increase property value.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 150}>
              <div className="space-y-4 p-6 rounded-2xl bg-white border border-forest-200 hover:shadow-lg transition-all">
                <ComparisonSlider
                  beforeImage={project.before}
                  afterImage={project.after}
                />
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-slate-800 text-lg">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-600 font-medium">{project.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-forest-700">
                      {project.metrics.water}
                    </p>
                    <p className="text-sm text-slate-600 font-medium">{project.metrics.value}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
