/**
 * Comprehensive tests for Chatbot component
 *
 * Tests cover:
 * - Opening/closing chatbot
 * - Message rendering
 * - User interactions
 * - AI response handling
 * - Error scenarios
 * - Quick replies
 * - Accessibility
 */

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Chatbot from './Chatbot';
import * as gemini from '../utils/gemini';

// Mock gemini module
vi.mock('../utils/gemini', () => ({
  generateChatResponse: vi.fn()
}));

describe('Chatbot Component', () => {
  let user;

  beforeEach(() => {
    user = userEvent.setup();
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('Chatbot Toggle', () => {
    it('should render chatbot button', () => {
      render(<Chatbot />);
      expect(screen.getByRole('button', { name: /chat|mesaj|konuş/i })).toBeInTheDocument();
    });

    it('should open chatbot when button is clicked', async () => {
      render(<Chatbot />);

      const openButton = screen.getByRole('button', { name: /chat|mesaj|konuş/i });
      await user.click(openButton);

      // Chatbot window should be visible
      await waitFor(() => {
        expect(screen.getByText(/EcyPro AI/i)).toBeInTheDocument();
      });
    });

    it('should close chatbot when close button is clicked', async () => {
      render(<Chatbot />);

      // Open chatbot
      const openButton = screen.getByRole('button', { name: /chat|mesaj|konuş/i });
      await user.click(openButton);

      await waitFor(() => {
        expect(screen.getByText(/EcyPro AI/i)).toBeInTheDocument();
      });

      // Close chatbot
      const closeButton = screen.getByRole('button', { name: /kapat|close/i });
      await user.click(closeButton);

      // Chatbot should be closed
      await waitFor(() => {
        expect(screen.queryByText(/EcyPro AI/i)).not.toBeInTheDocument();
      });
    });

    it('should start closed by default', () => {
      render(<Chatbot />);
      // Welcome message should not be visible initially
      expect(screen.queryByText(/Merhaba.*EcyPro/i)).not.toBeInTheDocument();
    });
  });

  describe('Message Display', () => {
    it('should display welcome message when opened', async () => {
      render(<Chatbot />);

      const openButton = screen.getByRole('button', { name: /chat|mesaj|konuş/i });
      await user.click(openButton);

      await waitFor(() => {
        expect(screen.getByText(/Merhaba.*EcyPro/i)).toBeInTheDocument();
      });
    });

    it('should display user messages', async () => {
      gemini.generateChatResponse.mockResolvedValue('Bot response');

      render(<Chatbot />);

      // Open chatbot
      await user.click(screen.getByRole('button', { name: /chat|mesaj|konuş/i }));

      await waitFor(() => {
        expect(screen.getByText(/Merhaba/i)).toBeInTheDocument();
      });

      // Type and send message
      const input = screen.getByPlaceholderText(/mesaj|yazın/i);
      await user.type(input, 'Test message');

      const sendButton = screen.getByRole('button', { name: /gönder|send/i });
      await user.click(sendButton);

      // User message should appear
      await waitFor(() => {
        expect(screen.getByText('Test message')).toBeInTheDocument();
      });
    });

    it('should display bot responses', async () => {
      gemini.generateChatResponse.mockResolvedValue('This is a bot response');

      render(<Chatbot />);

      await user.click(screen.getByRole('button', { name: /chat|mesaj|konuş/i }));

      await waitFor(() => {
        expect(screen.getByText(/Merhaba/i)).toBeInTheDocument();
      });

      const input = screen.getByPlaceholderText(/mesaj|yazın/i);
      await user.type(input, 'Hello');

      const sendButton = screen.getByRole('button', { name: /gönder|send/i });
      await user.click(sendButton);

      // Bot response should appear
      await waitFor(() => {
        expect(screen.getByText('This is a bot response')).toBeInTheDocument();
      }, { timeout: 3000 });
    });

    it('should show multiple messages in conversation order', async () => {
      gemini.generateChatResponse
        .mockResolvedValueOnce('First response')
        .mockResolvedValueOnce('Second response');

      render(<Chatbot />);

      await user.click(screen.getByRole('button', { name: /chat|mesaj|konuş/i }));

      await waitFor(() => {
        expect(screen.getByText(/Merhaba/i)).toBeInTheDocument();
      });

      const input = screen.getByPlaceholderText(/mesaj|yazın/i);

      // First message
      await user.type(input, 'First message');
      await user.click(screen.getByRole('button', { name: /gönder|send/i }));

      await waitFor(() => {
        expect(screen.getByText('First response')).toBeInTheDocument();
      }, { timeout: 3000 });

      // Second message
      await user.type(input, 'Second message');
      await user.click(screen.getByRole('button', { name: /gönder|send/i }));

      await waitFor(() => {
        expect(screen.getByText('Second response')).toBeInTheDocument();
      }, { timeout: 3000 });

      // All messages should be visible
      expect(screen.getByText('First message')).toBeInTheDocument();
      expect(screen.getByText('First response')).toBeInTheDocument();
      expect(screen.getByText('Second message')).toBeInTheDocument();
      expect(screen.getByText('Second response')).toBeInTheDocument();
    });
  });

  describe('User Input', () => {
    it('should clear input after sending message', async () => {
      gemini.generateChatResponse.mockResolvedValue('Response');

      render(<Chatbot />);

      await user.click(screen.getByRole('button', { name: /chat|mesaj|konuş/i }));

      await waitFor(() => {
        expect(screen.getByText(/Merhaba/i)).toBeInTheDocument();
      });

      const input = screen.getByPlaceholderText(/mesaj|yazın/i);
      await user.type(input, 'Test message');

      expect(input).toHaveValue('Test message');

      await user.click(screen.getByRole('button', { name: /gönder|send/i }));

      // Input should be cleared
      await waitFor(() => {
        expect(input).toHaveValue('');
      });
    });

    it('should not send empty messages', async () => {
      render(<Chatbot />);

      await user.click(screen.getByRole('button', { name: /chat|mesaj|konuş/i }));

      await waitFor(() => {
        expect(screen.getByText(/Merhaba/i)).toBeInTheDocument();
      });

      const sendButton = screen.getByRole('button', { name: /gönder|send/i });
      await user.click(sendButton);

      // Should not call AI
      expect(gemini.generateChatResponse).not.toHaveBeenCalled();
    });

    it('should send message on Enter key', async () => {
      gemini.generateChatResponse.mockResolvedValue('Response');

      render(<Chatbot />);

      await user.click(screen.getByRole('button', { name: /chat|mesaj|konuş/i }));

      await waitFor(() => {
        expect(screen.getByText(/Merhaba/i)).toBeInTheDocument();
      });

      const input = screen.getByPlaceholderText(/mesaj|yazın/i);
      await user.type(input, 'Test message{Enter}');

      // Message should be sent
      await waitFor(() => {
        expect(gemini.generateChatResponse).toHaveBeenCalled();
      });
    });

    it('should not send message on Shift+Enter', async () => {
      render(<Chatbot />);

      await user.click(screen.getByRole('button', { name: /chat|mesaj|konuş/i }));

      await waitFor(() => {
        expect(screen.getByText(/Merhaba/i)).toBeInTheDocument();
      });

      const input = screen.getByPlaceholderText(/mesaj|yazın/i);
      await user.type(input, 'Test');
      await user.keyboard('{Shift>}{Enter}{/Shift}');

      // Should not send (allows multiline input)
      expect(gemini.generateChatResponse).not.toHaveBeenCalled();
    });
  });

  describe('AI Integration', () => {
    it('should pass conversation context to AI', async () => {
      gemini.generateChatResponse.mockResolvedValue('Response');

      render(<Chatbot />);

      await user.click(screen.getByRole('button', { name: /chat|mesaj|konuş/i }));

      await waitFor(() => {
        expect(screen.getByText(/Merhaba/i)).toBeInTheDocument();
      });

      const input = screen.getByPlaceholderText(/mesaj|yazın/i);
      await user.type(input, 'Test message');
      await user.click(screen.getByRole('button', { name: /gönder|send/i }));

      await waitFor(() => {
        expect(gemini.generateChatResponse).toHaveBeenCalledWith(
          'Test message',
          expect.any(Array)
        );
      });
    });

    it('should show typing indicator while waiting for response', async () => {
      // Delay the response
      gemini.generateChatResponse.mockImplementation(() =>
        new Promise(resolve => setTimeout(() => resolve('Response'), 100))
      );

      render(<Chatbot />);

      await user.click(screen.getByRole('button', { name: /chat|mesaj|konuş/i }));

      await waitFor(() => {
        expect(screen.getByText(/Merhaba/i)).toBeInTheDocument();
      });

      const input = screen.getByPlaceholderText(/mesaj|yazın/i);
      await user.type(input, 'Test');
      await user.click(screen.getByRole('button', { name: /gönder|send/i }));

      // Should show typing indicator
      await waitFor(() => {
        expect(screen.getByText(/yazıyor|typing/i)).toBeInTheDocument();
      }, { timeout: 500 });
    });
  });

  describe('Error Handling', () => {
    it('should display error message when AI fails', async () => {
      gemini.generateChatResponse.mockRejectedValue(new Error('API Error'));

      render(<Chatbot />);

      await user.click(screen.getByRole('button', { name: /chat|mesaj|konuş/i }));

      await waitFor(() => {
        expect(screen.getByText(/Merhaba/i)).toBeInTheDocument();
      });

      const input = screen.getByPlaceholderText(/mesaj|yazın/i);
      await user.type(input, 'Test');
      await user.click(screen.getByRole('button', { name: /gönder|send/i }));

      // Should show error message
      await waitFor(() => {
        expect(screen.getByText(/sorun|hata|teknik/i)).toBeInTheDocument();
      }, { timeout: 3000 });
    });

    it('should include contact information in error message', async () => {
      gemini.generateChatResponse.mockRejectedValue(new Error('API Error'));

      render(<Chatbot />);

      await user.click(screen.getByRole('button', { name: /chat|mesaj|konuş/i }));

      await waitFor(() => {
        expect(screen.getByText(/Merhaba/i)).toBeInTheDocument();
      });

      const input = screen.getByPlaceholderText(/mesaj|yazın/i);
      await user.type(input, 'Test');
      await user.click(screen.getByRole('button', { name: /gönder|send/i }));

      // Should show contact number
      await waitFor(() => {
        expect(screen.getByText(/\+90 541 714 30 00/i)).toBeInTheDocument();
      }, { timeout: 3000 });
    });

    it('should continue working after error', async () => {
      gemini.generateChatResponse
        .mockRejectedValueOnce(new Error('First error'))
        .mockResolvedValueOnce('Successful response');

      render(<Chatbot />);

      await user.click(screen.getByRole('button', { name: /chat|mesaj|konuş/i }));

      await waitFor(() => {
        expect(screen.getByText(/Merhaba/i)).toBeInTheDocument();
      });

      const input = screen.getByPlaceholderText(/mesaj|yazın/i);

      // First message (error)
      await user.type(input, 'First message');
      await user.click(screen.getByRole('button', { name: /gönder|send/i }));

      await waitFor(() => {
        expect(screen.getByText(/sorun|hata/i)).toBeInTheDocument();
      }, { timeout: 3000 });

      // Second message (success)
      await user.type(input, 'Second message');
      await user.click(screen.getByRole('button', { name: /gönder|send/i }));

      await waitFor(() => {
        expect(screen.getByText('Successful response')).toBeInTheDocument();
      }, { timeout: 3000 });
    });
  });

  describe('Accessibility', () => {
    it('should have accessible button', () => {
      render(<Chatbot />);
      const button = screen.getByRole('button', { name: /chat|mesaj|konuş/i });
      expect(button).toHaveAttribute('aria-label');
    });

    it('should focus input when chatbot opens', async () => {
      render(<Chatbot />);

      await user.click(screen.getByRole('button', { name: /chat|mesaj|konuş/i }));

      await waitFor(() => {
        const input = screen.getByPlaceholderText(/mesaj|yazın/i);
        expect(input).toHaveFocus();
      });
    });

    it('should have proper message roles', async () => {
      gemini.generateChatResponse.mockResolvedValue('Bot response');

      render(<Chatbot />);

      await user.click(screen.getByRole('button', { name: /chat|mesaj|konuş/i }));

      await waitFor(() => {
        expect(screen.getByText(/Merhaba/i)).toBeInTheDocument();
      });

      const input = screen.getByPlaceholderText(/mesaj|yazın/i);
      await user.type(input, 'Test');
      await user.click(screen.getByRole('button', { name: /gönder|send/i }));

      // Both user and bot messages should be in the document
      await waitFor(() => {
        expect(screen.getByText('Test')).toBeInTheDocument();
        expect(screen.getByText('Bot response')).toBeInTheDocument();
      }, { timeout: 3000 });
    });
  });

  describe('Performance', () => {
    it('should limit conversation context to last 5 messages', async () => {
      gemini.generateChatResponse.mockResolvedValue('Response');

      render(<Chatbot />);

      await user.click(screen.getByRole('button', { name: /chat|mesaj|konuş/i }));

      await waitFor(() => {
        expect(screen.getByText(/Merhaba/i)).toBeInTheDocument();
      });

      const input = screen.getByPlaceholderText(/mesaj|yazın/i);

      // Send 6 messages
      for (let i = 1; i <= 6; i++) {
        await user.clear(input);
        await user.type(input, `Message ${i}`);
        await user.click(screen.getByRole('button', { name: /gönder|send/i }));
        await waitFor(() => {
          expect(gemini.generateChatResponse).toHaveBeenCalled();
        });
        vi.clearAllMocks();
      }

      // Last call should have context limited to 5 messages
      const lastCall = gemini.generateChatResponse.mock.calls[gemini.generateChatResponse.mock.calls.length - 1];
      expect(lastCall[1].length).toBeLessThanOrEqual(5);
    });
  });
});
