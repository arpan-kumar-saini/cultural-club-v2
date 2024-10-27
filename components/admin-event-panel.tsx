'use client'

import { useState, useEffect } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { Calendar as CalendarIcon, Trash2, Plus } from "lucide-react"
import { cn } from "@/lib/utils"

type Event = {
  id: string
  title: string
  date: Date
  endDate?: Date
  description: string
  location: string
  image?: string
  category: 'upcoming' | 'ongoing' | 'past'
}

export default function AdminEventPanel() {
  const [events, setEvents] = useState<Event[]>([])
  const [activeTab, setActiveTab] = useState<'upcoming' | 'ongoing' | 'past'>('upcoming')
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [eventToDelete, setEventToDelete] = useState<string | null>(null)
  const { toast } = useToast()

  useEffect(() => {
    fetchEvents()
  }, [activeTab])

  const fetchEvents = async () => {
    // TODO: Replace with actual API call
    // const response = await fetch(`/api/events?category=${activeTab}`)
    // const data = await response.json()
    // setEvents(data)

    // Mock data for demonstration
    setEvents([
      {
        id: '1',
        title: 'Annual Cultural Fest',
        date: new Date('2024-03-15'),
        description: 'Join us for a celebration of diverse cultures!',
        location: 'College Auditorium',
        category: activeTab,
      },
      {
        id: '2',
        title: 'Art Exhibition',
        date: new Date('2024-04-01'),
        endDate: new Date('2024-04-07'),
        description: 'Showcasing student artworks from various departments.',
        location: 'Art Gallery',
        category: activeTab,
      },
    ])
  }

  const handleAddEvent = async (event: Omit<Event, 'id'>) => {
    // TODO: Replace with actual API call
    // const response = await fetch('/api/events', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(event),
    // })
    // const newEvent = await response.json()

    // Mock adding event
    const newEvent = { ...event, id: Date.now().toString() }
    setEvents([...events, newEvent])
    setIsAddModalOpen(false)
    toast({
      title: "Event Added",
      description: "The new event has been successfully added.",
    })
  }

  const handleDeleteEvent = async (id: string) => {
    // TODO: Replace with actual API call
    // await fetch(`/api/events/${id}`, { method: 'DELETE' })

    // Mock deleting event
    setEvents(events.filter(event => event.id !== id))
    setIsDeleteDialogOpen(false)
    setEventToDelete(null)
    toast({
      title: "Event Deleted",
      description: "The event has been successfully removed.",
    })
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Event Management</h1>
      <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as typeof activeTab)}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="ongoing">Ongoing</TabsTrigger>
          <TabsTrigger value="past">Past</TabsTrigger>
        </TabsList>
        <div className="mt-4 mb-4">
          <Button onClick={() => setIsAddModalOpen(true)}>
            <Plus className="mr-2 h-4 w-4" /> Add Event
          </Button>
        </div>
        <TabsContent value="upcoming">
          <EventList events={events.filter(e => e.category === 'upcoming')} onDeleteEvent={setEventToDelete} />
        </TabsContent>
        <TabsContent value="ongoing">
          <EventList events={events.filter(e => e.category === 'ongoing')} onDeleteEvent={setEventToDelete} />
        </TabsContent>
        <TabsContent value="past">
          <EventList events={events.filter(e => e.category === 'past')} onDeleteEvent={setEventToDelete} />
        </TabsContent>
      </Tabs>
      <AddEventModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} onAddEvent={handleAddEvent} />
      <DeleteConfirmationDialog
        isOpen={isDeleteDialogOpen}
        onClose={() => setIsDeleteDialogOpen(false)}
        onConfirm={() => eventToDelete && handleDeleteEvent(eventToDelete)}
      />
    </div>
  )
}

function EventList({ events, onDeleteEvent }: { events: Event[], onDeleteEvent: (id: string) => void }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {events.map((event) => (
        <Card key={event.id}>
          <CardHeader>
            <CardTitle>{event.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p><strong>Date:</strong> {format(event.date, 'PPP')}</p>
            {event.endDate && <p><strong>End Date:</strong> {format(event.endDate, 'PPP')}</p>}
            <p><strong>Location:</strong> {event.location}</p>
            <p className="mt-2">{event.description}</p>
            {event.image && <img src={event.image} alt={event.title} className="mt-2 w-full h-40 object-cover" />}
          </CardContent>
          <CardFooter>
            <Button variant="destructive" onClick={() => onDeleteEvent(event.id)}>
              <Trash2 className="mr-2 h-4 w-4" /> Delete
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

function AddEventModal({ isOpen, onClose, onAddEvent }: { isOpen: boolean, onClose: () => void, onAddEvent: (event: Omit<Event, 'id'>) => void }) {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState<Date>()
  const [endDate, setEndDate] = useState<Date>()
  const [description, setDescription] = useState('')
  const [location, setLocation] = useState('')
  const [image, setImage] = useState<string>()
  const [category, setCategory] = useState<'upcoming' | 'ongoing' | 'past'>('upcoming')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (title && date && description) {
      onAddEvent({ title, date, endDate, description, location, image, category })
      onClose()
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Event</DialogTitle>
          <DialogDescription>
            Enter the details for the new event. Fields marked with * are required.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Title*
              </Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="date" className="text-right">
                Date*
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[280px] justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="endDate" className="text-right">
                End Date
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[280px] justify-start text-left font-normal",
                      !endDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {endDate ? format(endDate, "PPP") : <span>Pick an end date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={endDate}
                    onSelect={setEndDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description*
              </Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="location" className="text-right">
                Location
              </Label>
              <Input
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="image" className="text-right">
                Image URL
              </Label>
              <Input
                id="image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="col-span-3"
                type="url"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="category" className="text-right">
                Category*
              </Label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value as typeof category)}
                className="col-span-3"
                required
              >
                <option value="upcoming">Upcoming</option>
                <option value="ongoing">Ongoing</option>
                <option value="past">Past</option>
              </select>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Add Event</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

function DeleteConfirmationDialog({ isOpen, onClose, onConfirm }: { isOpen: boolean, onClose: () => void, onConfirm: () => void }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirm Deletion</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this event? This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button variant="destructive" onClick={onConfirm}>Delete</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}