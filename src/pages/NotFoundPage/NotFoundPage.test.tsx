import React from 'react';
import { describe, it, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';
import routePaths from '../../utils/constants/routePaths';

vi.mock('react-router-dom', () => ({
  useNavigate: vi.fn(),
}));

describe('NotFoundPage component', () => {
  const navigate = vi.fn();
  useNavigate.mockReturnValue(navigate);
  const { getByText } = render(<NotFoundPage />);

  it('renders the error message and button correctly', () => {
    const errorMessage = getByText(/Error 404/i);
    expect(errorMessage).toBeInTheDocument();
    const button = getByText(/Go to Main Page/i);
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(navigate).toHaveBeenCalledWith(routePaths.MAIN_PAGE);
  });
});
