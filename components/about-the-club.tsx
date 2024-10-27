"use client";
import Link from "next/link";

export default function AboutTheClub() {
  return (
    <section className="flex items-center justify-center w-full py-12 md:py-24 lg:py-32 bg-white text-center">
      <div className="container px-4 md:px-6 flex flex-col items-center space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            About Our Cultural Club
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Our cultural club is dedicated to celebrating the rich diversity of our community. We strive to promote
            understanding, appreciation, and respect for different cultures through a variety of engaging events and
            activities.
          </p>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row">
          <Link
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
