"use client";
import React from 'react';

export default function MissionVision() {
  return (
    <section className="w-full py-12 md:py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 sm:px-10 md:gap-12 md:grid-cols-2 text-center md:text-left">
          <div className="space-y-3">
            <div className="inline-block rounded-md bg-muted px-3 py-1 text-xs uppercase font-semibold text-muted-foreground">Our Mission</div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">Celebrating Diversity, Fostering Unity</h2>
            <div className="grid gap-4">
              <div className="flex items-start gap-3 justify-center md:justify-start">
                <div className="bg-muted rounded-md flex items-center justify-center aspect-square w-10">
                  <UsersIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Inclusive Community</h3>
                  <p className="text-sm text-muted-foreground">Welcoming members from diverse backgrounds to foster a vibrant and inclusive community.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 justify-center md:justify-start">
                <div className="bg-muted rounded-md flex items-center justify-center aspect-square w-10">
                  <LightbulbIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Cultural Exploration</h3>
                  <p className="text-sm text-muted-foreground">Providing opportunities to learn about and celebrate diverse cultures through interactive events.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 justify-center md:justify-start">
                <div className="bg-muted rounded-md flex items-center justify-center aspect-square w-10">
                  <HeartIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Fostering Unity</h3>
                  <p className="text-sm text-muted-foreground">Promoting understanding and respect for different cultures, strengthening community bonds.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="inline-block rounded-md bg-muted px-3 py-1 text-xs uppercase font-semibold text-muted-foreground">Our Vision</div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">Empowering Through Cultural Celebration</h2>
            <div className="grid gap-4">
              <div className="flex items-start gap-3 justify-center md:justify-start">
                <div className="bg-muted rounded-md flex items-center justify-center aspect-square w-10">
                  <CalendarIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Celebrate Diversity</h3>
                  <p className="text-sm text-muted-foreground">Hosting cultural events that showcase the richness and beauty of our diverse community.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 justify-center md:justify-start">
                <div className="bg-muted rounded-md flex items-center justify-center aspect-square w-10">
                  <SchoolIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Cultural Education</h3>
                  <p className="text-sm text-muted-foreground">Offering workshops to deepen understanding and appreciation of different cultures.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 justify-center md:justify-start">
                <div className="bg-muted rounded-md flex items-center justify-center aspect-square w-10">
                  <GroupIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Strengthen Community</h3>
                  <p className="text-sm text-muted-foreground">Building a strong community that embraces diversity and unity, empowering cultural identity.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Icon components remain the same


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


function GroupIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M3 7V5c0-1.1.9-2 2-2h2" />
      <path d="M17 3h2c1.1 0 2 .9 2 2v2" />
      <path d="M21 17v2c0 1.1-.9 2-2 2h-2" />
      <path d="M7 21H5c-1.1 0-2-.9-2-2v-2" />
      <rect width="7" height="5" x="7" y="7" rx="1" />
      <rect width="7" height="5" x="10" y="12" rx="1" />
    </svg>
  )
}


function HeartIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}


function LightbulbIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  )
}


function SchoolIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M14 22v-4a2 2 0 1 0-4 0v4" />
      <path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2" />
      <path d="M18 5v17" />
      <path d="m4 6 8-4 8 4" />
      <path d="M6 5v17" />
      <circle cx="12" cy="9" r="2" />
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
