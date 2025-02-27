import { BarChart3 } from "lucide-react"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface SlidePreviewProps {
  title: string
  content: string
  slideNumber: number
  type: "title" | "text" | "chart" | "references" | "end"
}

export function SlidePreview({ title, content, slideNumber, type }: SlidePreviewProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-blue-600 p-4">
        <CardTitle className="text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent className="min-h-[300px] p-6">
        {type === "title" && (
          <div className="flex h-full flex-col items-center justify-center text-center">
            <h2 className="text-2xl font-bold">{content}</h2>
            <p className="mt-6 text-gray-500">Author: John Doe, PhD</p>
            <p className="text-gray-500">University Research Institute</p>
            <p className="mt-4 text-gray-500">February 27, 2025</p>
          </div>
        )}
        {type === "text" && (
          <div className="flex h-full flex-col">
            <p className="text-base">{content}</p>
            <ul className="mt-4 list-disc pl-5 text-base">
              <li>Key point 1</li>
              <li>Key point 2</li>
              <li>Key point 3</li>
            </ul>
          </div>
        )}
        {type === "chart" && (
          <div className="flex h-full flex-col items-center justify-center">
            <BarChart3 className="h-32 w-32 text-blue-600" />
            <p className="mt-6 text-center text-base">{content}</p>
          </div>
        )}
        {type === "references" && (
          <div className="flex h-full flex-col">
            <p className="whitespace-pre-line text-base">{content}</p>
          </div>
        )}
        {type === "end" && (
          <div className="flex h-full flex-col items-center justify-center text-center">
            <h2 className="text-3xl font-bold">{content}</h2>
            <p className="mt-6 text-gray-500">Contact: john.doe@example.com</p>
          </div>
        )}
      </CardContent>
      <CardFooter className="border-t bg-gray-50 p-2 text-xs text-gray-500">Slide {slideNumber}</CardFooter>
    </Card>
  )
}

