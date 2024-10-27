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
import { Trash2, Plus, Download, Search } from "lucide-react"

type DownloadableFile = {
  id: string
  title: string
  description: string
  type: 'Image' | 'PDF' | 'Video' | 'Audio' | 'Presentation' | 'Document'
  url: string
}

const fileTypes = ['Image', 'PDF', 'Video', 'Audio', 'Presentation', 'Document'] as const

export default function AdminDownloadsPanel() {
  const [files, setFiles] = useState<DownloadableFile[]>([])
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [fileToDelete, setFileToDelete] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')
  const { toast } = useToast()

  useEffect(() => {
    fetchFiles()
  }, [currentPage, searchQuery])

  const fetchFiles = async () => {
    // TODO: Replace with actual API call
    // const response = await fetch(`/api/files?page=${currentPage}&search=${searchQuery}`)
    // const data = await response.json()
    // setFiles(data.files)
    // setTotalPages(data.totalPages)

    // Mock data for demonstration
    setFiles([
      {
        id: '1',
        title: 'Event Schedule',
        description: 'Detailed schedule for the upcoming cultural fest',
        type: 'PDF',
        url: '/mock-files/event-schedule.pdf',
      },
      {
        id: '2',
        title: 'Campus Map',
        description: 'Interactive map of the college campus',
        type: 'Image',
        url: '/mock-files/campus-map.jpg',
      },
    ])
    setTotalPages(5)
  }

  const handleAddFile = async (file: Omit<DownloadableFile, 'id'>) => {
    // TODO: Replace with actual API call
    // const response = await fetch('/api/files', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(file),
    // })
    // const newFile = await response.json()

    // Mock adding file
    const newFile = { ...file, id: Date.now().toString() }
    setFiles([...files, newFile])
    setIsAddModalOpen(false)
    toast({
      title: "File Added",
      description: "The new file has been successfully added to the downloads list.",
    })
  }

  const handleDeleteFile = async (id: string) => {
    // TODO: Replace with actual API call
    // await fetch(`/api/files/${id}`, { method: 'DELETE' })

    // Mock deleting file
    setFiles(files.filter(file => file.id !== id))
    setIsDeleteDialogOpen(false)
    setFileToDelete(null)
    toast({
      title: "File Deleted",
      description: "The file has been successfully removed from the downloads list.",
    })
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Downloads Management</h1>
      <div className="flex justify-between items-center mb-4">
        <Button onClick={() => setIsAddModalOpen(true)}>
          <Plus className="mr-2 h-4 w-4" /> Add File
        </Button>
        <SearchBar onSearch={setSearchQuery} />
      </div>
      <FileList
        files={files}
        onDeleteFile={setFileToDelete}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
      <AddFileModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddFile={handleAddFile}
      />
      <DeleteConfirmationDialog
        isOpen={isDeleteDialogOpen}
        onClose={() => setIsDeleteDialogOpen(false)}
        onConfirm={() => fileToDelete && handleDeleteFile(fileToDelete)}
      />
    </div>
  )
}

function FileList({ files, onDeleteFile }: { files: DownloadableFile[], onDeleteFile: (id: string) => void }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {files.map((file) => (
        <Card key={file.id}>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>{file.title}</span>
              <Button variant="ghost" size="sm" onClick={() => onDeleteFile(file.id)}>
                <Trash2 className="h-4 w-4" />
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-2">{file.description}</p>
            <p className="text-sm text-gray-500">Type: {file.type}</p>
            {file.type === 'Image' && (
              <img src={file.url} alt={file.title} className="mt-2 max-w-full h-auto" />
            )}
          </CardContent>
          <CardFooter>
            <Button asChild>
              <a href={file.url} download>
                <Download className="mr-2 h-4 w-4" /> Download
              </a>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

function AddFileModal({ isOpen, onClose, onAddFile }: { isOpen: boolean, onClose: () => void, onAddFile: (file: Omit<DownloadableFile, 'id'>) => void }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [type, setType] = useState<DownloadableFile['type']>('Document')
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (title && description && type && file) {
      // In a real application, you would upload the file to a server or cloud storage
      // and get a URL in return. For this example, we'll use a placeholder URL.
      const url = URL.createObjectURL(file)
      onAddFile({ title, description, type, url })
      resetForm()
    }
  }

  const resetForm = () => {
    setTitle('')
    setDescription('')
    setType('Document')
    setFile(null)
    setPreview(null)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
      if (type === 'Image') {
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
          <DialogTitle>Add New File</DialogTitle>
          <DialogDescription>
            Enter the details for the new downloadable file. All fields are required.
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
                File Type
              </Label>
              <Select value={type} onValueChange={(value: DownloadableFile['type']) => setType(value)}>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select file type" />
                </SelectTrigger>
                <SelectContent>
                  {fileTypes.map((fileType) => (
                    <SelectItem key={fileType} value={fileType}>{fileType}</SelectItem>
                  ))}
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
                className="col-span-3"
                required
              />
            </div>
            {preview && type === 'Image' && (
              <div className="col-span-4">
                <img src={preview} alt="Preview" className="max-w-full h-auto" />
              </div>
            )}
          </div>
          <DialogFooter>
            <Button type="submit">Add File</Button>
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
            Are you sure you want to delete this file? This action cannot be undone.
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

function SearchBar({ onSearch }: { onSearch: (query: string) => void }) {
  const [query, setQuery] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(query)
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center">
      <Input
        type="text"
        placeholder="Search files..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="mr-2"
      />
      <Button type="submit" variant="outline">
        <Search className="h-4 w-4" />
      </Button>
    </form>
  )
}