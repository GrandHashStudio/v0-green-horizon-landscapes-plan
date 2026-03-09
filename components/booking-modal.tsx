'use client'

import { useState } from 'react'
import { Loader2, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

interface BookingModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

interface FormData {
  fullName: string
  email: string
  phone: string
  propertyType: string
  projectInterests: string[]
  preferredContact: string
  message: string
}

const projectOptions = [
  { id: 'xeriscaping', label: 'Sustainable Xeriscaping' },
  { id: 'irrigation', label: 'Smart Irrigation' },
  { id: 'native-plants', label: 'Native Plant Gardens' },
]

export function BookingModal({ open, onOpenChange }: BookingModalProps) {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    propertyType: '',
    projectInterests: [],
    preferredContact: 'email',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      setIsSuccess(true)
      setTimeout(() => {
        onOpenChange(false)
        setIsSuccess(false)
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          propertyType: '',
          projectInterests: [],
          preferredContact: 'email',
          message: '',
        })
      }, 3000)
    } catch {
      setError('Something went wrong. Please try again or email us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInterestChange = (interest: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      projectInterests: checked
        ? [...prev.projectInterests, interest]
        : prev.projectInterests.filter((i) => i !== interest),
    }))
  }

  if (isSuccess) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-md">
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="w-16 h-16 rounded-full bg-forest-100 flex items-center justify-center mb-4">
              <CheckCircle2 className="size-8 text-forest-600" />
            </div>
            <DialogTitle className="text-2xl text-slate-700 mb-2">
              Thank You!
            </DialogTitle>
            <DialogDescription className="text-slate-500">
              We have received your consultation request. Elias will reach out within
              24 hours to schedule your free consultation.
            </DialogDescription>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-slate-700">
            Book Your Free Consultation
          </DialogTitle>
          <DialogDescription className="text-slate-500">
            Tell us about your project and we will create a custom plan just for you.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          {/* Name & Email */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name *</Label>
              <Input
                id="fullName"
                required
                minLength={2}
                placeholder="Your name"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, fullName: e.target.value }))
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                required
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
              />
            </div>
          </div>

          {/* Phone & Property Type */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone (Optional)</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="(512) 555-1234"
                value={formData.phone}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, phone: e.target.value }))
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="propertyType">Property Type *</Label>
              <Select
                required
                value={formData.propertyType}
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, propertyType: value }))
                }
              >
                <SelectTrigger id="propertyType" className="w-full">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="residential">Residential</SelectItem>
                  <SelectItem value="commercial">Commercial</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Project Interests */}
          <div className="space-y-3">
            <Label>Project Interests (Optional)</Label>
            <div className="grid sm:grid-cols-3 gap-3">
              {projectOptions.map((option) => (
                <label
                  key={option.id}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <Checkbox
                    checked={formData.projectInterests.includes(option.id)}
                    onCheckedChange={(checked) =>
                      handleInterestChange(option.id, checked as boolean)
                    }
                  />
                  <span className="text-sm text-slate-600">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Preferred Contact */}
          <div className="space-y-3">
            <Label>Preferred Contact Method *</Label>
            <RadioGroup
              value={formData.preferredContact}
              onValueChange={(value) =>
                setFormData((prev) => ({ ...prev, preferredContact: value }))
              }
              className="flex gap-6"
            >
              <label className="flex items-center gap-2 cursor-pointer">
                <RadioGroupItem value="email" />
                <span className="text-sm text-slate-600">Email</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <RadioGroupItem value="phone" />
                <span className="text-sm text-slate-600">Phone</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <RadioGroupItem value="either" />
                <span className="text-sm text-slate-600">Either</span>
              </label>
            </RadioGroup>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message">Tell Us About Your Project (Optional)</Label>
            <Textarea
              id="message"
              placeholder="Describe your vision, challenges, or any specific questions..."
              maxLength={500}
              rows={3}
              value={formData.message}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, message: e.target.value }))
              }
            />
            <p className="text-xs text-slate-400 text-right">
              {formData.message.length}/500
            </p>
          </div>

          {error && (
            <p className="text-sm text-red-600 bg-red-50 p-3 rounded-lg">{error}</p>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-12 text-base font-semibold rounded-full bg-forest-600 hover:bg-forest-700 text-white"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 size-5 animate-spin" />
                Submitting...
              </>
            ) : (
              'Request Free Consultation'
            )}
          </Button>

          <p className="text-xs text-slate-400 text-center">
            By submitting, you agree to our privacy policy. We will never share your
            information.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  )
}
