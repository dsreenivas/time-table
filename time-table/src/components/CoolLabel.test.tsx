import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import CoolLabel from './CoolLabel';

describe('CoolLabel', () => {
  it('renders the provided text', () => {
    render(<CoolLabel text="Scheduled" />);

    expect(screen.getByText('Scheduled')).toBeInTheDocument();
  });

  it('applies the requested tone styling', () => {
    render(<CoolLabel text="Focus" tone="accent" />);

    const label = screen.getByText('Focus');
    expect(label).toHaveClass('cool-label', 'cool-label--accent');
  });
});
