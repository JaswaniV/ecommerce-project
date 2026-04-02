import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    //The environment and globals options are required to run tests in a React environment
    environment: 'jsdom',
    globals: true,
    setupFiles: './setupTests.js', // This runs the code inside it before all of our tests
    //The code in the setupTests.js adds a bunch of method to expect to help us test component
  }
});