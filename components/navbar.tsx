import Link from "next/link"
import Image from "next/image"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { LiaCertificateSolid } from "react-icons/lia";
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <div className="flex flex-col">
      <header className="sticky top-0 z-50 w-full bg-background shadow">
        <div className="container flex h-14 items-center justify-between  lg:ml-24 px-4 md:px-6">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <Image src="/logo.jpeg" alt="Logo" width={24} height={24} className="h-6 w-6" />
            <span className="text-lg font-semibold">Cultural club</span>
          </Link>
          
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium ml-24">
            <Link href="/" className="transition-colors hover:text-primary hover:underline hover:underline-offset-4" prefetch={false}>
              Home
            </Link>
            <Link href="events" className="transition-colors hover:text-primary hover:underline hover:underline-offset-4" prefetch={false}>
              Events
            </Link>
            <Link href="about" className="transition-colors hover:text-primary hover:underline hover:underline-offset-4" prefetch={false}>
              About Us
            </Link>
            <Link href="gallery" className="transition-colors hover:text-primary hover:underline hover:underline-offset-4" prefetch={false}>
              Gallery
            </Link>
            <Link href="team" className="transition-colors hover:text-primary hover:underline hover:underline-offset-4" prefetch={false}>
              Teams
            </Link>
            
            <Link href="verify" className="transition-colors hover:text-primary hover:underline hover:underline-offset-4" prefetch={false}>
              Verify Certificates
            </Link>
            <Link href="downloads" className="transition-colors hover:text-primary hover:underline hover:underline-offset-4" prefetch={false}>
              Downloads
            </Link>
            <Link href="contact" className="transition-colors hover:text-primary hover:underline hover:underline-offset-4" prefetch={false}>
              Contact Us
            </Link>

            
            {/* Admin Link */}
            <Button asChild className="ml-72">
            <Link href="/admin" className="transition-colors hover:text-primary hover:underline hover:underline-offset-4" prefetch={false}>
              Admin
            </Link>
            </Button>
          </nav>

          <div className="flex items-center gap-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="lg:hidden">
                  <MenuIcon className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-background p-4">
                <div className="flex flex-col gap-4">
                  <Link href="/" className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary" prefetch={false}>
                    <HomeIcon className="h-5 w-5" />
                    Home
                  </Link>
                  <Link href="events" className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary" prefetch={false}>
                    <CalendarIcon className="h-5 w-5" />
                    Events
                  </Link>
                  <Link href="about" className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary" prefetch={false}>
                    <InfoIcon className="h-5 w-5" />
                    About Us
                  </Link>
                  <Link href="gallery" className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary" prefetch={false}>
                    <ImageIcon className="h-5 w-5" />
                    Gallery
                  </Link>
                  <Link href="team" className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary" prefetch={false}>
                    <UsersIcon className="h-5 w-5" />
                    Teams
                  </Link>
                  <Link href="contact" className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary" prefetch={false}>
                    <MailIcon className="h-5 w-5" />
                    Contact Us
                  </Link>
                  <Link href="verify" className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary" prefetch={false}>
                    <LiaCertificateSolid  className="h-5 w-5" />
                    Verify Certificates
                  </Link>
                  <Link href="downloads" className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary" prefetch={false}>
                    <DownloadIcon className="h-5 w-5" />
                    Downloads
                  </Link>
                  {/* Admin Link in Mobile Menu */}
                  <Button>
                  <Link href="/admin" className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary" prefetch={false}>
                    <UsersIcon className="h-5 w-5" />
                    Admin
                  </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      <main className="flex-1" />
    </div>
  )
}

// Define all icon components here


function CalendarIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function DownloadIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  )
}


function HomeIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function ImageIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  )
}


function InfoIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  )
}


function MailIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}




function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
