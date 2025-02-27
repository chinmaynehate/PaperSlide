"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ChevronLeft, ChevronRight, Download, Edit, Share } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { SlidePreview } from "@/components/dashboard/slide-preview"

export default function PreviewPage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Mock data for slides
  const slides = [
    {
      title: "Title Slide",
      content: "Advanced Machine Learning Techniques for Natural Language Processing",
      type: "title" as const,
    },
    {
      title: "Abstract",
      content:
        "This research explores novel approaches to natural language processing using advanced machine learning techniques...",
      type: "text" as const,
    },
    {
      title: "Introduction",
      content: "Natural Language Processing (NLP) has seen significant advancements in recent years...",
      type: "text" as const,
    },
    {
      title: "Methodology",
      content: "We employed a combination of transformer-based models and reinforcement learning...",
      type: "text" as const,
    },
    {
      title: "Results",
      content: "Our approach achieved a 15% improvement over state-of-the-art methods...",
      type: "chart" as const,
    },
    {
      title: "Discussion",
      content: "The results indicate that our hybrid approach offers significant advantages...",
      type: "text" as const,
    },
    {
      title: "Conclusion",
      content: "We have demonstrated that combining transformer models with reinforcement learning techniques...",
      type: "text" as const,
    },
    {
      title: "References",
      content:
        "1. Smith et al. (2022). Advanced NLP Techniques.\n2. Johnson & Lee (2021). Transformer Models in Practice.",
      type: "references" as const,
    },
    {
      title: "Thank You",
      content: "Questions and Discussion",
      type: "end" as const,
    },
  ]

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  return (
    <DashboardShell>
      <DashboardHeader heading="Presentation Preview" text="Review your generated presentation before downloading.">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Edit className="mr-2 h-4 w-4" />
            Edit
          </Button>
          <Button variant="outline" size="sm">
            <Share className="mr-2 h-4 w-4" />
            Share
          </Button>
          <Button size="sm">
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
        </div>
      </DashboardHeader>
      <div className="mt-8 space-y-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/dashboard">
              <Button variant="outline" size="icon">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <span className="text-sm text-gray-500">
              Slide {currentSlide + 1} of {slides.length}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" onClick={prevSlide} disabled={currentSlide === 0}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={nextSlide} disabled={currentSlide === slides.length - 1}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-3xl">
            <SlidePreview
              title={slides[currentSlide].title}
              content={slides[currentSlide].content}
              slideNumber={currentSlide + 1}
              type={slides[currentSlide].type}
            />
          </div>
        </div>
        <div className="grid grid-cols-5 gap-4 overflow-x-auto pb-4">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`cursor-pointer rounded-lg border p-2 ${
                index === currentSlide ? "border-blue-600 ring-2 ring-blue-200" : ""
              }`}
              onClick={() => setCurrentSlide(index)}
            >
              <div className="h-20 overflow-hidden rounded bg-gray-50 p-2">
                <p className="text-xs font-medium">{slide.title}</p>
                <p className="text-xs text-gray-500 line-clamp-2">{slide.content}</p>
              </div>
              <p className="mt-1 text-center text-xs text-gray-500">Slide {index + 1}</p>
            </div>
          ))}
        </div>
      </div>
    </DashboardShell>
  )
}

