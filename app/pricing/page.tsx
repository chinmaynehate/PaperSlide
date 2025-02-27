import Link from "next/link"
import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { LandingHeader } from "@/components/landing/landing-header"
import { LandingFooter } from "@/components/landing/landing-footer"

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <LandingHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Simple, Transparent Pricing
            </h1>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-center">
              <div className="flex flex-col p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Free</h3>
                <p className="text-4xl font-bold mb-6">
                  $0<span className="text-base font-normal">/month</span>
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>5 presentations per month</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Basic templates</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Download as PowerPoint</span>
                  </li>
                </ul>
                <Link href="/register" className="mt-auto">
                  <Button className="w-full">Get Started</Button>
                </Link>
              </div>
              <div className="flex flex-col p-6 bg-blue-50 rounded-lg shadow-lg border-2 border-blue-500">
                <h3 className="text-2xl font-bold mb-4">Pro</h3>
                <p className="text-4xl font-bold mb-6">
                  $9.99<span className="text-base font-normal">/month</span>
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Unlimited presentations</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Advanced templates</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Priority processing</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Email support</span>
                  </li>
                </ul>
                <Link href="/register" className="mt-auto">
                  <Button className="w-full">Start Free Trial</Button>
                </Link>
              </div>
              <div className="flex flex-col p-6 bg-white rounded-lg shadow-lg md:col-span-2 lg:col-span-1">
                <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
                <p className="text-4xl font-bold mb-6">Custom</p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>All Pro features</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Custom integrations</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Dedicated account manager</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>24/7 phone support</span>
                  </li>
                </ul>
                <Link href="/contact" className="mt-auto">
                  <Button variant="outline" className="w-full">
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <LandingFooter />
    </div>
  )
}

