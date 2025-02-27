import Link from "next/link"

import { Logo } from "@/components/ui/logo"

export function DashboardNav() {
  return (
    <div className="flex items-center gap-2">
      <Link href="/" className="flex items-center gap-2">
        <Logo className="h-6 w-6" />
        <span className="text-lg font-bold">PaperSlide</span>
      </Link>
    </div>
  )
}

