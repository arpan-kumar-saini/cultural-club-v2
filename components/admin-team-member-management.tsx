'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { Calendar as CalendarIcon, Trash2, Plus, Pencil } from "lucide-react"
import { cn } from "@/lib/utils"

type TeamMember = {
  id: string
  name: string
  position: string
  branchAndYear: string
  dateJoined: Date
  description: string
  avatar: string
  socialMedia: {
    linkedin?: string
    twitter?: string
    instagram?: string
  }
}

const positions = [
  "Convener",
  "President",
  "Vice-President",
  "Secretary",
  "Treasurer",
  "Member"
]

export default function TeamMemberManagement() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([])
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [memberToDelete, setMemberToDelete] = useState<string | null>(null)
  const [editingMember, setEditingMember] = useState<TeamMember | null>(null)
  const { toast } = useToast()

  useEffect(() => {
    fetchTeamMembers()
  }, [])

  const fetchTeamMembers = async () => {
    // TODO: Replace with actual API call
    // const response = await fetch('/api/team-members')
    // const data = await response.json()
    // setTeamMembers(data)

    // Mock data for demonstration
    setTeamMembers([
      {
        id: '1',
        name: 'John Doe',
        position: 'President',
        branchAndYear: 'IT, 4th year',
        dateJoined: new Date('2022-09-01'),
        description: 'Passionate about technology and leadership.',
        avatar: '/placeholder.svg?height=100&width=100',
        socialMedia: {
          linkedin: 'https://linkedin.com/in/johndoe',
          twitter: 'https://twitter.com/johndoe',
        },
      },
      {
        id: '2',
        name: 'Jane Smith',
        position: 'Secretary',
        branchAndYear: 'CS, 3rd year',
        dateJoined: new Date('2023-01-15'),
        description: 'Enthusiastic about organizing events and fostering community.',
        avatar: '/placeholder.svg?height=100&width=100',
        socialMedia: {
          linkedin: 'https://linkedin.com/in/janesmith',
          instagram: 'https://instagram.com/janesmith',
        },
      },
    ])
  }

  const handleAddOrUpdateMember = async (member: Omit<TeamMember, 'id'>) => {
    if (editingMember) {
      // TODO: Replace with actual API call
      // await fetch(`/api/team-members/${editingMember.id}`, {
      //   method: 'PUT',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(member),
      // })

      // Mock updating member
      setTeamMembers(teamMembers.map(m => m.id === editingMember.id ? { ...member, id: editingMember.id } : m))
      toast({
        title: "Member Updated",
        description: "The team member has been successfully updated.",
      })
    } else {
      // TODO: Replace with actual API call
      // const response = await fetch('/api/team-members', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(member),
      // })
      // const newMember = await response.json()

      // Mock adding new member
      const newMember = { ...member, id: Date.now().toString() }
      setTeamMembers([...teamMembers, newMember])
      toast({
        title: "Member Added",
        description: "The new team member has been successfully added.",
      })
    }
    setIsFormOpen(false)
    setEditingMember(null)
  }

  const handleDeleteMember = async (id: string) => {
    // TODO: Replace with actual API call
    // await fetch(`/api/team-members/${id}`, { method: 'DELETE' })

    // Mock deleting member
    setTeamMembers(teamMembers.filter(member => member.id !== id))
    setIsDeleteDialogOpen(false)
    setMemberToDelete(null)
    toast({
      title: "Member Deleted",
      description: "The team member has been successfully removed.",
    })
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Team Member Management</h1>
      <div className="mb-4">
        <Button onClick={() => setIsFormOpen(true)}>
          <Plus className="mr-2 h-4 w-4" /> Add Team Member
        </Button>
      </div>
      <TeamMemberList
        members={teamMembers}
        onEdit={(member) => {
          setEditingMember(member)
          setIsFormOpen(true)
        }}
        onDelete={(id) => {
          setMemberToDelete(id)
          setIsDeleteDialogOpen(true)
        }}
      />
      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{editingMember ? 'Edit' : 'Add'} Team Member</DialogTitle>
          </DialogHeader>
          <TeamMemberForm
            member={editingMember}
            onSubmit={handleAddOrUpdateMember}
            onCancel={() => {
              setIsFormOpen(false)
              setEditingMember(null)
            }}
          />
        </DialogContent>
      </Dialog>
      <DeleteConfirmationDialog
        isOpen={isDeleteDialogOpen}
        onClose={() => setIsDeleteDialogOpen(false)}
        onConfirm={() => memberToDelete && handleDeleteMember(memberToDelete)}
      />
    </div>
  )
}

