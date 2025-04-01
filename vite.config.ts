import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig(() => {
    return {
        plugins: [
            react()
        ],
        define: {
            __filename: '"test"' // fix dogecoin-js runtime bug after bundling!!
        }
    }
})