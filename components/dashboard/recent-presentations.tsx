import Link from "next/link"
import { ArrowRight, Download, MoreHorizontal, PresentationIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface RecentPresentationsProps {
  limit?: number
}

export function RecentPresentations({ limit = 5 }: RecentPresentationsProps) {
  // Mock data for recent presentations
  const presentations = [
    {
      id: "1",
      title: "Quantum Computing Advances",
      date: "2025-02-15",
      slides: 12,
    },
    {
      id: "2",
      title: "Climate Change Analysis",
      date: "2025-02-10",
      slides: 15,
    },
    {
      id: "3",
      title: "AI Ethics Framework",
      date: "2025-02-05",
      slides: 9,
    },
  ].slice(0, limit)

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Recent Presentations</CardTitle>
          <CardDescription>Your recently created presentations</CardDescription>
        </div>
        <Link href="/dashboard/presentations">
          <Button variant="outline" size="sm" className="gap-1">
            View All
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {presentations.map((presentation) => (
            <div key={presentation.id} className="flex items-center justify-between rounded-lg border p-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                  <PresentationIcon className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium">{presentation.title}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(presentation.date).toLocaleDateString()} • {presentation.slides} slides
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <Download className="h-4 w-4" />
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View</DropdownMenuItem>
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      {presentations.length === 0 && (
        <CardFooter className="border-t bg-gray-50 px-6 py-8">
          <div className="flex w-full flex-col items-center justify-center text-center">
            <PresentationIcon className="h-10 w-10 text-gray-400" />
            <h3 className="mt-4 text-lg font-medium">No presentations yet</h3>
            <p className="mt-2 text-sm text-gray-500">Upload your first research paper to create a presentation.</p>
            <Link href="/dashboard/upload" className="mt-4">
              <Button>Upload Paper</Button>
            </Link>
          </div>
        </CardFooter>
      )}
    </Card>
  )
}

