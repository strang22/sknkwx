import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import Header from '../Header';

describe('Header', () => {
  it('renders the logo and navigation links', () => {
    render(<Header />);

    // Check if logo is present
    expect(screen.getByText('SKNKWX')).toBeInTheDocument();

    // Check if navigation links are present
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Become a Test Pilot')).toBeInTheDocument();

    // Check if links have correct hrefs
    const projectsLink = screen.getByText('Projects').closest('a');
    const registerLink = screen.getByText('Become a Test Pilot').closest('a');

    expect(projectsLink).toHaveAttribute('href', '/projects');
    expect(registerLink).toHaveAttribute('href', '/register');
  });
});
