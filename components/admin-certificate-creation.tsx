'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { Calendar as CalendarIcon, HelpCircle, Upload } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface TemplateType {
  id: string
  name: string
  description: string
  imageUrl: string
}

const templates: TemplateType[] = [
  { id: '1', name: 'Classic', description: 'Traditional design with elegant borders', imageUrl: '/placeholder.svg?height=100&width=150' },
  { id: '2', name: 'Modern', description: 'Clean and minimalist layout', imageUrl: '/placeholder.svg?height=100&width=150' },
  { id: '3', name: 'Corporate', description: 'Professional design for business use', imageUrl: '/placeholder.svg?height=100&width=150' },
  { id: '4', name: 'Academic', description: 'Suitable for educational achievements', imageUrl: '/placeholder.svg?height=100&width=150' },
]

export default function CertificateCreation() {
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateType | null>(null)
  const [title, setTitle] = useState('')
  const [date, setDate] = useState<Date>()
  const [file, setFile] = useState<File | null>(null)
  const [autoSendEmails, setAutoSendEmails] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const { toast } = useToast()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0])
    }
  }

  const handleGenerateCertificates = async () => {
    if (!selectedTemplate || !title || !date || !file) {
      toast({
        title: "Error",
        description: "Please fill in all required fields and select a template.",
        variant: "destructive",
      })
      return
    }

    setIsGenerating(true)

    // TODO: Replace with actual API call
    // try {
    //   const formData = new FormData()
    //   formData.append('template', selectedTemplate.id)
    //   formData.append('title', title)
    //   formData.append('date', date.toISOString())
    //   formData.append('file', file)
    //   formData.append('autoSendEmails', autoSendEmails.toString())

    //   const response = await fetch('/api/generate-certificates', {
    //     method: 'POST',
    //     body: formData,
    //   })

    //   if (!response.ok) throw new Error('Failed to generate certificates')

    //   setShowConfirmation(true)
    // } catch (error) {
    //   toast({
    //     title: "Error",
    //     description: "Failed to generate certificates. Please try again.",
    //     variant: "destructive",
    //   })
    // }

    // Simulating API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsGenerating(false)
    setShowConfirmation(true)
  }

  return (
    <div className="container mx-auto p-4">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Certificate Creation</CardTitle>
          <CardDescription>Generate certificates by selecting a template and providing details</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Select Template</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {templates.map((template) => (
                <div
                  key={template.id}
                  className={cn(
                    "cursor-pointer border rounded-lg p-2 transition-all",
                    selectedTemplate?.id === template.id
                      ? "border-primary bg-primary/10"
                      : "hover:border-primary"
                  )}
                  onClick={() => setSelectedTemplate(template)}
                >
                  <img src={template.imageUrl} alt={template.name} className="w-full h-auto mb-2 rounded" />
                  <h4 className="font-semibold">{template.name}</h4>
                  <p className="text-sm text-muted-foreground">{template.description}</p>
                </div>
              ))}
            </div>
          </div>

          {selectedTemplate && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Selected Template Preview</h3>
              <img
                src={selectedTemplate.imageUrl}
                alt={`${selectedTemplate.name} preview`}
                className="w-full max-w-md h-auto rounded-lg border"
              />
            </div>
          )}

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Certificate Title</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter certificate title"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <Label htmlFor="file-upload">Upload Excel File</Label>
              <div className="flex items-center space-x-2">
                <Input
                  id="file-upload"
                  type="file"
                  onChange={handleFileChange}
                  accept=".xlsx,.xls"
                  className="flex-grow"
                />
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon">
                        <HelpCircle className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Upload an Excel file containing names and details for bulk certificate generation.</p>
                      <p>Required columns: Name, Email</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              {file && <p className="text-sm text-muted-foreground mt-1">File selected: {file.name}</p>}
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="auto-send"
                checked={autoSendEmails}
                onCheckedChange={(checked) => setAutoSendEmails(checked as boolean)}
              />
              <Label htmlFor="auto-send">
                Automatically send certificates to emails provided in the Excel file
              </Label>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleGenerateCertificates} disabled={isGenerating} className="w-full">
            {isGenerating ? (
              <>
                <Upload className="mr-2 h-4 w-4 animate-spin" />
                Generating Certificates...
              </>
            ) : (
              'Generate Certificates'
            )}
          </Button>
        </CardFooter>
      </Card>

      {showConfirmation && (
        <Card className="w-full max-w-4xl mx-auto mt-4">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-green-600">Certificates Generated Successfully!</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Your certificates have been generated based on the provided information.</p>
            {autoSendEmails && (
              <p className="mt-2">Certificates have been automatically sent to the email addresses provided in the Excel file.</p>
            )}
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={() => setShowConfirmation(false)}>Return to Dashboard</Button>
            <Button>View Generated Certificates</Button>
          </CardFooter>
        </Card>
      )}
    </div>
  )
}