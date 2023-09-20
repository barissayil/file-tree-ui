import React from "react";
import { Box, Typography } from "@mui/material";
import { FilePane } from "../FilePane/FilePane";
import { Editor } from "../Editor/Editor";
import { WorkspaceProvider } from "./Workspace.context";
import defaultFiles from "./defaultFiles";
import sortBy from "lodash.sortby";

export const Workspace = () => {
  return (
    <WorkspaceProvider files={sortBy(defaultFiles, "path")}>
      <Box display="flex" height="100%">
        <FilePane />
        <Editor />
      </Box>
    </WorkspaceProvider>
  );
};
