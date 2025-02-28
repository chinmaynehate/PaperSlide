"use client"

import { useEffect, useState } from "react"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { UploadCard } from "@/components/dashboard/upload-card"
import { RecentPresentations } from "@/components/dashboard/recent-presentations"

interface Presentation {
  id: string
  title: string
  date: string
  slides: number
}

export default function DashboardPage() {
  const [presentations, setPresentations] = useState<Presentation[]>([])

  useEffect(() => {
    const fetchPresentations = async () => {
      const token = localStorage.getItem("token")
      if (!token) {
        // Redirect to login if no token is found
        window.location.href = "/login"
        return
      }

      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/presentations`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        if (!response.ok) {
          throw new Error("Failed to fetch presentations")
        }

        const data = await response.json()
        setPresentations(data)
      } catch (error) {
        console.error("Error fetching presentations:", error)
        // Handle error (e.g., show error message)
      }
    }

    fetchPresentations()
  }, [])

  return (
    <DashboardShell>
      <DashboardHeader heading="Dashboard" text="Upload a research paper or view your recent presentations." />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <UploadCard />
        <div className="md:col-span-1 lg:col-span-2">
          <RecentPresentations presentations={presentations.slice(0, 3)} />
        </div>
      </div>
    </DashboardShell>
  )
}

