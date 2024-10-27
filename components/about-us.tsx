"use client"
import React, { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { motion, useInView, useAnimation } from "framer-motion"
import Image from "next/image"; // Importing Image from next/image

interface BlobImageProps {
  src: string
  alt: string
  className?: string
}

const BlobImage: React.FC<BlobImageProps> = ({ src, alt, className }) => (
  <div className={`relative ${className}`}>
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path
        fill="currentColor"
        d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.2C64.8,55.2,53.8,66.6,40.3,74.7C26.8,82.7,10.9,87.4,-4.4,85.6C-19.8,83.8,-39.5,75.5,-54.3,63.1C-69.1,50.7,-78.9,34.1,-84.6,15.7C-90.3,-2.7,-91.9,-23,-85.9,-40.4C-79.9,-57.8,-66.3,-72.3,-50.1,-78.7C-33.9,-85.1,-16.9,-83.4,-0.3,-82.8C16.4,-82.3,32.7,-83,44.7,-76.4Z"
        transform="translate(100 100)"
      />
    </svg>
    <Image
      src={src}
      alt={alt}
      layout="fill" // Set to fill to cover the area
      className="absolute inset-0 object-cover rounded-full"
      style={{ clipPath: "url(#blob)" }} // If you need to clip, apply styles here
    />
  </div>
)

interface FadeInSectionProps {
  children: React.ReactNode
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ children }) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref)

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 20 }
      }}
    >
      {children}
    </motion.div>
  )
}

export default function AboutUsComponent() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold mb-16 text-center">Discover Our Cultural Tapestry</h1>

      <FadeInSection>
        <section className="mb-24 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold mb-6">Our Mission & Vision</h2>
            <p className="text-lg mb-6">
              At the heart of our cultural club lies a passion for fostering understanding and celebrating diversity. We
              envision a world where cultural differences are not just accepted, but embraced and celebrated.
            </p>
            <p className="text-lg mb-6">
              Our mission is to create a vibrant platform for cultural exchange, education, and celebration. Through our
              initiatives, we aim to:
            </p>
            <ul className="list-disc list-inside text-lg mb-6 space-y-2">
              <li>Promote cross-cultural understanding and appreciation</li>
              <li>Organize immersive cultural events and workshops</li>
              <li>Facilitate meaningful dialogues between diverse communities</li>
              <li>Support and showcase multicultural artistic expressions</li>
            </ul>
          </div>
          <BlobImage
            src="/arpan.jpg" // Updated src here
            alt="Cultural diversity illustration"
            className="md:w-1/2 text-primary"
          />
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className="mb-24">
          <h2 className="text-3xl font-semibold mb-8 text-center">Our Journey Through Time</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">2010: The Seed is Planted</h3>
              <p className="text-lg">
                Founded by a group of passionate students, our club took its first steps towards promoting cultural
                diversity on campus.
              </p>
            </div>
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">2015: Growing Roots</h3>
              <p className="text-lg">
                We expanded our reach, forging partnerships with local organizations and hosting our first city-wide
                cultural festival.
              </p>
            </div>
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">2020: Digital Transformation</h3>
              <p className="text-lg">
                Adapting to global challenges, we launched virtual cultural exchange programs, connecting with communities
                worldwide.
              </p>
            </div>
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Today: A Thriving Community</h3>
              <p className="text-lg">
                We continue to grow, innovate, and foster cultural understanding in an ever-changing world, with a
                community of over 5,000 members.
              </p>
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className="mb-24 text-center">
          <h2 className="text-3xl font-semibold mb-8">Our Impact in Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <p className="text-4xl font-bold text-primary">50+</p>
              <p className="text-lg">Cultural Events Annually</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary">5,000+</p>
              <p className="text-lg">Active Members</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary">20+</p>
              <p className="text-lg">Partner Organizations</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary">10,000+</p>
              <p className="text-lg">Lives Touched</p>
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-8">Join Our Cultural Mosaic</h2>
          <p className="text-lg mb-8">
            Be part of a community that celebrates diversity, fosters understanding, and creates lasting cultural
            connections.
          </p>
          <Button size="lg" className="text-lg px-8 py-6">
            Become a Member
          </Button>
        </section>
      </FadeInSection>
    </div>
  )
}
