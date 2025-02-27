import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="w-full bg-gradient-to-b from-blue-50 to-white py-12 md:py-24 lg:py-32">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Turn Your Research Paper into a Presentation in Seconds
            </h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl">
              Upload your paper, generate slides, and save hours of manual work. Free and easy to use.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link href="/register">
              <Button size="lg" className="gap-2">
                Get Started for Free
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="#features">
              <Button size="lg" variant="outline">
                How It Works
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative h-[400px] w-[400px]">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Research paper to presentation conversion"
              width={400}
              height={400}
              className="rounded-lg object-cover"
              priority
            />
            <div className="absolute -bottom-6 -right-6 h-48 w-64 rounded-lg border bg-background p-4 shadow-lg">
              <div className="mb-2 h-2 w-3/4 rounded bg-blue-200"></div>
              <div className="mb-4 h-2 w-1/2 rounded bg-blue-200"></div>
              <div className="mb-2 h-2 w-full rounded bg-gray-200"></div>
              <div className="mb-2 h-2 w-full rounded bg-gray-200"></div>
              <div className="h-2 w-3/4 rounded bg-gray-200"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

