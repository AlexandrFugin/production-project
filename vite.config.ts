import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  // esbuild не умеет даунгрейдить const/let в ES5; tsconfig target: es5 нужен для webpack/babel
  esbuild: {
    target: 'es2020',
  },
  build: {
    target: 'es2020',
  },
  plugins: [
    svgr({exportAsDefault: true}),
    react()
  ],
  resolve: {
    alias: [
      {find: '@', replacement: '/src'},
    ]
  },
  define: {
    __IS_DEV__: JSON.stringify(true),
    __API__: JSON.stringify('http://localhost:8000'),
    __PROJECT__: JSON.stringify('frontend'),
  }
})