function TeamMemberList({ members, onEdit, onDelete }: { members: TeamMember[], onEdit: (member: TeamMember) => void, onDelete: (id: string) => void }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {members.map((member) => (
        <Card key={member.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white rounded-lg">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>{member.name}</span>
              <div>
                <Button variant="ghost" size="sm" onClick={() => onEdit(member)}>
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" onClick={() => onDelete(member.id)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4 mb-4">
              <img src={member.avatar} alt={member.name} className="w-16 h-16 rounded-full" />
              <div>
                <p className="font-semibold">{member.position}</p>
                <p className="text-sm text-gray-500">{member.branchAndYear}</p>
              </div>
            </div>
            <p className="text-sm mb-2">{member.description}</p>
            <p className="text-sm text-gray-500">Joined: {format(member.dateJoined, 'MMMM d, yyyy')}</p>
          </CardContent>
          <CardFooter>
            <div className="flex space-x-2">
              {member.socialMedia.linkedin && (
                <a href={member.socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                  LinkedIn
                </a>
              )}
              {member.socialMedia.twitter && (
                <a href={member.socialMedia.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                  Twitter
                </a>
              )}
              {member.socialMedia.instagram && (
                <a href={member.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800">
                  Instagram
                </a>
              )}
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

function TeamMemberForm({ member, onSubmit, onCancel }: { member: TeamMember | null, onSubmit: (member: Omit<TeamMember, 'id'>) => void, onCancel: () => void }) {
  const [name, setName] = useState(member?.name || '')
  const [position, setPosition] = useState(member?.position || '')
  const [branchAndYear, setBranchAndYear] = useState(member?.branchAndYear || '')
  const [dateJoined, setDateJoined] = useState<Date | undefined>(member?.dateJoined)
  const [description, setDescription] = useState(member?.description || '')
  const [avatar, setAvatar] = useState<File | null>(null)
  const [avatarPreview, setAvatarPreview] = useState(member?.avatar || '')
  const [linkedin, setLinkedin] = useState(member?.socialMedia.linkedin || '')
  const [twitter, setTwitter] = useState(member?.socialMedia.twitter || '')
  const [instagram, setInstagram] = useState(member?.socialMedia.instagram || '')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name && position && branchAndYear && dateJoined && description) {
      onSubmit({
        name,
        position,
        branchAndYear,
        dateJoined,
        description,
        avatar: avatarPreview, // In a real app, you'd upload the file and get a URL
        socialMedia: {
          linkedin,
          twitter,
          instagram,
        },
      })
    }
  }

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setAvatar(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setAvatarPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <Label htmlFor="position">Position</Label>
        <Select value={position} onValueChange={setPosition}>
          <SelectTrigger>
            <SelectValue placeholder="Select a position" />
          </SelectTrigger>
          <SelectContent>
            {positions.map((pos) => (
              <SelectItem key={pos} value={pos}>{pos}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="branchAndYear">Branch & Year</Label>
        <Input id="branchAndYear" value={branchAndYear} onChange={(e) => setBranchAndYear(e.target.value)} required />
      </div>
      <div>
        <Label>Date Joined</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-full justify-start text-left font-normal",
                !dateJoined && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {dateJoined ? format(dateJoined, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={dateJoined}
              onSelect={setDateJoined}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
      </div>
      <div>
        <Label htmlFor="avatar">Avatar</Label>
        <Input id="avatar" type="file" accept="image/*" onChange={handleAvatarChange} />
        {avatarPreview && (
          <img src={avatarPreview} alt="Avatar preview" className="mt-2 w-16 h-16 rounded-full object-cover" />
        )}
      </div>
      <div>
        <Label htmlFor="linkedin">LinkedIn URL</Label>
        <Input id="linkedin" type="url" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} />
      </div>
      <div>
        <Label htmlFor="twitter">Twitter URL</Label>
        <Input id="twitter" type="url" value={twitter} onChange={(e) => setTwitter(e.target.value)} />
      </div>
      <div>
        <Label htmlFor="instagram">Instagram URL</Label>
        <Input id="instagram" type="url" value={instagram} onChange={(e) => setInstagram(e.target.value)} />
      </div>
      
      <DialogFooter>
        <Button type="button" variant="outline" onClick={onCancel}>Cancel</Button>
        <Button type="submit">Save</Button>
      </DialogFooter>
    </form>
  )
}

function DeleteConfirmationDialog({ isOpen, onClose, onConfirm }: { isOpen: boolean, onClose: () => void, onConfirm: () => void }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirm Deletion</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this team member? This action cannot be undone.
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