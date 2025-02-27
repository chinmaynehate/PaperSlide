import Image from "next/image"

import { Card, CardContent } from "@/components/ui/card"

export function TestimonialsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Users Say</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Researchers and academics love how PaperSlide saves them time and effort
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          <TestimonialCard
            quote="PaperSlide saved me hours of work preparing for my conference presentation. The slides were professional and captured all the key points from my research."
            name="Dr. Sarah Johnson"
            title="Professor of Biology"
            image="/placeholder.svg?height=80&width=80"
          />
          <TestimonialCard
            quote="As a PhD student, I'm always short on time. This tool helped me create presentation slides from my paper in minutes instead of days."
            name="Michael Chen"
            title="PhD Candidate, Computer Science"
            image="/placeholder.svg?height=80&width=80"
          />
          <TestimonialCard
            quote="The quality of the slides generated is impressive. It extracted all the important data and even created charts from my tables."
            name="Dr. Emily Rodriguez"
            title="Research Scientist"
            image="/placeholder.svg?height=80&width=80"
          />
        </div>
      </div>
    </section>
  )
}

interface TestimonialCardProps {
  quote: string
  name: string
  title: string
  image: string
}

function TestimonialCard({ quote, name, title, image }: TestimonialCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col space-y-4">
          <p className="text-gray-500">"{quote}"</p>
          <div className="flex items-center space-x-4">
            <Image src={image || "/placeholder.svg"} alt={name} width={40} height={40} className="rounded-full" />
            <div>
              <h4 className="font-semibold">{name}</h4>
              <p className="text-sm text-gray-500">{title}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

