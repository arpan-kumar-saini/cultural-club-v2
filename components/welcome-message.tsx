"use client";
import { Button } from "@/components/ui/button"
import Image from "next/image";
import logoImage from "@/public/logo.jpeg";

export default function welcomemessage() {
  return (
    <div className="bg-background text-foreground">
      <main>
        <section className="py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Welcome to the [Club Name]</h2>
                <p className="text-muted-foreground">
                  We are a vibrant community dedicated to celebrating the rich cultural heritage of our college. Through
                  our diverse events and activities, we invite you to join us in exploring creativity, making new
                  connections, and immersing yourself in the spirit of our club.
                </p>
                <Button>Join Now</Button>
              </div>
              <div>
              <Image
                src={logoImage}
                width={600}
                height={400}
                alt="Club Activities"
                className="rounded-xl"
                style={{ aspectRatio: "600 / 400", objectFit: "cover" }}
              />
            </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
