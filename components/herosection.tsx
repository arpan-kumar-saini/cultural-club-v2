"use client";

import Link from "next/link";
import bannerImage from "@/public/banner.jpg";

export function Herosection() {
  return (
    <section
      className="w-full relative h-auto flex items-center justify-center bg-cover bg-center bg-no-repeat sm:h-[100vh]"
      style={{ backgroundImage: `url(${bannerImage.src})` }}
    >
      <div className="absolute inset-0 bg-black/50 z-0" />
      <div className="container px-4 md:px-6 py-12 sm:py-0 z-10 text-center text-primary-foreground">
        <div className="space-y-4 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Discover the Vibrant Culture of Our College Club
          </h1>
          <p className="text-lg md:text-xl">
            Join our diverse community and explore the rich cultural traditions, music, and art that make our college
            campus come alive.
          </p>
          <div className="flex justify-center gap-2">
            <Link
              href="#"
              className="inline-flex h-10 text-accent-foreground items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
