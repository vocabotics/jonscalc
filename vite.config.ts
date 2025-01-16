import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    strictPort: true,
    cors: true,
    https: process.env.VITE_SSL_KEY && process.env.VITE_SSL_CERT ? {
      key: fs.readFileSync(process.env.VITE_SSL_KEY),
      cert: fs.readFileSync(process.env.VITE_SSL_CERT)
    } : undefined,
    hmr: {
      clientPort: 443,
      protocol: 'wss',
      host: 'early.incipio.dev'
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
}) 