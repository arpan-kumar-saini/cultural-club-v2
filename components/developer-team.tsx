"use client";

import { Github, Linkedin, Twitter } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function DeveloperTeamComponent() {
  const teamMembers = [
    {
      name: "Ritu Singh",
      role: "UI/UX Designer",
      image: "/ritu.jpg",
      bio: "Creative designer with a passion for creating visually appealing and user-friendly interfaces. Skilled in design tools and concepts.",
      social: {
        github: "https://github.com/ritusingh",
        linkedin: "https://linkedin.com/in/ritusingh",
        twitter: "https://twitter.com/ritusingh",
      },
    },
    {
      name: "Arpan",
      role: "Frontend Developer",
      image: "/arpan.jpg",
      bio: "Passionate frontend developer with expertise in React and modern web technologies. Committed to creating intuitive and responsive user interfaces.",
      social: {
        github: "https://github.com/arpan",
        linkedin: "https://linkedin.com/in/arpan",
        twitter: "https://twitter.com/arpan",
      },
    },
    {
      name: "Love Bhardwaj",
      role: "Backend Developer",
      image: "/love.jpeg",
      bio: "Experienced backend developer specializing in scalable server-side solutions. Proficient in database design, API development, and system architecture.",
      social: {
        github: "https://github.com/lovebhardwaj",
        linkedin: "https://linkedin.com/in/lovebhardwaj",
        twitter: "https://twitter.com/lovebhardwaj",
      },
    },
  ];

  return (
    <section className="w-full py-12 bg-gray-50 flex justify-center">
      <div className="container flex flex-col items-center px-4 md:px-6">
        <h2 className="text-2xl font-bold text-center mb-12">Our Developer Team</h2>
        <div className="grid gap-14 sm:grid-cols-3">
          {teamMembers.map((member) => (
            <Card key={member.name} className="max-w-xs mx-auto overflow-hidden">
              <CardContent className="p-4">
                <div className="flex flex-row items-center">
                  <div className="relative w-[800px] h-40 mr-4 overflow-hidden rounded-full"> {/* Circular shape */}
                    <Image
                      src={member.image}
                      alt={member.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full" // Ensure the image itself is also rounded
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{member.name}</h3>
                    <p className="text-sm text-gray-500">{member.role}</p>
                    <p className="text-xs text-gray-600 mt-2">{member.bio}</p>
                    <div className="flex mt-3 space-x-3">
                      <Link href={member.social.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                        <span className="sr-only">GitHub</span>
                      </Link>
                      <Link href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-4 h-4" />
                        <span className="sr-only">LinkedIn</span>
                      </Link>
                      <Link href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                        <Twitter className="w-4 h-4" />
                        <span className="sr-only">Twitter</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
