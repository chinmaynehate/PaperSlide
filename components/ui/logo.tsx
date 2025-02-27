import type React from "react"
import { PresentationIcon } from "lucide-react"

import { cn } from "@/lib/utils"

interface LogoProps extends React.SVGProps<SVGSVGElement> {}

export function Logo({ className, ...props }: LogoProps) {
  return (
    <div className={cn("text-primary", className)} {...props}>
      <PresentationIcon className="h-full w-full" />
    </div>
  )
}

