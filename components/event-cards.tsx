"use client"


import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Zap } from "lucide-react"
import Image from "next/image" // Importing Image from next/image

const events = {
  upcoming: [
    { id: 1, title: "Tech Conference 2024", date: "2024-06-15", description: "Join us for the biggest tech event of the year", location: "San Francisco, CA" },
    { id: 2, title: "AI Summit", date: "2024-07-22", description: "Explore the future of Artificial Intelligence", location: "New York, NY" },
    { id: 3, title: "Startup Pitch Night", date: "2024-08-05", description: "Watch innovative startups pitch their ideas", location: "Austin, TX" },
  ],
  ongoing: [
    { id: 4, title: "Hackathon 2024", endDate: "2024-05-20", description: "48-hour coding challenge", location: "Online" },
    { id: 5, title: "Virtual Job Fair", endDate: "2024-05-18", description: "Connect with top employers", location: "Online" },
  ],
  past: [
    { id: 6, title: "Web Dev Workshop", date: "2024-04-10", description: "Hands-on web development training", image: "/arpan.jpg" },
    { id: 7, title: "Data Science Symposium", date: "2024-03-25", description: "Insights from leading data scientists", image: "/banner.jpg" },
    { id: 8, title: "UX Design Masterclass", date: "2024-02-15", description: "Learn from industry experts", image: "/arpan.jpg" },
  ],
}

export default function EventCards() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold text-center mb-10">Event Explorer</h1>
      <Tabs defaultValue="upcoming" className="w-full" onValueChange={() => {}}>
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
          <TabsTrigger value="ongoing">Ongoing Events</TabsTrigger>
          <TabsTrigger value="past">Past Events</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.upcoming.map((event) => (
              <Card key={event.id} className="flex flex-col h-full transform transition-all hover:scale-105">
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                  <CardDescription className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {event.date}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p>{event.description}</p>
                  <div className="flex items-center mt-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm text-muted-foreground">{event.location}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Register Now</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="ongoing" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.ongoing.map((event) => (
              <Card key={event.id} className="flex flex-col h-full transform transition-all hover:scale-105">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>{event.title}</CardTitle>
                    <Badge variant="destructive" className="animate-pulse">
                      <Zap className="w-3 h-3 mr-1" />
                      Live
                    </Badge>
                  </div>
                  <CardDescription className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    Ends: {event.endDate}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p>{event.description}</p>
                  <div className="flex items-center mt-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm text-muted-foreground">{event.location}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Join Now</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="past" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.past.map((event) => (
              <Card key={event.id} className="flex flex-col h-full transform transition-all hover:scale-105">
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                  <CardDescription className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {event.date}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <Image src={event.image} alt={event.title} width={200} height={100} className="w-full h-32 object-cover rounded-md mb-4" />
                  <p>{event.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">View Highlights</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
