import Link from "next/link"
import { Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { LandingHeader } from "@/components/landing/landing-header"

export default function HelpPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <LandingHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Help & Support
              </h1>
              <p className="max-w-[85%] text-gray-500 md:text-xl">
                Find answers to common questions or contact our support team for assistance.
              </p>
            </div>
            <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                  <CardDescription>
                    Find answers to the most common questions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>
                        What file formats are supported?
                      </AccordionTrigger>
                      <AccordionContent>
                        PaperSlide currently supports PDF and DOCX file formats for research papers. We plan to add support for more formats in the future.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>
                        Is there a file size limit?
                      </AccordionTrigger>
                      <AccordionContent>
                        Yes, the maximum file size is 20MB. If your file is larger, consider compressing it or splitting it into smaller documents.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>
                        How long does it take to generate a presentation?
                      </AccordionTrigger>
                      <AccordionContent>
                        Most presentations are generated within 1-2 minutes, depending on the length and complexity of your research paper.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger>
                        Can I edit the generated presentation?
                      </AccordionTrigger>
                      <AccordionContent>
                        Yes, you can edit the generated presentation directly in our web app or download it as a PowerPoint file for more extensive editing.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                      <AccordionTrigger>
                        How many presentations can I create with the free plan?
                      </AccordionTrigger>
                      <AccordionContent>
                        The free plan allows you to create up to 5 presentations per month. For unlimited presentations, consider upgrading to our Pro plan.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
                <CardFooter>
                  <Link href="/faq" className="w-full">
                    <Button variant="outline" className="w-full">
                      View all FAQs
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Contact Support</CardTitle>
                  <CardDescription>
                    Get in touch with our support team
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                        <Mail className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">Email Support</h3>
                        <p className="text-sm text-gray-500">
                          Our team typically responds within 24 hours
                        </p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <a
                        href="mailto:support@paperslide.com"
                        className="text-blue-600 hover:underline"
                      >
                        support@paperslide.com
                      </a>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Name
                        </label>
                        <input
                          id="name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-\

