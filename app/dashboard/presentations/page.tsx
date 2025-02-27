import Link from "next/link"
import { Download, Edit, MoreHorizontal, PresentationIcon, Plus, Search, Trash } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function PresentationsPage() {
  // Mock data for presentations
  const presentations = [
    {
      id: "1",
      title: "Quantum Computing Advances",
      date: "2025-02-15",
      slides: 12,
      status: "completed",
    },
    {
      id: "2",
      title: "Climate Change Analysis",
      date: "2025-02-10",
      slides: 15,
      status: "completed",
    },
    {
      id: "3",
      title: "AI Ethics Framework",
      date: "2025-02-05",
      slides: 9,
      status: "completed",
    },
    {
      id: "4",
      title: "Blockchain Applications",
      date: "2025-01-28",
      slides: 12,
      status: "completed",
    },
    {
      id: "5",
      title: "Cybersecurity Protocols",
      date: "2025-01-20",
      slides: 10,
      status: "completed",
    },
  ]

  return (
    <DashboardShell>
      <DashboardHeader heading="My Presentations" text="Manage your generated presentations.">
        <div className="flex items-center gap-2">
          <Link href="/dashboard/upload">
            <Button size="sm" className="gap-1">
              <Plus className="h-4 w-4" />
              New Presentation
            </Button>
          </Link>
        </div>
      </DashboardHeader>
      <div className="mt-4 space-y-4">
        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input placeholder="Search presentations..." className="pl-8" />
          </div>
          <Button variant="outline" size="sm">
            Filter
          </Button>
        </div>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Slides</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {presentations.map((presentation) => (
                <TableRow key={presentation.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      <PresentationIcon className="h-4 w-4 text-blue-600" />
                      <span>{presentation.title}</span>
                    </div>
                  </TableCell>
                  <TableCell>{new Date(presentation.date).toLocaleDateString()}</TableCell>
                  <TableCell>{presentation.slides}</TableCell>
                  <TableCell>
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                      {presentation.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="icon">
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Link
                              href={`/dashboard/preview?id=${presentation.id}`}
                              className="flex w-full items-center"
                            >
                              View
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem>Rename</DropdownMenuItem>
                          <DropdownMenuItem>Duplicate</DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            <Trash className="mr-2 h-4 w-4" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </DashboardShell>
  )
}

