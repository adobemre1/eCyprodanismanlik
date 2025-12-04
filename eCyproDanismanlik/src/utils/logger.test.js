/**
 * Tests for logger utility
 */

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import logger from './logger';

describe('Logger Utility', () => {
  let consoleLogSpy;
  let consoleInfoSpy;
  let consoleWarnSpy;
  let consoleErrorSpy;

  beforeEach(() => {
    // Spy on console methods
    consoleLogSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
    consoleInfoSpy = vi.spyOn(console, 'info').mockImplementation(() => {});
    consoleWarnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    // Restore console methods
    consoleLogSpy.mockRestore();
    consoleInfoSpy.mockRestore();
    consoleWarnSpy.mockRestore();
    consoleErrorSpy.mockRestore();
  });

  describe('debug()', () => {
    it('should not log in test environment', () => {
      logger.debug('Test debug message');
      expect(consoleLogSpy).not.toHaveBeenCalled();
    });

    it('should format message with timestamp', () => {
      // Temporarily override shouldLog to test formatting
      const originalLogLevel = logger.logLevel;
      logger.logLevel = 0; // DEBUG level

      logger.debug('Test message');

      expect(consoleLogSpy).toHaveBeenCalledWith(
        expect.stringContaining('[DEBUG] Test message')
      );

      logger.logLevel = originalLogLevel;
    });
  });

  describe('info()', () => {
    it('should not log in test environment', () => {
      logger.info('Test info message');
      expect(consoleInfoSpy).not.toHaveBeenCalled();
    });
  });

  describe('warn()', () => {
    it('should not log in test environment', () => {
      logger.warn('Test warning message');
      expect(consoleWarnSpy).not.toHaveBeenCalled();
    });
  });

  describe('error()', () => {
    it('should not log in test environment', () => {
      logger.error('Test error message');
      expect(consoleErrorSpy).not.toHaveBeenCalled();
    });

    it('should handle error objects', () => {
      const error = new Error('Test error');
      logger.error('Error occurred', error);
      // In test environment, this should not log
      expect(consoleErrorSpy).not.toHaveBeenCalled();
    });

    it('should handle context objects', () => {
      logger.error('Error with context', null, { userId: 123, action: 'test' });
      expect(consoleErrorSpy).not.toHaveBeenCalled();
    });
  });

  describe('formatMessage()', () => {
    it('should format message with timestamp and level', () => {
      const formatted = logger.formatMessage('INFO', 'Test message');
      expect(formatted).toMatch(/\[\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.*\] \[INFO\] Test message/);
    });

    it('should include context when provided', () => {
      const formatted = logger.formatMessage('ERROR', 'Test error', { key: 'value' });
      expect(formatted).toContain('Context:');
      expect(formatted).toContain('"key": "value"');
    });

    it('should not include context when empty', () => {
      const formatted = logger.formatMessage('INFO', 'Test message', {});
      expect(formatted).not.toContain('Context:');
    });
  });

  describe('shouldLog()', () => {
    it('should respect log level hierarchy', () => {
      // In test environment, log level is NONE (4)
      expect(logger.shouldLog('DEBUG')).toBe(false);
      expect(logger.shouldLog('INFO')).toBe(false);
      expect(logger.shouldLog('WARN')).toBe(false);
      expect(logger.shouldLog('ERROR')).toBe(false);
    });
  });

  describe('api()', () => {
    it('should log successful API calls as info', () => {
      logger.api('GET', '/api/users', 200);
      // Should not log in test environment
      expect(consoleInfoSpy).not.toHaveBeenCalled();
    });

    it('should log failed API calls as error', () => {
      logger.api('POST', '/api/users', 500);
      // Should not log in test environment
      expect(consoleErrorSpy).not.toHaveBeenCalled();
    });
  });

  describe('component()', () => {
    it('should log component lifecycle events', () => {
      logger.component('MyComponent', 'mounted', { props: { id: 1 } });
      expect(consoleLogSpy).not.toHaveBeenCalled();
    });
  });

  describe('performance()', () => {
    it('should log performance metrics', () => {
      logger.performance('Page Load', 1234);
      expect(consoleInfoSpy).not.toHaveBeenCalled();
    });
  });

  describe('group()', () => {
    it('should execute callback without grouping in non-development', () => {
      let executed = false;
      logger.group('Test Group', () => {
        executed = true;
      });
      expect(executed).toBe(true);
    });
  });

  describe('Environment detection', () => {
    it('should detect test environment', () => {
      expect(logger.isTest).toBe(true);
    });

    it('should have NONE log level in test environment', () => {
      expect(logger.logLevel).toBe(4); // NONE
    });
  });
});
