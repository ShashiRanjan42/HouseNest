// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    proxy: {
      '/api': 'https://housenest.onrender.com',
      // '/api': 'http://localhost:3000',
        
    },
  },
  plugins: [react()],
})
