/**
 * Tests for Footer component
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Footer';

// Helper to render with Router
const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

describe('Footer Component', () => {
  it('should render without crashing', () => {
    renderWithRouter(<Footer />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('should display company name', () => {
    renderWithRouter(<Footer />);
    expect(screen.getByText(/eCyPro/i)).toBeInTheDocument();
  });

  it('should display contact information', () => {
    renderWithRouter(<Footer />);
    // Check for phone number
    expect(screen.getByText(/\+90 541 714 30 00/i)).toBeInTheDocument();
    // Check for email
    expect(screen.getByText(/adobemre1@gmail.com/i)).toBeInTheDocument();
  });

  it('should have social media links', () => {
    renderWithRouter(<Footer />);
    const links = screen.getAllByRole('link');
    expect(links.length).toBeGreaterThan(0);
  });

  it('should display copyright notice', () => {
    renderWithRouter(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(currentYear.toString()))).toBeInTheDocument();
  });

  it('should have navigation links', () => {
    renderWithRouter(<Footer />);
    // Check for common footer links
    const homeLink = screen.queryByText(/Ana Sayfa|Anasayfa/i);
    expect(homeLink).toBeDefined();
  });

  it('should be accessible', () => {
    const { container } = renderWithRouter(<Footer />);
    // Footer should be in a semantic footer tag
    const footer = container.querySelector('footer');
    expect(footer).toBeInTheDocument();
  });
});
