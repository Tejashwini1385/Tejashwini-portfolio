import { copyFileSync } from 'node:fs'

// GitHub Pages serves this file for unknown paths. Using the built index keeps
// its hashed asset references in sync while React Router handles the URL.
copyFileSync('dist/index.html', 'dist/404.html')
