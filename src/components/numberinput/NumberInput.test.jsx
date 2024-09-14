import { render, screen } from '@testing-library/react';
import NumberInput from './NumberInput';

describe('Number Input', () => {
    it('should render with default value', () => {
        render(<NumberInput />);
        const input = parseInt(screen.getByTestId('number-value').textContent);

        expect(input).toBe(0);
    });
    it('should render a button to increment value', () => {
        render(<NumberInput />);
        const incButton = screen.getByRole('button', {name: '+'});
        expect(incButton).toBeInTheDocument();
    });
    it('should render a button to decrement value', () => {
        render(<NumberInput />);
        const decButton = screen.getByRole('button', {name: '-'});
        expect(decButton).toBeInTheDocument();
    });
})