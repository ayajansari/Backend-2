import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api':'http://localhost:3000'
    }
    //because our server is running on http://locahost:3000 so the request is now
    //initialized from localhost:3000 and not from localhost:5173
  },
  plugins: [react()],
})
