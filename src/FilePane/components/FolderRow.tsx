import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { FileIcon } from "./FileIcon";
import {
  useWorkspaceContext,
  File,
  NestedFile,
  Folder,
} from "../../Workspace/Workspace.context";
import { FileRow } from "./FileRow";
import { IconChevronDown } from "@tabler/icons-react";

interface IFolderRowProps {
  folderName: string;
  folders: Folder[];
  files: NestedFile[];
}

export const FolderRow: React.FC<IFolderRowProps> = ({
  folders,
  files,
  folderName,
}) => {
  return (
    <Box display="flex" flexDirection="column" key={folderName} px={1}>
      <Box>
        <Box
          display="flex"
          alignItems="center"
          sx={{
            cursor: "default",
            "&:hover": {
              background: "#E6E6E6",
            },
          }}
        >
          <IconChevronDown />
          <Typography variant="body2">{folderName}</Typography>
        </Box>
        {folders.map((folder) => (
          <FolderRow
            key={folder.name}
            folderName={folder.name}
            folders={folder.folders}
            files={folder.files}
          />
        ))}
        {files.map((file) => (
          <FileRow key={file.path} file={file} />
        ))}
      </Box>
    </Box>
  );
};
