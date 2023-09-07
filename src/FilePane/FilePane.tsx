import React from 'react'
import { Box, Typography } from '@mui/material'
import { FileRow } from './components/FileRow'
import { useWorkspaceContext } from '../Workspace/Workspace.context'

export const FilePane = () => {
  const { files } = useWorkspaceContext()

  return (
    <Box>
      <Box p={1}>
        <Typography variant="h6">Files</Typography>
      </Box>
      <Box>
        {
          files.map((file) => <FileRow key={file.path} file={file} />)
        }
      </Box>
    </Box>
  )
}
