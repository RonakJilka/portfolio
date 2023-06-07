import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  chunkSizeWarningLimit: 1600,
  build: {
    rollupOptions: {
        output:{
           manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          }
        }
    }
}
})
