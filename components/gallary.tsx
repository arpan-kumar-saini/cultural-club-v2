"use client";
import React from 'react';
import { Button } from "@/components/ui/button"
import Image from 'next/image'; // Import the Image component from next/image

export default function Gallary() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container mx-auto grid gap-8">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Cultural Gallery</h2>
          <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Explore our collection of captivating photos and videos that showcase the rich cultural heritage of our community.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 8 }, (_, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/arpan.jpg"
                width={400}
                height={300}
                alt={`Gallery Item ${index + 1}`} // Use a unique alt attribute for accessibility
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                style={{ aspectRatio: "400/300", objectFit: "cover" }} // Keep aspect ratio style
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-white text-center space-y-2">
                  <h3 className="text-xl font-semibold">Gallery Item {index + 1}</h3>
                  <Button variant="link" className="text-white">
                    View
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Button variant="outline" className="gap-2">
            <ChevronLeftIcon className="w-4 h-4" />
            Previous
          </Button>
          <Button variant="outline" className="gap-2 ml-4">
            Next
            <ChevronRightIcon className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}

function ChevronLeftIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
