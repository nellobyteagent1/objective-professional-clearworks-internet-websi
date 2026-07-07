import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoBase = '/objective-professional-clearworks-internet-websi/'

export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_ACTIONS ? repoBase : '/',
})
