import { render, screen, waitFor } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import userEvent from '@testing-library/user-event';
import App, { Navbar, Hero, Features, DeepDive, SignupForm } from './App';

describe('App Components Render properly', () => {
  test('Navbar renders correctly', () => {
    render(<Navbar />);
    expect(screen.getByText('NOTtxJTE')).toBeInTheDocument();
    expect(screen.getByText('Features')).toBeInTheDocument();
  });

  test('Hero renders correctly', () => {
    render(<Hero />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('NOTtxJTE');
    expect(screen.getByText('Get Started')).toBeInTheDocument();
  });

  test('Features renders correctly', () => {
    render(<Features />);
    expect(screen.getByText('Intelligent execution.')).toBeInTheDocument();
    expect(screen.getByText('Lightning fast.')).toBeInTheDocument();
  });

  test('DeepDive renders correctly', () => {
    render(<DeepDive />);
    expect(screen.getByText('Pro-level control.')).toBeInTheDocument();
  });

  test('SignupForm renders correctly', () => {
    render(<SignupForm />);
    expect(screen.getByText('Ready to upgrade?')).toBeInTheDocument();
  });

  test('Full App renders without crashing', () => {
    render(<App />);
    expect(screen.getAllByText('NOTtxJTE').length).toBeGreaterThan(0);
  });
});

describe('SignupForm Business Logic', () => {
  test('Shows validation error for empty email', async () => {
    const user = userEvent.setup();
    render(<SignupForm />);
    
    const submitButton = screen.getByRole('button', { name: /Create Account/i });
    await user.click(submitButton);

    expect(screen.getByText('Please enter a valid work email.')).toBeInTheDocument();
  });

  test('Simulates successful form submission', async () => {
    const user = userEvent.setup();
    render(<SignupForm />);
    
    const emailInput = screen.getByLabelText(/Work Email/i);
    await user.type(emailInput, 'test@company.com');
    
    const submitButton = screen.getByRole('button', { name: /Create Account/i });
    await user.click(submitButton);
    
    // Verify loading state
    expect(submitButton).toHaveTextContent('Creating...');
    expect(submitButton).toBeDisabled();

    // Wait for mock API resolve
    await waitFor(() => {
      expect(screen.getByText('Check your inbox.')).toBeInTheDocument();
    }, { timeout: 2000 });
  });

  test('Start over button resets form state', async () => {
    const user = userEvent.setup();
    render(<SignupForm />);
    
    const emailInput = screen.getByLabelText(/Work Email/i);
    await user.type(emailInput, 'test@company.com');
    
    const submitButton = screen.getByRole('button', { name: /Create Account/i });
    await user.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText('Check your inbox.')).toBeInTheDocument();
    }, { timeout: 2000 });

    const startOverButton = screen.getByRole('button', { name: /Start over/i });
    await user.click(startOverButton);

    expect(screen.getByText('Ready to upgrade?')).toBeInTheDocument();
    expect(screen.getByLabelText(/Work Email/i)).toHaveValue('');
  });
});