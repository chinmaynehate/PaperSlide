"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { FileUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL

export default function UploadPage() {
  const router = useRouter()
  const [file, setFile] = useState<File | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
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
    setUploadProgress(0)

    const formData = new FormData()
    formData.append("file", file)
    formData.append("template", template)
    formData.append("detailLevel", detailLevel.toString())

    try {
      const response = await fetch(`${baseUrl}/upload`, {
        method: "POST",
        body: formData,
        // Include auth headers if needed
        // headers: { Authorization: `Bearer ${token}` }
      })

      if (!response.ok) {
        throw new Error("Upload failed")
      }

      // Handle successful upload
      router.push("/dashboard/preview")
    } catch (error) {
      console.error("Error uploading file:", error)
      // Handle error (e.g., show error message to user)
    } finally {
      setIsUploading(false)
    }
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
            <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border border-dashed border-gray-300 p-10">
              <FileUp className="h-10 w-10 text-gray-400" />
              <p className="text-sm text-gray-500">Drag and drop your file here or click to browse</p>
              <input type="file" accept=".pdf,.docx" className="hidden" id="file-upload" onChange={handleFileChange} />
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
          </CardContent>
          <CardFooter>
            <Button className="w-full" onClick={handleUpload} disabled={!file || isUploading}>
              {isUploading ? "Uploading..." : "Generate Presentation"}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </DashboardShell>
  )
}

