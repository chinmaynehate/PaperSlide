import { ArrowRight, FileText, PresentationIcon, Settings, Sparkles } from "lucide-react"

export function FeaturesSection() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Transform your research papers into professional presentations in three simple steps
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
              <FileText className="h-10 w-10 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold">1. Upload Your Paper</h3>
            <p className="text-gray-500 md:text-base/relaxed">
              Simply drag and drop your research paper in PDF or DOCX format. We support papers from all academic
              disciplines.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
              <Sparkles className="h-10 w-10 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold">2. AI Processing</h3>
            <p className="text-gray-500 md:text-base/relaxed">
              Our AI analyzes your paper, extracts key points, figures, and data to create a structured presentation.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
              <PresentationIcon className="h-10 w-10 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold">3. Download Presentation</h3>
            <p className="text-gray-500 md:text-base/relaxed">
              Preview and download your professionally formatted PowerPoint presentation ready for your next talk.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="inline-flex items-center space-x-2 rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
              <Settings className="h-4 w-4" />
              <span>Customizable</span>
            </div>
            <h3 className="text-2xl font-bold">Tailor Your Presentations</h3>
            <p className="text-gray-500 md:text-base/relaxed">
              Choose from different templates, adjust the level of detail, and customize your slides to match your
              presentation style.
            </p>
            <ul className="grid gap-2">
              <li className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-blue-600" />
                <span>Multiple design templates</span>
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-blue-600" />
                <span>Adjustable level of detail</span>
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-blue-600" />
                <span>Edit and rearrange slides</span>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[300px] w-[400px] overflow-hidden rounded-lg border bg-background shadow-lg">
              <div className="absolute left-0 top-0 h-10 w-full border-b bg-gray-50 px-4 py-2">
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-400"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                  <div className="h-3 w-3 rounded-full bg-green-400"></div>
                </div>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-4 p-4">
                <div className="h-32 rounded border bg-gray-100 p-2">
                  <div className="mb-2 h-4 w-3/4 rounded bg-blue-200"></div>
                  <div className="h-3 w-full rounded bg-gray-200"></div>
                  <div className="mt-1 h-3 w-full rounded bg-gray-200"></div>
                  <div className="mt-1 h-3 w-1/2 rounded bg-gray-200"></div>
                </div>
                <div className="h-32 rounded border bg-gray-100 p-2">
                  <div className="mb-2 h-4 w-3/4 rounded bg-blue-200"></div>
                  <div className="h-3 w-full rounded bg-gray-200"></div>
                  <div className="mt-1 h-3 w-full rounded bg-gray-200"></div>
                  <div className="mt-1 h-3 w-1/2 rounded bg-gray-200"></div>
                </div>
                <div className="h-32 rounded border bg-gray-100 p-2">
                  <div className="mb-2 h-4 w-3/4 rounded bg-blue-200"></div>
                  <div className="h-3 w-full rounded bg-gray-200"></div>
                  <div className="mt-1 h-3 w-full rounded bg-gray-200"></div>
                  <div className="mt-1 h-3 w-1/2 rounded bg-gray-200"></div>
                </div>
                <div className="h-32 rounded border bg-gray-100 p-2">
                  <div className="mb-2 h-4 w-3/4 rounded bg-blue-200"></div>
                  <div className="h-3 w-full rounded bg-gray-200"></div>
                  <div className="mt-1 h-3 w-full rounded bg-gray-200"></div>
                  <div className="mt-1 h-3 w-1/2 rounded bg-gray-200"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

