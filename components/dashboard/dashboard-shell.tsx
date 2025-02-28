"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { DashboardNav } from "@/components/dashboard/dashboard-nav"
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar"
import { UserNav } from "@/components/dashboard/user-nav"

interface DashboardShellProps {
  children: React.ReactNode
}

interface UserData {
  name: string
  email: string
  // Add other user properties as needed
}

export function DashboardShell({ children }: DashboardShellProps) {
  const [userData, setUserData] = useState<UserData | null>(null)

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token")
      if (!token) {
        // Redirect to login if no token is found
        window.location.href = "/login"
        return
      }

      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/user`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        if (!response.ok) {
          throw new Error("Failed to fetch user data")
        }

        const data = await response.json()
        setUserData(data)
      } catch (error) {
        console.error("Error fetching user data:", error)
        // Handle error (e.g., show error message, redirect to login)
      }
    }

    fetchUserData()
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-4 md:gap-8">
            <DashboardNav />
          </div>
          <UserNav user={userData} />
        </div>
      </header>
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr] lg:grid-cols-[240px_1fr]">
        <aside className="hidden w-[200px] flex-col md:flex lg:w-[240px]">
          <DashboardSidebar />
        </aside>
        <main className="flex w-full flex-1 flex-col overflow-hidden py-6">{children}</main>
      </div>
    </div>
  )
}

