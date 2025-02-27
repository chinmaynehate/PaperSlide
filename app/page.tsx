import Link from "next/link"
import { ArrowRight, FileText, PresentationIcon, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/landing/hero-section"
import { LandingHeader } from "@/components/landing/landing-header"
import { LandingFooter } from "@/components/landing/landing-footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <LandingHeader />
      <main className="flex-1">
        <HeroSection />
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              How It Works
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <FileText className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">1. Upload Your Paper</h3>
                <p className="text-gray-500">Simply upload your research paper in PDF or DOCX format.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <Sparkles className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">2. AI Processing</h3>
                <p className="text-gray-500">Our AI analyzes your paper and extracts key information.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <PresentationIcon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">3. Get Your Slides</h3>
                <p className="text-gray-500">Preview and download your professionally formatted presentation.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-blue-50 py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to save hours on presentation creation?
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl">
                Join researchers who are already using PaperSlide to create beautiful presentations in seconds.
              </p>
              <Link href="/register">
                <Button size="lg" className="mt-4 gap-2">
                  Get Started Free
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <LandingFooter />
    </div>
  )
}

