export type User = {
  name: string
  email: string
  id: number
  roles?: number[]
  resourceAndPermissions?: never[]
}

export type FileType = 'aep' | 'docx' | 'figma' | 'jpg' | 'mp4' | 'pdf'
export type DatasetStatus = 'uploaded' | 'connected' | 'error'

export type Dataset = {
  id: number
  name: string
  type: FileType
  status: DatasetStatus
  createdAt: string
  createdBy: Pick<User, 'name' | 'email'>
}
