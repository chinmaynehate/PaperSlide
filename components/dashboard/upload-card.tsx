"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { FileUp, Upload } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function UploadCard() {
  const [file, setFile] = useState<File | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upload Research Paper</CardTitle>
        <CardDescription>Upload your paper to convert it into a presentation</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border border-dashed border-gray-300 p-8">
          <FileUp className="h-10 w-10 text-gray-400" />
          <p className="text-sm text-gray-500">Drag and drop your PDF file here or click to browse</p>
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
      </CardContent>
      <CardFooter>
        <div className="flex w-full flex-col space-y-2">
          <Link href="/dashboard/upload">
            <Button className="w-full gap-2">
              <Upload className="h-4 w-4" />
              Continue to Upload
            </Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  )
}

