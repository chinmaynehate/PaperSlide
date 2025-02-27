"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { FileText, Home, PresentationIcon, Settings, Upload } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <nav className="grid items-start gap-2 py-4">
      <Link href="/dashboard">
        <Button variant="ghost" className={cn("w-full justify-start", pathname === "/dashboard" && "bg-accent")}>
          <Home className="mr-2 h-4 w-4" />
          Dashboard
        </Button>
      </Link>
      <Link href="/dashboard/upload">
        <Button variant="ghost" className={cn("w-full justify-start", pathname === "/dashboard/upload" && "bg-accent")}>
          <Upload className="mr-2 h-4 w-4" />
          Upload Paper
        </Button>
      </Link>
      <Link href="/dashboard/presentations">
        <Button
          variant="ghost"
          className={cn("w-full justify-start", pathname === "/dashboard/presentations" && "bg-accent")}
        >
          <PresentationIcon className="mr-2 h-4 w-4" />
          My Presentations
        </Button>
      </Link>
      <Link href="/dashboard/papers">
        <Button variant="ghost" className={cn("w-full justify-start", pathname === "/dashboard/papers" && "bg-accent")}>
          <FileText className="mr-2 h-4 w-4" />
          My Papers
        </Button>
      </Link>
      <Link href="/dashboard/settings">
        <Button
          variant="ghost"
          className={cn("w-full justify-start", pathname === "/dashboard/settings" && "bg-accent")}
        >
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </Button>
      </Link>
    </nav>
  )
}

