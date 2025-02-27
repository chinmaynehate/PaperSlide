import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { UploadCard } from "@/components/dashboard/upload-card"
import { RecentPresentations } from "@/components/dashboard/recent-presentations"

export default function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Dashboard" text="Upload a research paper or view your recent presentations." />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <UploadCard />
        <div className="md:col-span-1 lg:col-span-2">
          <RecentPresentations limit={3} />
        </div>
      </div>
    </DashboardShell>
  )
}

