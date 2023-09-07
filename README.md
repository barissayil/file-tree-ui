# Ksaar file tree exercise
This repo is the base of the ksaar file tree exercise. You can clone / fork it to start your own project.

## Rules
You are tasked with building a File Tree UI given a list of File objects, consisting of a path and the contents of the file. Your solution must:

- display files in a nested structure, with entries for each folder and file
- be able to handle arbitrarily-deep file structures
- sort the file tree by the following rules:
    - folders are shown before files
    - all items are sorted alphabetically (case-insensitive)

If you solve this challenge and you still have more time, our follow-on task is to implement the ability to add new files to the file tree

## Starting the app
To start the project first install dependencies `npm install` then launch `npm run dev`

# About this repo

## Running React

This repo is running a React app that is served by Vite.  You can add as many files to the project as you need, as well as any NPM packages.

To get started, edit the `App.tsx` file, and see your changes reload on the right.

### TypeScript

The app is pre-configured to support TypeScript, but you can define .js and .jsx files instead.

### Shell

A shell is provided to you so you can inspect your container in more detail.  The shell can be used to install NPM packages using `npm install <package>`.  In addition to installing packages, the shell can be used for executing a test suite if you have one defined.

### Hot Module Reloading

Vite provides Hot Module Reloading by default, meaning that changes you make to the files in your project are automatically applied (after a 2 second debounce); there is no need to refresh the iframe to see the changes.  Vite will display any errors directly in the application output, or if there is a system-wide error, in the Logs.

Note that changes to certain files (index.html, vite.config.ts, and others) will cause the entire application to reload, while changes to other files (App.tsx) will not cause an app reload. The state of the application will be reset whenever the application reloads.

### About Vite

We chose [Vite](https://vitejs.dev) because of its [fast startup times](​​https://vitejs.dev/guide/why.html#slow-server-start) and [quick browser updates](https://vitejs.dev/guide/why.html#slow-updates) using native ES Modules.  You probably won't need to change any of the [Vite configuration options](https://vitejs.dev/config/), but if you do, you can edit the `vite.config.ts` file.

### Container Limits

The container running your application has a few limitations.  Currently, we don't limit your CPU usage, though this may change in future.  In addition to CPU, we monitor the network bandwidth that is consumed, and limit you to 75mb for the duration of the container.  Finally, we limit the amount of memory accessible to each container to 2 GB.

### Assets

Out-of-the-box support for SVG files is included, just add a `whatever.svg` file and then import it wherever you need it.  Other assets will need to be hosted elsewhere and fetched via the shell, or just referenced directly in HTML tags.
