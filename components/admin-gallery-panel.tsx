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
import { Trash2, Plus, Image as ImageIcon, Video } from "lucide-react"

type MediaItem = {
  id: string
  title: string
  description: string
  type: 'image' | 'video'
  url: string
}

export default function AdminGalleryPanel() {
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([])
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [itemToDelete, setItemToDelete] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const { toast } = useToast()

  useEffect(() => {
    fetchMediaItems()
  }, [currentPage])

  const fetchMediaItems = async () => {
    // TODO: Replace with actual API call
    // const response = await fetch(`/api/media?page=${currentPage}`)
    // const data = await response.json()
    // setMediaItems(data.items)
    // setTotalPages(data.totalPages)

    // Mock data for demonstration
    setMediaItems([
      {
        id: '1',
        title: 'Cultural Dance Performance',
        description: 'Students performing traditional dance at the annual cultural fest.',
        type: 'image',
        url: '/placeholder.svg?height=200&width=300',
      },
      {
        id: '2',
        title: 'Music Concert Highlights',
        description: 'Highlights from the inter-college music competition.',
        type: 'video',
        url: 'https://example.com/video1.mp4',
      },
    ])
    setTotalPages(5)
  }

  const handleAddMedia = async (item: Omit<MediaItem, 'id'>) => {
    // TODO: Replace with actual API call
    // const response = await fetch('/api/media', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(item),
    // })
    // const newItem = await response.json()

    // Mock adding media item
    const newItem = { ...item, id: Date.now().toString() }
    setMediaItems([...mediaItems, newItem])
    setIsAddModalOpen(false)
    toast({
      title: "Media Added",
      description: "The new media item has been successfully added to the gallery.",
    })
  }

  const handleDeleteMedia = async (id: string) => {
    // TODO: Replace with actual API call
    // await fetch(`/api/media/${id}`, { method: 'DELETE' })

    // Mock deleting media item
    setMediaItems(mediaItems.filter(item => item.id !== id))
    setIsDeleteDialogOpen(false)
    setItemToDelete(null)
    toast({
      title: "Media Deleted",
      description: "The media item has been successfully removed from the gallery.",
    })
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Our Cultural Gallery Management</h1>
      <div className="mb-4">
        <Button onClick={() => setIsAddModalOpen(true)}>
          <Plus className="mr-2 h-4 w-4" /> Add Media
        </Button>
      </div>
      <MediaGrid
        items={mediaItems}
        onDeleteItem={setItemToDelete}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
      <AddMediaModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddMedia={handleAddMedia}
      />
      <DeleteConfirmationDialog
        isOpen={isDeleteDialogOpen}
        onClose={() => setIsDeleteDialogOpen(false)}
        onConfirm={() => itemToDelete && handleDeleteMedia(itemToDelete)}
      />
    </div>
  )
}

function MediaGrid({ items, onDeleteItem }: { items: MediaItem[], onDeleteItem: (id: string) => void }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <Card key={item.id}>
          <CardHeader>
            <CardTitle>{item.title}</CardTitle>
          </CardHeader>
          <CardContent>
            {item.type === 'image' ? (
              <img src={item.url} alt={item.title} className="w-full h-40 object-cover mb-2" />
            ) : (
              <div className="w-full h-40 bg-gray-200 flex items-center justify-center mb-2">
                <Video className="h-12 w-12 text-gray-400" />
              </div>
            )}
            <p className="text-sm text-gray-600">{item.description}</p>
          </CardContent>
          <CardFooter>
            <Button variant="destructive" onClick={() => onDeleteItem(item.id)}>
              <Trash2 className="mr-2 h-4 w-4" /> Delete
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

function AddMediaModal({ isOpen, onClose, onAddMedia }: { isOpen: boolean, onClose: () => void, onAddMedia: (item: Omit<MediaItem, 'id'>) => void }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [type, setType] = useState<'image' | 'video'>('image')
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (title && description && type && file) {
      // In a real application, you would upload the file to a server or cloud storage
      // and get a URL in return. For this example, we'll use a placeholder URL.
      const url = type === 'image' ? '/placeholder.svg?height=200&width=300' : 'https://example.com/video.mp4'
      onAddMedia({ title, description, type, url })
      resetForm()
    }
  }

  const resetForm = () => {
    setTitle('')
    setDescription('')
    setType('image')
    setFile(null)
    setPreview(null)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
      if (type === 'image') {
        const reader = new FileReader()
        reader.onloadend = () => {
          setPreview(reader.result as string)
        }
        reader.readAsDataURL(selectedFile)
      } else {
        setPreview(null)
      }
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => {
      if (!open) {
        resetForm()
      }
      onClose()
    }}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Media</DialogTitle>
          <DialogDescription>
            Enter the details for the new media item. All fields are required.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Title
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
              <Label htmlFor="description" className="text-right">
                Description
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
              <Label htmlFor="type" className="text-right">
                Media Type
              </Label>
              <Select value={type} onValueChange={(value: 'image' | 'video') => setType(value)}>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select media type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="image">Image</SelectItem>
                  <SelectItem value="video">Video</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="file" className="text-right">
                Upload File
              </Label>
              <Input
                id="file"
                type="file"
                onChange={handleFileChange}
                accept={type === 'image' ? 'image/*' : 'video/*'}
                className="col-span-3"
                required
              />
            </div>
            {preview && type === 'image' && (
              <div className="col-span-4">
                <img src={preview} alt="Preview" className="max-w-full h-auto" />
              </div>
            )}
          </div>
          <DialogFooter>
            <Button type="submit">Add Media</Button>
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
            Are you sure you want to delete this media item? This action cannot be undone.
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

function Pagination({ currentPage, totalPages, onPageChange }: { currentPage: number, totalPages: number, onPageChange: (page: number) => void }) {
  return (
    <div className="flex justify-center items-center space-x-2 mt-4">
      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </Button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </Button>
    </div>
  )
}