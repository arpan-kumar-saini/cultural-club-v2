'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { AlertCircle, Download } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

interface Certificate {
  id: string
  title: string
  recipientName: string
  dateIssued: string
  templateUrl: string
  email: string
}

const demoCertificates: Certificate[] = [
  {
    id: "CERT-001",
    title: "Completion Certificate",
    recipientName: "John Doe",
    dateIssued: "January 15, 2023",
    templateUrl: "/placeholder.svg?height=300&width=400",
    email: "arpankumar@gmail.com"
  },
  {
    id: "CERT-002",
    title: "Achievement Award",
    recipientName: "Jane Smith",
    dateIssued: "February 10, 2023",
    templateUrl: "/placeholder.svg?height=300&width=400",
    email: "arpansaini@gmail.com"
  }
]

export default function CertificateVerification() {
  const [certificateId, setCertificateId] = useState('')
  const [email, setEmail] = useState('')
  const [verifiedCertificate, setVerifiedCertificate] = useState<Certificate | null>(null)
  const [isVerifying, setIsVerifying] = useState(false)
  const [error, setError] = useState('')
  const { toast } = useToast()

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsVerifying(true)
    setError('')
    setVerifiedCertificate(null)

    // TODO: Replace with actual API call
    // try {
    //   const response = await fetch(`/api/verify-certificate?id=${certificateId}&email=${email}`)
    //   if (!response.ok) throw new Error('Certificate not found')
    //   const data = await response.json()
    //   setVerifiedCertificate(data)
    // } catch (error) {
    //   setError('Invalid credentials or certificate not found. Please check your details and try again.')
    // }

    // Simulating API call with demo data
    await new Promise(resolve => setTimeout(resolve, 1000))
    const foundCertificate = demoCertificates.find(cert => cert.id === certificateId)
    if (foundCertificate) {
      setVerifiedCertificate(foundCertificate)
    } else {
      setError('Invalid credentials or certificate not found. Please check your details and try again.')
    }

    setIsVerifying(false)
  }

  const handleDownload = () => {
    // TODO: Implement actual download functionality
    toast({
      title: "Download Started",
      description: "Your certificate download has begun.",
    })
  }

  return (
    <div className="container mx-auto p-4">
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Certificate Verification</CardTitle>
          <CardDescription>Enter your certificate credentials to verify and download your certificate.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleVerify} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="certificate-id">Certificate ID</Label>
              <Input
                id="certificate-id"
                value={certificateId}
                onChange={(e) => setCertificateId(e.target.value)}
                placeholder="Enter your Certificate ID"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={isVerifying}>
              {isVerifying ? 'Verifying...' : 'Verify Certificate'}
            </Button>
          </form>

          {error && (
            <Alert variant="destructive" className="mt-4">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {verifiedCertificate && (
            <div className="mt-6 space-y-4">
              <h3 className="text-lg font-semibold">Verified Certificate Details</h3>
              <div className="space-y-2">
                <p><strong>Certificate Title:</strong> {verifiedCertificate.title}</p>
                <p><strong>Recipient Name:</strong> {verifiedCertificate.recipientName}</p>
                <p><strong>Date Issued:</strong> {verifiedCertificate.dateIssued}</p>
              </div>
              <div className="mt-4">
                <h4 className="text-md font-semibold mb-2">Certificate Preview</h4>
                <img
                  src={verifiedCertificate.templateUrl}
                  alt="Certificate Preview"
                  className="w-full max-w-md h-auto rounded-lg border"
                />
              </div>
              <Button onClick={handleDownload} className="w-full">
                <Download className="mr-2 h-4 w-4" /> Download Certificate
              </Button>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex flex-col items-start">
          <h3 className="text-lg font-semibold mb-2">Demo Certificates</h3>
          <p className="text-sm text-muted-foreground mb-2">Use these demo certificate IDs for testing:</p>
          <ul className="list-disc list-inside space-y-1">
            {demoCertificates.map((cert) => (
              <li key={cert.id} className="text-sm">
                {cert.id} - {cert.title}-{cert.email} ({cert.recipientName})
              </li>
            ))}
          </ul>
        </CardFooter>
      </Card>
    </div>
  )
}