import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Netflix-React-Normal_CSS/",
  server:{
    open: true,
    port: 5173,
  }
})
