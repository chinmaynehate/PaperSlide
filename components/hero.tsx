import { FileText, PresentationIcon } from "lucide-react"

export function Hero() {
  return (
    <div className="w-full bg-gradient-to-b from-blue-50 to-white py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="flex items-center space-x-2 rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-800">
            <span>Research Paper to PowerPoint</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Transform Research Papers into Presentations
          </h1>
          <p className="max-w-[700px] text-gray-500 md:text-xl">
            Upload your research paper and get a professionally formatted PowerPoint presentation in seconds. Save time
            and focus on delivering your research.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
              <FileText className="h-10 w-10 text-blue-600" />
            </div>
            <div className="flex h-12 w-12 items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-600"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </div>
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
              <PresentationIcon className="h-10 w-10 text-blue-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

