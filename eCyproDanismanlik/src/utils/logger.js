/**
 * Professional Logger Utility
 *
 * Environment-aware logging system that:
 * - Logs to console in development
 * - Suppresses logs in production (except errors)
 * - Provides structured logging with timestamps
 * - Can be extended to send logs to external services (Sentry, LogRocket, etc.)
 */

const LOG_LEVELS = {
  DEBUG: 0,
  INFO: 1,
  WARN: 2,
  ERROR: 3,
  NONE: 4
};

class Logger {
  constructor() {
    // Environment detection that works in both browser and Node.js
    const isBrowser = typeof window !== 'undefined';
    const isNode = typeof process !== 'undefined' && process.env;

    let mode = 'production'; // default

    if (isBrowser && typeof import.meta !== 'undefined' && import.meta.env) {
      mode = import.meta.env.MODE || 'production';
    } else if (isNode) {
      mode = process.env.NODE_ENV || 'production';
    }

    this.isDevelopment = mode === 'development';
    this.isTest = mode === 'test';

    // Set log level based on environment
    if (this.isTest) {
      this.logLevel = LOG_LEVELS.NONE; // Suppress all logs in tests
    } else if (this.isDevelopment) {
      this.logLevel = LOG_LEVELS.DEBUG; // Show all logs in development
    } else {
      this.logLevel = LOG_LEVELS.ERROR; // Only errors in production
    }
  }

  /**
   * Format log message with timestamp and context
   */
  formatMessage(level, message, context = {}) {
    const timestamp = new Date().toISOString();
    const contextStr = Object.keys(context).length > 0
      ? `\n  Context: ${JSON.stringify(context, null, 2)}`
      : '';

    return `[${timestamp}] [${level}] ${message}${contextStr}`;
  }

  /**
   * Check if log level should be output
   */
  shouldLog(level) {
    return LOG_LEVELS[level] >= this.logLevel;
  }

  /**
   * Debug level logs (verbose information for debugging)
   */
  debug(message, context = {}) {
    if (this.shouldLog('DEBUG')) {
      console.log(this.formatMessage('DEBUG', message, context));
    }
  }

  /**
   * Info level logs (general information)
   */
  info(message, context = {}) {
    if (this.shouldLog('INFO')) {
      console.info(this.formatMessage('INFO', message, context));
    }
  }

  /**
   * Warning level logs (potential issues)
   */
  warn(message, context = {}) {
    if (this.shouldLog('WARN')) {
      console.warn(this.formatMessage('WARN', message, context));
    }
  }

  /**
   * Error level logs (critical issues)
   * Always logged, even in production
   * Can be extended to send to error tracking services
   */
  error(message, error = null, context = {}) {
    if (this.shouldLog('ERROR')) {
      const errorContext = {
        ...context,
        ...(error && {
          errorMessage: error.message,
          errorStack: error.stack,
          errorName: error.name
        })
      };

      console.error(this.formatMessage('ERROR', message, errorContext));

      // TODO: Send to error tracking service (Sentry, LogRocket, etc.)
      // this.sendToErrorTracking(message, error, errorContext);
    }
  }

  /**
   * Group logs together (useful for related operations)
   */
  group(label, callback) {
    if (this.isDevelopment) {
      console.group(label);
      callback();
      console.groupEnd();
    } else {
      callback();
    }
  }

  /**
   * Log API calls with request/response details
   */
  api(method, url, status, data = null) {
    const message = `${method.toUpperCase()} ${url} - Status: ${status}`;
    const context = data ? { data } : {};

    if (status >= 400) {
      this.error(message, null, context);
    } else {
      this.info(message, context);
    }
  }

  /**
   * Log component lifecycle events
   */
  component(componentName, action, data = {}) {
    this.debug(`Component: ${componentName} - ${action}`, data);
  }

  /**
   * Log performance metrics
   */
  performance(label, duration) {
    this.info(`Performance: ${label} took ${duration}ms`);
  }

  /**
   * Future: Send errors to external tracking service
   */
  sendToErrorTracking(message, error, context) {
    // Integration with Sentry, LogRocket, or similar
    // Example:
    // if (window.Sentry) {
    //   window.Sentry.captureException(error, {
    //     extra: { message, ...context }
    //   });
    // }
  }
}

// Export singleton instance
const logger = new Logger();

export default logger;

// Named exports for convenience
export const { debug, info, warn, error, group, api, component, performance } = logger;
