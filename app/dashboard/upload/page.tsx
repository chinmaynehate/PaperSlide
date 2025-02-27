"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { FileUp, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"

export default function UploadPage() {
  const router = useRouter()
  const [file, setFile] = useState<File | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [isProcessing, setIsProcessing] = useState(false)
  const [template, setTemplate] = useState("basic")
  const [detailLevel, setDetailLevel] = useState(50)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleUpload = async () => {
    if (!file) return

    setIsUploading(true)

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 5
      })
    }, 100)

    // Simulate upload completion
    setTimeout(() => {
      clearInterval(interval)
      setUploadProgress(100)
      setIsUploading(false)
      setIsProcessing(true)

      // Simulate processing time
      setTimeout(() => {
        setIsProcessing(false)
        router.push("/dashboard/preview")
      }, 2000)
    }, 2000)
  }

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Upload Research Paper"
        text="Upload your paper and customize your presentation settings."
      />
      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Upload Paper</CardTitle>
            <CardDescription>Upload your research paper in PDF or DOCX format</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="upload">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="upload">Upload File</TabsTrigger>
                <TabsTrigger value="url">URL</TabsTrigger>
              </TabsList>
              <TabsContent value="upload" className="mt-4">
                <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border border-dashed border-gray-300 p-10">
                  <FileUp className="h-10 w-10 text-gray-400" />
                  <p className="text-sm text-gray-500">Drag and drop your file here or click to browse</p>
                  <input
                    type="file"
                    accept=".pdf,.docx"
                    className="hidden"
                    id="file-upload"
                    onChange={handleFileChange}
                  />
                  <label htmlFor="file-upload">
                    <Button
                      variant="outline"
                      className="cursor-pointer"
                      onClick={() => document.getElementById("file-upload")?.click()}
                    >
                      Select File
                    </Button>
                  </label>
                </div>
              </TabsContent>
              <TabsContent value="url" className="mt-4">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="paper-url">Paper URL</Label>
                    <div className="flex gap-2">
                      <input
                        id="paper-url"
                        type="url"
                        placeholder="https://example.com/paper.pdf"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                      <Button variant="outline">Fetch</Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
            {file && (
              <div className="mt-4 rounded-lg border border-gray-200 p-4">
                <p className="font-medium">{file.name}</p>
                <p className="text-sm text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
              </div>
            )}
            {isUploading && (
              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Uploading...</span>
                  <span className="text-sm font-medium">{uploadProgress}%</span>
                </div>
                <Progress value={uploadProgress} className="h-2 w-full" />
              </div>
            )}
            {isProcessing && (
              <div className="mt-4 flex items-center justify-center space-x-2 rounded-lg border border-gray-200 p-4">
                <Loader2 className="h-5 w-5 animate-spin text-blue-600" />
                <span className="text-sm font-medium">Processing your paper...</span>
              </div>
            )}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Presentation Settings</CardTitle>
            <CardDescription>Customize how your presentation will be generated</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="template">Template Style</Label>
              <Select defaultValue="basic" onValueChange={setTemplate}>
                <SelectTrigger id="template">
                  <SelectValue placeholder="Select template" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="basic">Basic (Clean & Minimal)</SelectItem>
                  <SelectItem value="academic">Academic</SelectItem>
                  <SelectItem value="modern">Modern</SelectItem>
                  <SelectItem value="creative">Creative</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="detail-level">Level of Detail</Label>
                <span className="text-sm text-gray-500">{detailLevel}%</span>
              </div>
              <Slider
                id="detail-level"
                defaultValue={[50]}
                max={100}
                step={10}
                onValueChange={(value) => setDetailLevel(value[0])}
              />
              <div className="flex justify-between text-xs text-gray-500">
                <span>Concise</span>
                <span>Detailed</span>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="language">Language</Label>
              <Select defaultValue="en">
                <SelectTrigger id="language">
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="es">Spanish</SelectItem>
                  <SelectItem value="fr">French</SelectItem>
                  <SelectItem value="de">German</SelectItem>
                  <SelectItem value="zh">Chinese</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" onClick={handleUpload} disabled={!file || isUploading || isProcessing}>
              {isUploading ? "Uploading..." : isProcessing ? "Processing..." : "Generate Presentation"}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </DashboardShell>
  )
}

