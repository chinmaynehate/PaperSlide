import Link from "next/link"
import { ArrowLeft, Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SlidePreview } from "@/components/slide-preview"

export default function PreviewPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link href="/">
            <Button variant="outline" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-2xl font-bold">Presentation Preview</h1>
        </div>
        <Button className="flex items-center space-x-2">
          <Download className="h-4 w-4" />
          <span>Download PowerPoint</span>
        </Button>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <SlidePreview
          title="Title Slide"
          content="Advanced Machine Learning Techniques for Natural Language Processing"
          slideNumber={1}
          type="title"
        />
        <SlidePreview
          title="Abstract"
          content="This research explores novel approaches to natural language processing using advanced machine learning techniques..."
          slideNumber={2}
          type="text"
        />
        <SlidePreview
          title="Introduction"
          content="Natural Language Processing (NLP) has seen significant advancements in recent years..."
          slideNumber={3}
          type="text"
        />
        <SlidePreview
          title="Methodology"
          content="We employed a combination of transformer-based models and reinforcement learning..."
          slideNumber={4}
          type="text"
        />
        <SlidePreview
          title="Results"
          content="Our approach achieved a 15% improvement over state-of-the-art methods..."
          slideNumber={5}
          type="chart"
        />
        <SlidePreview
          title="Discussion"
          content="The results indicate that our hybrid approach offers significant advantages..."
          slideNumber={6}
          type="text"
        />
        <SlidePreview
          title="Conclusion"
          content="We have demonstrated that combining transformer models with reinforcement learning techniques..."
          slideNumber={7}
          type="text"
        />
        <SlidePreview
          title="References"
          content="1. Smith et al. (2022). Advanced NLP Techniques.\n2. Johnson & Lee (2021). Transformer Models in Practice."
          slideNumber={8}
          type="references"
        />
        <SlidePreview title="Thank You" content="Questions and Discussion" slideNumber={9} type="end" />
      </div>
    </div>
  )
}

