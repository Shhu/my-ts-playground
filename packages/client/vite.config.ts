import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@app-shared': resolve(__dirname, '../shared'),
            '@app-client': resolve(__dirname, '.'),
            '@app-server': resolve(__dirname, '../server'),
        },
    },
    server: {
        port: 3011,
    },
    preview: {
        host: 'localhost',
        port: 5000,
        strictPort: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },
})
// https://vitejs.dev/config/#environment-variables
