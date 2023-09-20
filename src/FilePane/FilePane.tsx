import React from "react";
import { Box, Typography } from "@mui/material";
import { FileRow } from "./components/FileRow";
import {
  useWorkspaceContext,
  File,
  Folder,
  NestedFile,
} from "../Workspace/Workspace.context";
import { FolderRow } from "./components/FolderRow";

export const FilePane = () => {
  const { files } = useWorkspaceContext();

  const buildFolderStructure = (files: File[]): Folder => {
    const root: Folder = { name: "", files: [], folders: [] };
    files.forEach((file) => {
      const parts = file.path.split("/");
      let currentFolder = root;
      const filename = parts[parts.length - 1];
      const nestedFile: NestedFile = {
        ...file,
        filename,
      };
      for (let i = 0; i < parts.length - 1; i++) {
        const folderName = parts[i];
        let folder = currentFolder.folders.find((f) => f.name === folderName);
        if (!folder) {
          folder = { name: folderName, files: [], folders: [] };
          currentFolder.folders.push(folder);
        }
        currentFolder = folder;
      }
      currentFolder.files.push(nestedFile);
    });
    return root;
  };

  const rootFolder = buildFolderStructure(files);

  return (
    <Box>
      <Box p={1}>
        <Typography variant="h6">Files</Typography>
      </Box>
      <Box>
        {rootFolder.folders.map((folder) => (
          <FolderRow
            key={folder.name}
            folderName={folder.name}
            folders={folder.folders}
            files={folder.files}
          />
        ))}
        {rootFolder.files.map((file) => (
          <FileRow key={file.path} file={file} />
        ))}
      </Box>
    </Box>
  );
};
