import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function contact() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-12 md:py-16 lg:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">Get in Touch</h1>
            <p className="text-muted-foreground mt-2">
              Have a question or want to learn more? Fill out the form and we&apos;ll get back to you as soon as possible.
            </p>
          </div>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" rows={5} placeholder="Enter your message" />
            </div>
            <Button type="submit" className="w-full md:w-auto">
              Submit
            </Button>
          </form>
        </div>
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Contact Information</h2>
            <p className="text-muted-foreground mt-2">
              Find us at our office or get in touch through our social media channels.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <LocateIcon className="h-6 w-6 text-primary" />
              <div>
                <p className="font-medium">Office Address</p>
                <p className="text-muted-foreground">
                  123 Main Street
                  <br />
                  Anytown, USA 12345
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <PhoneIcon className="h-6 w-6 text-primary" />
              <div>
                <p className="font-medium">Phone Number</p>
                <p className="text-muted-foreground">(123) 456-7890</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="grid grid-cols-3 gap-4">
                <Link href="#" aria-label="Facebook" prefetch={false}>
                  <FacebookIcon className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                </Link>
                <Link href="#" aria-label="Instagram" prefetch={false}>
                  <InstagramIcon className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                </Link>
                <Link href="#" aria-label="YouTube" prefetch={false}>
                  <YoutubeIcon className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// (FacebookIcon, InstagramIcon, LocateIcon, PhoneIcon, YoutubeIcon components here)


function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function LocateIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  )
}


function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}


function YoutubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  )
}
