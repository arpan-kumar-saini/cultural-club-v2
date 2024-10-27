'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { Loader2, X, Eye, EyeOff, Pencil, Trash2 } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

type AdminType = 'Events Admin' | 'Gallery Admin' | 'Downloads Admin' | 'Team Admin'
type Permission = 'Read' | 'Create' | 'Update' | 'Delete'

interface Admin {
  id: string
  username: string
  adminType: AdminType
  permissions: Permission[]
}

const adminTypes: AdminType[] = ['Events Admin', 'Gallery Admin', 'Downloads Admin', 'Team Admin']
const permissions: Permission[] = ['Read', 'Create', 'Update', 'Delete']

export default function SuperAdminPanel() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [adminType, setAdminType] = useState<AdminType | ''>('')
  const [selectedPermissions, setSelectedPermissions] = useState<Permission[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [admins, setAdmins] = useState<Admin[]>([])
  const [editingAdmin, setEditingAdmin] = useState<Admin | null>(null)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [adminToDelete, setAdminToDelete] = useState<string | null>(null)
  const { toast } = useToast()

  useEffect(() => {
    fetchAdmins()
  }, [])

  const fetchAdmins = async () => {
    // TODO: Replace with actual API call
    // const response = await fetch('/api/admins')
    // const data = await response.json()
    // setAdmins(data)

    // Mock data for demonstration
    setAdmins([
      { id: '1', username: 'john_doe', adminType: 'Events Admin', permissions: ['Read', 'Create'] },
      { id: '2', username: 'jane_smith', adminType: 'Gallery Admin', permissions: ['Read', 'Create', 'Update', 'Delete'] },
    ])
  }

  const handlePermissionToggle = (permission: Permission) => {
    setSelectedPermissions(prev =>
      prev.includes(permission)
        ? prev.filter(p => p !== permission)
        : [...prev, permission]
    )
  }

  const handleCreateAdmin = async () => {
    if (!username || !password || !adminType) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)
    // TODO: Replace with actual API call
    // try {
    //   const response = await fetch('/api/create-admin', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ username, password, adminType, permissions: selectedPermissions }),
    //   })
    //   if (!response.ok) throw new Error('Failed to create admin')
    //   setSuccessMessage('Admin created successfully!')
    //   fetchAdmins()
    // } catch (error) {
    //   toast({
    //     title: "Error",
    //     description: "Failed to create admin. Please try again.",
    //     variant: "destructive",
    //   })
    // }

    // Simulating API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    setSuccessMessage('Admin created successfully!')
    setAdmins([...admins, { id: Date.now().toString(), username, adminType, permissions: selectedPermissions }])
    setIsLoading(false)
    resetForm()
  }

  const handleEditAdmin = async (admin: Admin) => {
    // TODO: Replace with actual API call
    // try {
    //   const response = await fetch(`/api/admins/${admin.id}`, {
    //     method: 'PUT',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(admin),
    //   })
    //   if (!response.ok) throw new Error('Failed to update admin')
    //   toast({
    //     title: "Success",
    //     description: "Admin updated successfully.",
    //   })
    //   fetchAdmins()
    // } catch (error) {
    //   toast({
    //     title: "Error",
    //     description: "Failed to update admin. Please try again.",
    //     variant: "destructive",
    //   })
    // }

    // Simulating API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setAdmins(admins.map(a => a.id === admin.id ? admin : a))
    toast({
      title: "Success",
      description: "Admin updated successfully.",
    })
    setEditingAdmin(null)
  }

  const handleDeleteAdmin = async (id: string) => {
    // TODO: Replace with actual API call
    // try {
    //   const response = await fetch(`/api/admins/${id}`, {
    //     method: 'DELETE',
    //   })
    //   if (!response.ok) throw new Error('Failed to delete admin')
    //   toast({
    //     title: "Success",
    //     description: "Admin deleted successfully.",
    //   })
    //   fetchAdmins()
    // } catch (error) {
    //   toast({
    //     title: "Error",
    //     description: "Failed to delete admin. Please try again.",
    //     variant: "destructive",
    //   })
    // }

    // Simulating API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setAdmins(admins.filter(admin => admin.id !== id))
    toast({
      title: "Success",
      description: "Admin deleted successfully.",
    })
    setIsDeleteDialogOpen(false)
    setAdminToDelete(null)
  }

  const resetForm = () => {
    setUsername('')
    setPassword('')
    setAdminType('')
    setSelectedPermissions([])
  }

  return (
    <div className="container mx-auto p-4">
      <Card className="w-full max-w-2xl mx-auto mb-8">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Create New Admin</CardTitle>
          <CardDescription>Add a new admin with customized permissions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="admin-type">Admin Type</Label>
              <Select value={adminType} onValueChange={(value: AdminType) => setAdminType(value)}>
                <SelectTrigger id="admin-type">
                  <SelectValue placeholder="Select Admin Type" />
                </SelectTrigger>
                <SelectContent>
                  {adminTypes.map((type) => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Assign Permissions</Label>
              <div className="grid grid-cols-2 gap-4">
                {permissions.map((permission) => (
                  <TooltipProvider key={permission}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id={permission}
                            checked={selectedPermissions.includes(permission)}
                            onCheckedChange={() => handlePermissionToggle(permission)}
                          />
                          <Label htmlFor={permission} className="cursor-pointer">
                            {permission}
                          </Label>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{getPermissionDescription(permission)}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-stretch space-y-4">
          <div className="flex space-x-2">
            <Button onClick={handleCreateAdmin} disabled={isLoading} className="flex-1">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating Admin...
                </>
              ) : (
                'Create Admin'
              )}
            </Button>
            <Button onClick={resetForm} variant="outline">
              Reset Form
            </Button>
          </div>
          {successMessage && (
            <div className="flex items-center justify-between w-full p-4 bg-green-100 text-green-700 rounded-md">
              <span>{successMessage}</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSuccessMessage('')}
                className="h-auto p-0 text-green-700"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          )}
        </CardFooter>
      </Card>

      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Existing Admins</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Username</TableHead>
                <TableHead>Admin Type</TableHead>
                <TableHead>Permissions</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {admins.map((admin) => (
                <TableRow key={admin.id}>
                  <TableCell>{admin.username}</TableCell>
                  <TableCell>{admin.adminType}</TableCell>
                  <TableCell>{admin.permissions.join(', ')}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" onClick={() => setEditingAdmin(admin)}>
                        <Pencil className="h-4 w-4 mr-1" /> Edit
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => {
                          setAdminToDelete(admin.id)
                          setIsDeleteDialogOpen(true)
                        }}
                      >
                        <Trash2 className="h-4 w-4 mr-1" /> Delete
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog open={editingAdmin !== null} onOpenChange={() => setEditingAdmin(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Admin</DialogTitle>
          </DialogHeader>
          {editingAdmin && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="edit-username">Username</Label>
                <Input
                  id="edit-username"
                  value={editingAdmin.username}
                  onChange={(e) => setEditingAdmin({ ...editingAdmin, username: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-admin-type">Admin Type</Label>
                <Select
                  value={editingAdmin.adminType}
                  onValueChange={(value: AdminType) => setEditingAdmin({ ...editingAdmin, adminType: value })}
                >
                  <SelectTrigger id="edit-admin-type">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {adminTypes.map((type) => (
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Permissions</Label>
                <div className="grid grid-cols-2 gap-4">
                  {permissions.map((permission) => (
                    <div key={permission} className="flex items-center space-x-2">
                      <Checkbox
                        id={`edit-${permission}`}
                        checked={editingAdmin.permissions.includes(permission)}
                        onCheckedChange={(checked) => {
                          const newPermissions = checked
                            ? [...editingAdmin.permissions, permission]
                            : editingAdmin.permissions.filter(p => p !== permission)
                          setEditingAdmin({ ...editingAdmin, permissions: newPermissions })
                        }}
                      />
                      <Label htmlFor={`edit-${permission}`}>{permission}</Label>
                    </div>
                  ))}
                </div>
              
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setEditingAdmin(null)}>Cancel</Button>
            <Button onClick={() => editingAdmin && handleEditAdmin(editingAdmin)}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this admin? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>Cancel</Button>
            <Button variant="destructive" onClick={() => adminToDelete && handleDeleteAdmin(adminToDelete)}>Delete</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

function getPermissionDescription(permission: Permission): string {
  switch (permission) {
    case 'Read':
      return 'Can view content in the assigned section'
    case 'Create':
      return 'Can add new items to the assigned section'
    case 'Update':
      return 'Can modify existing items in the assigned section'
    case 'Delete':
      return 'Can remove items from the assigned section'
    default:
      return ''
  }
}