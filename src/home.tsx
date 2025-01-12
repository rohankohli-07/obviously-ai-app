import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/Dialog'
import { Input } from '@/components/ui/Input'
import { Text } from '@/components/ui/Text'
import { useMemo, useState } from 'react'

import { Button } from '@/components/ui/Button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/Table'
import * as data from '@/data.json'
import aepIcon from './assets/Icons/AEP (After Effects), Type=Solid.svg'
import docxIcon from './assets/Icons/DOCX, Type=Solid.svg'
import figmIcon from './assets/Icons/FIG (Figma), Type=Solid.svg'
import jpgIcon from './assets/Icons/JPG, Type=Solid.svg'
import mp4Icon from './assets/Icons/MP4, Type=Solid.svg'
import pdfIcon from './assets/Icons/PDF, Type=Solid.svg'
import trashIcon from './assets/Icons/trash.svg'

import { Dataset, FileType } from '@/models/types'

const fileToIconMap = {
  aep: {
    icon: aepIcon,
    alt: 'AEP File',
  },
  docx: {
    icon: docxIcon,
    alt: 'DOCX File',
  },
  figma: {
    icon: figmIcon,
    alt: 'Figma File',
  },
  jpg: {
    icon: jpgIcon,
    alt: 'JPEG File',
  },
  mp4: {
    icon: mp4Icon,
    alt: 'MP4 File',
  },
  pdf: {
    icon: pdfIcon,
    alt: 'PDF File',
  },
} satisfies { [k in FileType]: { icon: string; alt: string } }

const tableData = (data as { data: Dataset[] }).data
const initialCheckList: Record<string, boolean> = {}
tableData.forEach(({ id }) => {
  initialCheckList[id.toString()] = false
})

export function Home() {
  const [filter, setFilter] = useState('')
  const [checkAll, setCheckAll] = useState(false)

  const [checkList, setCheckList] = useState(initialCheckList)

  const filteredData = useMemo(() => {
    return tableData.filter((item) => {
      const str = JSON.stringify({ values: Object.values(item) })
      return str.toLowerCase().includes(filter.toLowerCase())
    })
  }, [filter])

  const changeAll = () => {}
  return (
    <div className="h-screen w-screen">
      <h1 className="m-16">Home Page</h1>
      <Dialog defaultOpen>
        <DialogContent className="min-h-[800px] w-[80vw]">
          <DialogHeader>
            <DialogTitle>
              <Text className="text-lg" weight="semibold">
                Library
              </Text>
              <Text className="text-sm text-muted-foreground" weight="medium">
                Here is a list of datasets already connected to your Obviously
                AI account.
              </Text>
            </DialogTitle>
            <DialogDescription>
              <Input
                className="my-3 me-2 max-w-64"
                placeholder="Search"
                value={filter}
                onChange={(e) => {
                  setFilter(e.target.value)
                }}
              />
              <div className="border-obviously-gray-600 rounded-lg border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>
                        <input
                          type="checkbox"
                          checked={checkAll}
                          onChange={() => {
                            setCheckAll((curr) => {
                              const next = !curr
                              setCheckList((currList) => {
                                const nextList = { ...currList }
                                Object.keys(nextList).forEach((id) => {
                                  nextList[id] = next
                                })
                                return nextList
                              })
                              return next
                            })
                          }}
                        />
                      </TableHead>
                      <TableHead className="w-1/2">Dataset Name</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Created at</TableHead>
                      <TableHead className="w-1/4">Created by</TableHead>
                      <TableHead></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredData.map((item) => {
                      return (
                        <TableRow key={item.id}>
                          <TableCell>
                            <input
                              type="checkbox"
                              checked={checkList[item.id]}
                              onChange={() => {
                                setCheckList((curr) => {
                                  const next = { ...curr }
                                  next[item.id] = !next[item.id]
                                  return next
                                })
                              }}
                            />
                          </TableCell>
                          <TableCell className="font-medium">
                            <span className="inline-flex gap-4">
                              <img
                                src={fileToIconMap[item.type].icon}
                                alt={fileToIconMap[item.type].alt}
                                className="me-2 h-6 w-6"
                              />
                              <Text weight="semibold">{item.name}</Text>
                            </span>
                          </TableCell>
                          <TableCell>{item.status}</TableCell>
                          <TableCell>{item.createdAt}</TableCell>
                          <TableCell>
                            <Text>{item.createdBy.name}</Text>
                            <Text>{item.createdBy.email}</Text>
                          </TableCell>
                          <TableCell>
                            <Button variant="outline" className="!border-none">
                              <img src={trashIcon} className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      )
                    })}
                  </TableBody>
                </Table>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}
