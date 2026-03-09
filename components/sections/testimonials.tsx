'use client'

import { Star, Quote, Leaf } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { ScrollReveal } from '@/components/scroll-reveal'

const testimonials = [
  {
    id: 1,
    name: 'Marcus T.',
    location: 'Tarrytown',
    rating: 5,
    quote: 'Our water bill dropped by $150/month, and our home appraised for $45,000 more than we expected. The native plant garden attracts hummingbirds and butterflies every morning. Elias and his team transformed our dried-up lawn into the most beautiful yard on the block.',
    projectType: 'Full Xeriscaping',
    image: '/images/testimonials/marcus.jpg',
  },
  {
    id: 2,
    name: 'Sarah L.',
    location: 'South Congress',
    rating: 5,
    quote: 'As a busy professional, I needed a yard that looked amazing without constant maintenance. GreenHorizon delivered exactly that. The smart irrigation system handles everything, and I spend maybe 30 minutes a month on upkeep. Worth every penny.',
    projectType: 'Smart Irrigation + Native Plants',
    image: '/images/testimonials/sarah.jpg',
  },
  {
    id: 3,
    name: 'The Henderson Family',
    location: 'West Lake Hills',
    rating: 5,
    quote: 'We wanted our kids to have a safe, beautiful outdoor space that was also environmentally responsible. The team created zones for play, gardening, and relaxation — all without any toxic chemicals. Our neighbors keep asking who did our landscaping!',
    projectType: 'Family-Friendly Sustainable Design',
    image: '/images/testimonials/henderson.jpg',
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`size-4 ${
            i < rating ? 'fill-forest-500 text-forest-500' : 'fill-slate-200 text-slate-200'
          }`}
        />
      ))}
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-forest-50" id="testimonials">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-forest-200 text-forest-700 text-sm font-medium mb-4 border border-forest-300">
              <Leaf className="size-4" />
              Client Stories
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-700 mb-6">
              Hear From Our
              <span className="block text-forest-600">Happy Homeowners</span>
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Real stories from Austin families who transformed their outdoor spaces 
              with GreenHorizon Landscapes.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.id} delay={index * 100}>
              <Card className="h-full bg-white border-forest-200 hover:shadow-lg hover:border-forest-300 transition-all duration-300">
                <CardContent className="pt-6">
                  <Quote className="size-10 text-forest-200 mb-4" />
                  <p className="text-slate-600 leading-relaxed mb-6">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="border-t border-forest-100 pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-slate-700">{testimonial.name}</p>
                        <p className="text-sm text-slate-500">{testimonial.location}</p>
                      </div>
                      <StarRating rating={testimonial.rating} />
                    </div>
                    <p className="text-xs text-forest-600 mt-2 font-medium">
                      {testimonial.projectType}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={400}>
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-sm border border-forest-200">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-forest-200 border-2 border-white flex items-center justify-center text-xs font-medium text-forest-700"
                  >
                    {['M', 'S', 'H', '+'][i - 1]}
                  </div>
                ))}
              </div>
              <span className="text-sm text-slate-600">
                Join <strong className="text-forest-600">150+</strong> happy Austin homeowners
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
