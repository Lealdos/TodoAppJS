/* eslint-disable no-undef */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
    const config = {
        plugins: [react()],
        resolve: {
            alias: {
                home: path.resolve(__dirname, './src/'),
                components: `${path.resolve(__dirname, './src/components/')}`,
                public: `${path.resolve(__dirname, './public/')}`,
                pages: path.resolve(__dirname, './src/pages'),
                assets: `${path.resolve(__dirname, './src/assets')}`,
                context: `${path.resolve(
                    __dirname,
                    './src/components/context'
                )}`,
                Hooks: `${path.resolve(__dirname, './src/assets/Hooks')}`,
                supabaseClient: `${path.resolve(
                    __dirname,
                    './src/SupabaseClient/'
                )}`,
            },
        },
        base: '/',
    };

    if (command !== 'serve') {
        config.base = '/TodoAppJS/';
    }

    return config;
});
