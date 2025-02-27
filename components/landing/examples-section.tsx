import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function ExamplesSection() {
  return (
    <section id="examples" className="w-full bg-gray-50 py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">See It in Action</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Check out examples of presentations generated from real research papers
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-5xl">
          <Tabs defaultValue="science" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="science">Science</TabsTrigger>
              <TabsTrigger value="medicine">Medicine</TabsTrigger>
              <TabsTrigger value="technology">Technology</TabsTrigger>
            </TabsList>
            <TabsContent value="science" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <ExampleCard
                  title="Quantum Computing Advances"
                  image="/placeholder.svg?height=200&width=300"
                  slides={12}
                />
                <ExampleCard
                  title="Climate Change Analysis"
                  image="/placeholder.svg?height=200&width=300"
                  slides={15}
                />
                <ExampleCard
                  title="Particle Physics Research"
                  image="/placeholder.svg?height=200&width=300"
                  slides={10}
                />
              </div>
            </TabsContent>
            <TabsContent value="medicine" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <ExampleCard
                  title="Cancer Treatment Innovations"
                  image="/placeholder.svg?height=200&width=300"
                  slides={14}
                />
                <ExampleCard title="Vaccine Development" image="/placeholder.svg?height=200&width=300" slides={11} />
                <ExampleCard
                  title="Neuroscience Breakthroughs"
                  image="/placeholder.svg?height=200&width=300"
                  slides={13}
                />
              </div>
            </TabsContent>
            <TabsContent value="technology" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <ExampleCard title="AI Ethics Framework" image="/placeholder.svg?height=200&width=300" slides={9} />
                <ExampleCard
                  title="Blockchain Applications"
                  image="/placeholder.svg?height=200&width=300"
                  slides={12}
                />
                <ExampleCard
                  title="Cybersecurity Protocols"
                  image="/placeholder.svg?height=200&width=300"
                  slides={10}
                />
              </div>
            </TabsContent>
          </Tabs>
          <div className="mt-12 flex justify-center">
            <Link href="/register">
              <Button size="lg" className="gap-2">
                Try It Yourself
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

interface ExampleCardProps {
  title: string
  image: string
  slides: number
}

function ExampleCard({ title, image, slides }: ExampleCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={300}
          height={200}
          className="h-[200px] w-full object-cover"
        />
        <div className="p-4">
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-gray-500">{slides} slides</p>
          <Button variant="link" className="mt-2 h-auto p-0 text-blue-600">
            View Example
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

