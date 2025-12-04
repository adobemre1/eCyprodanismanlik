import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    // Test environment
    environment: 'jsdom',

    // Setup files
    setupFiles: ['./src/test/setup.js'],

    // Global test configuration
    globals: true,

    // Coverage configuration
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov'],
      exclude: [
        'node_modules/',
        'src/test/',
        '**/*.config.js',
        'dist/',
        'public/',
        '**/*.d.ts',
        '**/*.test.{js,jsx}',
        '**/*.spec.{js,jsx}'
      ],
      statements: 80,
      branches: 75,
      functions: 80,
      lines: 80
    },

    // Test inclusion patterns
    include: ['**/*.{test,spec}.{js,jsx}'],

    // Test exclusion patterns
    exclude: [
      'node_modules/',
      'dist/',
      'public/',
      'ecypro-consulting/'
    ],

    // Watch mode
    watch: false,

    // Parallel execution
    threads: true,

    // Timeout
    testTimeout: 10000,

    // Hook timeout
    hookTimeout: 10000,

    // Reporter
    reporters: ['verbose'],

    // Mock configuration
    mockReset: true,
    restoreMocks: true,
    clearMocks: true
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@utils': path.resolve(__dirname, './src/utils')
    }
  }
});
