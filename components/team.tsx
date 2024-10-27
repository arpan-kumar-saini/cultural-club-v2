import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";

export default function Team() {
  return (
    <div className="w-full max-w-8xl mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold">Meet Our Team</h1>
          <p className="text-muted-foreground max-w-[600px] mx-auto mt-2">
            The creative minds behind our cultural club. Get to know the individuals who bring our vision to life.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <Card className="bg-muted p-4 rounded-lg">
            <div className="flex items-center gap-4">
              <Avatar className="w-32 h-32">
                <AvatarImage src="/arpan.jpg" alt="@username" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-lg font-semibold">Dr. Archana Sharma</h3>
                <p className="text-muted-foreground">Convener</p>
                <p className="text-muted-foreground">(Head of Electrical Department)</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              John is the visionary behind our cultural club, bringing his passion for the arts and community to life.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <Link href="#" className="text-primary hover:underline" prefetch={false}>
                <LinkIcon className="w-4 h-4" />
              </Link>
              <Link href="#" className="text-primary hover:underline" prefetch={false}>
                <TwitterIcon className="w-4 h-4" />
              </Link>
              <Link href="#" className="text-primary hover:underline" prefetch={false}>
                <InstagramIcon className="w-4 h-4" />
              </Link>
            </div>
          </Card>
          <Card className="bg-muted p-4 rounded-lg">
            <div className="flex items-center gap-4">
              <Avatar className="w-32 h-32">
                <AvatarImage src="/arpan.jpg" alt="@username" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-lg font-semibold">Arpan</h3>
                <p className="text-muted-foreground">President</p>
                <p className="text-muted-foreground">Branch: IT (4th yr)</p>
                <p className="text-muted-foreground">Joined: 2023</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Jane is the operational mastermind behind our cultural club, ensuring everything runs smoothly.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <Link href="#" className="text-primary hover:underline" prefetch={false}>
                <LinkIcon className="w-4 h-4" />
              </Link>
              <Link href="#" className="text-primary hover:underline" prefetch={false}>
                <TwitterIcon className="w-4 h-4" />
              </Link>
              <Link href="#" className="text-primary hover:underline" prefetch={false}>
                <InstagramIcon className="w-4 h-4" />
              </Link>
            </div>
          </Card>
          <Card className="bg-muted p-4 rounded-lg">
            <div className="flex items-center gap-4">
              <Avatar className="w-32 h-32">
                <AvatarImage src="/sumanshi.jpg" alt="@username" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-lg font-semibold">Sumanshi Roy </h3>
                <p className="text-muted-foreground">Vice- President</p>
                <p className="text-muted-foreground">Branch: IT (4th yr) </p>
                <p className="text-muted-foreground">Joined: 2020</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Emily is our lead designer, responsible for the stunning visuals that bring our cultural club to life.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <Link href="#" className="text-primary hover:underline" prefetch={false}>
                <LinkIcon className="w-4 h-4" />
              </Link>
              <Link href="#" className="text-primary hover:underline" prefetch={false}>
                <DribbbleIcon className="w-4 h-4" />
              </Link>
              <Link href="#" className="text-primary hover:underline" prefetch={false}>
                <DribbbleIcon className="w-4 h-4" />
              </Link>
            </div>
          </Card>
          <Card className="bg-muted p-4 rounded-lg">
            <div className="flex items-center gap-4">
              <Avatar className="w-32 h-32">
                <AvatarImage src="/ritu.jpg" alt="@username" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-lg font-semibold">Ritu Singh </h3>
                <p className="text-muted-foreground">Treasurer</p>
                <p className="text-muted-foreground">Branch: IT (4th yr) </p>
                <p className="text-muted-foreground">Joined: 2021</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Michael is our talented graphic designer, creating eye-catching visuals for our events and marketing.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <Link href="#" className="text-primary hover:underline" prefetch={false}>
                <LinkIcon className="w-4 h-4" />
              </Link>
              <Link href="#" className="text-primary hover:underline" prefetch={false}>
                <DribbbleIcon className="w-4 h-4" />
              </Link>
              <Link href="#" className="text-primary hover:underline" prefetch={false}>
                <DribbbleIcon className="w-4 h-4" />
              </Link>
            </div>
          </Card>
          <Card className="bg-muted p-4 rounded-lg">
            <div className="flex items-center gap-4">
              <Avatar className="w-32 h-32">
                <AvatarImage src="/arpan.jpg" alt="@username" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-lg font-semibold">Mahesh</h3>
                <p className="text-muted-foreground">Secretary</p>
                <p className="text-muted-foreground">Branch: IT (3rd yr) </p>
                <p className="text-muted-foreground">Joined: 2020</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Sophia is our full-stack developer, bringing her expertise in both front-end and back-end development to
              our projects.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <Link href="#" className="text-primary hover:underline" prefetch={false}>
                <LinkIcon className="w-4 h-4" />
              </Link>
              <Link href="#" className="text-primary hover:underline" prefetch={false}>
                <GithubIcon className="w-4 h-4" />
              </Link>
              <Link href="#" className="text-primary hover:underline" prefetch={false}>
                <LinkedinIcon className="w-4 h-4" />
              </Link>
            </div>
          </Card>
          <Card className="bg-muted p-4 rounded-lg">
            <div className="flex items-center gap-4">
              <Avatar className="w-32 h-32">
                <AvatarImage src="/arpan.jpg" alt="@username" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-lg font-semibold">Tanya</h3>
                <p className="text-muted-foreground">Marketing Head</p>
                <p className="text-muted-foreground">Branch: IT (3rd yr) </p>
                <p className="text-muted-foreground">Joined: 2022</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Oliver is our social media guru, crafting engaging content and managing our online presence.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <Link href="#" className="text-primary hover:underline" prefetch={false}>
                <LinkIcon className="w-4 h-4" />
              </Link>
              <Link href="#" className="text-primary hover:underline" prefetch={false}>
                <DribbbleIcon className="w-4 h-4" />
              </Link>
              <Link href="#" className="text-primary hover:underline" prefetch={false}>
                <DribbbleIcon className="w-4 h-4" />
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}


function DribbbleIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
      <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
      <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
    </svg>
  )
}


function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
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


function LinkIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  )
}


function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}
