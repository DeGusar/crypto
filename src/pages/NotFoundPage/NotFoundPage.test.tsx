import React from 'react';
import { Mock, describe, it, vi } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import routePaths from '@/utils/constants/routePaths';
import NotFoundPage from '.';

vi.mock('react-router-dom', () => ({
  useNavigate: vi.fn(),
}));

describe('NotFoundPage component', () => {
  let navigate: Mock<
    ReturnType<typeof useNavigate>[],
    Parameters<typeof useNavigate>
  >;

  beforeEach(() => {
    navigate = vi.fn();
    (useNavigate as jest.Mock).mockReturnValue(navigate);
    render(<NotFoundPage />);
  });

  it('renders the error message correctly', () => {
    const errorMessage = screen.getByText(/Error 404/i);
    expect(errorMessage).toBeInTheDocument();
  });

  it('renders the button correctly', () => {
    const button = screen.getByText(/Go to Main Page/i);
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(navigate).toHaveBeenCalledWith(routePaths.MAIN_PAGE);
  });
});
