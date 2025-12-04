/**
 * Comprehensive tests for ContactSection component
 *
 * Tests cover:
 * - Rendering and UI elements
 * - Form validation
 * - Form submission
 * - AI analysis integration
 * - LocalStorage persistence
 * - Error handling
 * - Accessibility
 */

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactSection from './ContactSection';
import * as gemini from '../utils/gemini';

// Mock gemini module
vi.mock('../utils/gemini', () => ({
  analyzeContactMessage: vi.fn()
}));

describe('ContactSection Component', () => {
  let user;

  beforeEach(() => {
    user = userEvent.setup();
    // Clear localStorage before each test
    localStorage.clear();
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('Rendering', () => {
    it('should render without crashing', () => {
      render(<ContactSection />);
      expect(screen.getByRole('region', { name: /iletişim/i })).toBeInTheDocument();
    });

    it('should display section heading', () => {
      render(<ContactSection />);
      expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
    });

    it('should display contact information', () => {
      render(<ContactSection />);
      expect(screen.getByText(/\+90 541 714 30 00/i)).toBeInTheDocument();
      expect(screen.getByText(/adobemre1@gmail.com/i)).toBeInTheDocument();
    });

    it('should display AI-powered badge', () => {
      render(<ContactSection />);
      expect(screen.getByText(/AI destekli/i)).toBeInTheDocument();
    });

    it('should render all form fields', () => {
      render(<ContactSection />);

      expect(screen.getByLabelText(/ad.*soyad/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/e-posta/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/telefon/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/ihtiyac/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/mesaj/i)).toBeInTheDocument();
    });

    it('should render submit button', () => {
      render(<ContactSection />);
      expect(screen.getByRole('button', { name: /gönder/i })).toBeInTheDocument();
    });
  });

  describe('Form Validation', () => {
    it('should require name field', async () => {
      render(<ContactSection />);

      const submitButton = screen.getByRole('button', { name: /gönder/i });
      await user.click(submitButton);

      // Form should not submit without required fields
      await waitFor(() => {
        const nameInput = screen.getByLabelText(/ad.*soyad/i);
        expect(nameInput).toBeInvalid();
      }, { timeout: 1000 });
    });

    it('should require email field', async () => {
      render(<ContactSection />);

      const submitButton = screen.getByRole('button', { name: /gönder/i });
      await user.click(submitButton);

      await waitFor(() => {
        const emailInput = screen.getByLabelText(/e-posta/i);
        expect(emailInput).toBeInvalid();
      }, { timeout: 1000 });
    });

    it('should validate email format', async () => {
      render(<ContactSection />);

      const emailInput = screen.getByLabelText(/e-posta/i);
      await user.type(emailInput, 'invalid-email');

      const submitButton = screen.getByRole('button', { name: /gönder/i });
      await user.click(submitButton);

      await waitFor(() => {
        expect(emailInput).toBeInvalid();
      }, { timeout: 1000 });
    });

    it('should accept valid email format', async () => {
      render(<ContactSection />);

      const emailInput = screen.getByLabelText(/e-posta/i);
      await user.type(emailInput, 'test@example.com');

      expect(emailInput).toHaveValue('test@example.com');
    });
  });

  describe('Form Submission', () => {
    it('should submit form with valid data', async () => {
      gemini.analyzeContactMessage.mockResolvedValue({
        category: 'Danışmanlık',
        urgency: 'Yüksek',
        potential: 'Yüksek',
        responseTime: '1 saat',
        suggestedResponse: 'Test response',
        tags: ['test'],
        sentiment: 'Pozitif'
      });

      render(<ContactSection />);

      // Fill form
      await user.type(screen.getByLabelText(/ad.*soyad/i), 'Test User');
      await user.type(screen.getByLabelText(/e-posta/i), 'test@example.com');
      await user.type(screen.getByLabelText(/telefon/i), '1234567890');
      await user.type(screen.getByLabelText(/mesaj/i), 'Test message');

      // Submit
      const submitButton = screen.getByRole('button', { name: /gönder/i });
      await user.click(submitButton);

      // Should call AI analysis
      await waitFor(() => {
        expect(gemini.analyzeContactMessage).toHaveBeenCalledWith(
          'Test message',
          expect.objectContaining({
            name: 'Test User',
            email: 'test@example.com',
            phone: '1234567890'
          })
        );
      });
    });

    it('should show success message after submission', async () => {
      gemini.analyzeContactMessage.mockResolvedValue({
        category: 'Genel',
        urgency: 'Orta',
        potential: 'Orta',
        responseTime: '24 saat',
        suggestedResponse: 'Test response',
        tags: [],
        sentiment: 'Nötr'
      });

      render(<ContactSection />);

      // Fill and submit form
      await user.type(screen.getByLabelText(/ad.*soyad/i), 'Test User');
      await user.type(screen.getByLabelText(/e-posta/i), 'test@example.com');
      await user.type(screen.getByLabelText(/mesaj/i), 'Test message');

      await user.click(screen.getByRole('button', { name: /gönder/i }));

      // Should show success state
      await waitFor(() => {
        expect(screen.getByText(/gönderildi|başarılı/i)).toBeInTheDocument();
      }, { timeout: 2000 });
    });

    it('should reset form after submission', async () => {
      gemini.analyzeContactMessage.mockResolvedValue({
        category: 'Genel',
        urgency: 'Orta',
        potential: 'Orta',
        responseTime: '24 saat',
        suggestedResponse: 'Response',
        tags: [],
        sentiment: 'Nötr'
      });

      render(<ContactSection />);

      const nameInput = screen.getByLabelText(/ad.*soyad/i);
      const emailInput = screen.getByLabelText(/e-posta/i);

      await user.type(nameInput, 'Test User');
      await user.type(emailInput, 'test@example.com');

      await user.click(screen.getByRole('button', { name: /gönder/i }));

      // Form should be reset
      await waitFor(() => {
        expect(nameInput).toHaveValue('');
        expect(emailInput).toHaveValue('');
      }, { timeout: 2000 });
    });
  });

  describe('AI Analysis Integration', () => {
    it('should display analysis results', async () => {
      gemini.analyzeContactMessage.mockResolvedValue({
        category: 'MVP',
        urgency: 'Yüksek',
        potential: 'Yüksek',
        responseTime: '1 saat',
        suggestedResponse: 'Hemen dönüş yapılmalı',
        tags: ['mvp', 'acil'],
        sentiment: 'Pozitif'
      });

      render(<ContactSection />);

      await user.type(screen.getByLabelText(/ad.*soyad/i), 'Test User');
      await user.type(screen.getByLabelText(/e-posta/i), 'test@example.com');
      await user.type(screen.getByLabelText(/mesaj/i), 'MVP projesi için danışmanlık');

      await user.click(screen.getByRole('button', { name: /gönder/i }));

      // Should display analysis
      await waitFor(() => {
        expect(screen.getByText(/MVP/i)).toBeInTheDocument();
        expect(screen.getByText(/Yüksek/i)).toBeInTheDocument();
      }, { timeout: 2000 });
    });

    it('should handle AI analysis error gracefully', async () => {
      gemini.analyzeContactMessage.mockRejectedValue(new Error('API Error'));

      render(<ContactSection />);

      await user.type(screen.getByLabelText(/ad.*soyad/i), 'Test User');
      await user.type(screen.getByLabelText(/e-posta/i), 'test@example.com');
      await user.type(screen.getByLabelText(/mesaj/i), 'Test message');

      await user.click(screen.getByRole('button', { name: /gönder/i }));

      // Should show error message
      await waitFor(() => {
        expect(screen.getByText(/hata|kullanılamıyor/i)).toBeInTheDocument();
      }, { timeout: 2000 });
    });

    it('should handle null AI response', async () => {
      gemini.analyzeContactMessage.mockResolvedValue(null);

      render(<ContactSection />);

      await user.type(screen.getByLabelText(/ad.*soyad/i), 'Test User');
      await user.type(screen.getByLabelText(/e-posta/i), 'test@example.com');
      await user.type(screen.getByLabelText(/mesaj/i), 'Test message');

      await user.click(screen.getByRole('button', { name: /gönder/i }));

      // Should show appropriate message
      await waitFor(() => {
        expect(screen.getByText(/kullanılamıyor|talebiniz alındı/i)).toBeInTheDocument();
      }, { timeout: 2000 });
    });
  });

  describe('LocalStorage Persistence', () => {
    it('should save analysis to localStorage', async () => {
      const analysisResult = {
        category: 'Danışmanlık',
        urgency: 'Yüksek',
        potential: 'Yüksek',
        responseTime: '1 saat',
        suggestedResponse: 'Test response',
        tags: ['test'],
        sentiment: 'Pozitif'
      };

      gemini.analyzeContactMessage.mockResolvedValue(analysisResult);

      render(<ContactSection />);

      await user.type(screen.getByLabelText(/ad.*soyad/i), 'Test User');
      await user.type(screen.getByLabelText(/e-posta/i), 'test@example.com');
      await user.type(screen.getByLabelText(/mesaj/i), 'Test message');

      await user.click(screen.getByRole('button', { name: /gönder/i }));

      // Wait for submission and localStorage update
      await waitFor(() => {
        const stored = localStorage.getItem('ai_contact_insights');
        expect(stored).toBeTruthy();

        const parsed = JSON.parse(stored);
        expect(Array.isArray(parsed)).toBe(true);
        expect(parsed[0]).toMatchObject({
          category: 'Danışmanlık',
          urgency: 'Yüksek',
          potential: 'Yüksek'
        });
      }, { timeout: 2000 });
    });

    it('should handle localStorage errors gracefully', async () => {
      // Mock localStorage.setItem to throw error
      const setItemSpy = vi.spyOn(Storage.prototype, 'setItem');
      setItemSpy.mockImplementation(() => {
        throw new Error('Storage full');
      });

      gemini.analyzeContactMessage.mockResolvedValue({
        category: 'Genel',
        urgency: 'Orta',
        potential: 'Orta',
        responseTime: '24 saat',
        suggestedResponse: 'Response',
        tags: [],
        sentiment: 'Nötr'
      });

      render(<ContactSection />);

      await user.type(screen.getByLabelText(/ad.*soyad/i), 'Test User');
      await user.type(screen.getByLabelText(/e-posta/i), 'test@example.com');
      await user.type(screen.getByLabelText(/mesaj/i), 'Test');

      // Should not crash despite localStorage error
      await user.click(screen.getByRole('button', { name: /gönder/i }));

      await waitFor(() => {
        expect(screen.getByText(/gönderildi|başarılı/i)).toBeInTheDocument();
      }, { timeout: 2000 });

      setItemSpy.mockRestore();
    });
  });

  describe('Accessibility', () => {
    it('should have proper ARIA labels', () => {
      render(<ContactSection />);

      expect(screen.getByRole('region')).toHaveAttribute('aria-labelledby');
      expect(screen.getByLabelText(/ad.*soyad/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/e-posta/i)).toBeInTheDocument();
    });

    it('should be keyboard navigable', async () => {
      render(<ContactSection />);

      const nameInput = screen.getByLabelText(/ad.*soyad/i);
      const emailInput = screen.getByLabelText(/e-posta/i);

      // Tab through form
      await user.tab();
      expect(nameInput).toHaveFocus();

      await user.tab();
      expect(emailInput).toHaveFocus();
    });

    it('should have semantic HTML structure', () => {
      const { container } = render(<ContactSection />);

      expect(container.querySelector('section')).toBeInTheDocument();
      expect(container.querySelector('form')).toBeInTheDocument();
    });
  });

  describe('Loading States', () => {
    it('should show loading state during submission', async () => {
      // Delay the mock response
      gemini.analyzeContactMessage.mockImplementation(() =>
        new Promise(resolve => setTimeout(() => resolve({
          category: 'Genel',
          urgency: 'Orta',
          potential: 'Orta',
          responseTime: '24 saat',
          suggestedResponse: 'Response',
          tags: [],
          sentiment: 'Nötr'
        }), 100))
      );

      render(<ContactSection />);

      await user.type(screen.getByLabelText(/ad.*soyad/i), 'Test User');
      await user.type(screen.getByLabelText(/e-posta/i), 'test@example.com');
      await user.type(screen.getByLabelText(/mesaj/i), 'Test');

      await user.click(screen.getByRole('button', { name: /gönder/i }));

      // Should show loading indicator
      expect(screen.getByRole('button', { name: /gönder/i })).toBeDisabled();
    });
  });
});
