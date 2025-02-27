import { Clock, FileText, PresentationIcon, Sparkles } from "lucide-react"

export function Features() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">How It Works</h2>
        <p className="mt-4 text-lg text-gray-500">
          Our AI-powered tool extracts key information from your research paper and creates a professional presentation.
        </p>
      </div>
      <div className="mt-16 grid gap-8 md:grid-cols-3">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
            <FileText className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold">Upload Your Paper</h3>
          <p className="mt-2 text-gray-500">
            Upload your research paper in PDF format. We support papers from all academic disciplines.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
            <Sparkles className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold">AI Processing</h3>
          <p className="mt-2 text-gray-500">
            Our AI analyzes your paper, extracts key points, figures, and data to create a structured presentation.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
            <PresentationIcon className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold">Download Presentation</h3>
          <p className="mt-2 text-gray-500">
            Preview and download your professionally formatted PowerPoint presentation ready for your next talk.
          </p>
        </div>
      </div>
      <div className="mt-16 rounded-lg bg-blue-50 p-8">
        <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 md:mb-0 md:mr-6">
            <Clock className="h-8 w-8 text-blue-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold">Save Hours of Work</h3>
            <p className="mt-2 text-gray-500">
              Creating a presentation from a research paper typically takes 5-10 hours. Our tool does it in minutes,
              saving you valuable time that you can spend on refining your talk or doing more research.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

