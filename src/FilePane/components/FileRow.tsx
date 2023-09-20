import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { FileIcon } from "./FileIcon";
import {
  useWorkspaceContext,
  File,
  NestedFile,
} from "../../Workspace/Workspace.context";

interface IFileRowProps {
  file: NestedFile;
}

export const FileRow: React.FC<IFileRowProps> = ({ file }) => {
  const { activeFile, activateFile } = useWorkspaceContext();

  return (
    <Box
      display="flex"
      height="1.5rem"
      flexDirection="row"
      alignItems="center"
      // key={file.path}
      px={1}
      sx={{
        cursor: "default",
        background: activeFile.path === file.path ? "#DADADA" : "inherit",
        "&:hover": {
          background: "#E6E6E6",
        },
      }}
      onClick={() => activateFile(file.path)}
    >
      <Box width="1.5rem">
        <FileIcon fileName={file.path} />
      </Box>
      <Typography variant="body2">{file.filename}</Typography>
    </Box>
  );
};
