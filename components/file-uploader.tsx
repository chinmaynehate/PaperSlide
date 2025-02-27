"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { FileUp, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { convertPaperToPPT } from "@/lib/convert-paper"

export function FileUploader() {
  const router = useRouter()
  const [file, setFile] = useState<File | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [isProcessing, setIsProcessing] = useState(false)

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
        // Call the conversion function
        convertPaperToPPT(file)
          .then(() => {
            router.push("/preview")
          })
          .catch((error) => {
            console.error("Error converting paper:", error)
          })
      }, 2000)
    }, 2000)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Card className="mx-auto max-w-md">
        <CardHeader>
          <CardTitle>Upload Research Paper</CardTitle>
          <CardDescription>
            Upload your PDF research paper to convert it into a PowerPoint presentation.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border border-dashed border-gray-300 p-10">
              <FileUp className="h-10 w-10 text-gray-400" />
              <p className="text-sm text-gray-500">Drag and drop your PDF file here or click to browse</p>
              <input type="file" accept=".pdf" className="hidden" id="file-upload" onChange={handleFileChange} />
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
              <div className="rounded-lg border border-gray-200 p-4">
                <p className="font-medium">{file.name}</p>
                <p className="text-sm text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
              </div>
            )}
            {isUploading && (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Uploading...</span>
                  <span className="text-sm font-medium">{uploadProgress}%</span>
                </div>
                <Progress value={uploadProgress} className="h-2 w-full" />
              </div>
            )}
            {isProcessing && (
              <div className="flex items-center justify-center space-x-2">
                <Loader2 className="h-5 w-5 animate-spin text-blue-600" />
                <span className="text-sm font-medium">Processing your paper...</span>
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={handleUpload} disabled={!file || isUploading || isProcessing}>
            {isUploading ? "Uploading..." : isProcessing ? "Processing..." : "Convert to PowerPoint"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

