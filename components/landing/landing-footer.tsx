import Link from "next/link"

import { Logo } from "@/components/ui/logo"

export function LandingFooter() {
  return (
    <footer className="w-full border-t bg-gray-50 py-12">
      <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-4">
        <div className="flex flex-col space-y-4">
          <Link href="/" className="flex items-center gap-2">
            <Logo className="h-6 w-6" />
            <span className="text-lg font-bold">PaperSlide</span>
          </Link>
          <p className="text-sm text-gray-500">
            Transform your research papers into professional presentations in seconds.
          </p>
        </div>
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-medium">Product</h3>
          <nav className="flex flex-col space-y-2">
            <Link href="#features" className="text-sm text-gray-500 hover:text-gray-900">
              Features
            </Link>
            <Link href="#examples" className="text-sm text-gray-500 hover:text-gray-900">
              Examples
            </Link>
            <Link href="/pricing" className="text-sm text-gray-500 hover:text-gray-900">
              Pricing
            </Link>
          </nav>
        </div>
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-medium">Company</h3>
          <nav className="flex flex-col space-y-2">
            <Link href="/about" className="text-sm text-gray-500 hover:text-gray-900">
              About
            </Link>
            <Link href="/blog" className="text-sm text-gray-500 hover:text-gray-900">
              Blog
            </Link>
            <Link href="/contact" className="text-sm text-gray-500 hover:text-gray-900">
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-medium">Legal</h3>
          <nav className="flex flex-col space-y-2">
            <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-900">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-900">
              Privacy Policy
            </Link>
          </nav>
        </div>
      </div>
      <div className="container mt-8 border-t pt-8 px-4 md:px-6">
        <p className="text-center text-sm text-gray-500">© 2025 PaperSlide. All rights reserved.</p>
      </div>
    </footer>
  )
}

