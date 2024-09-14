import { render, screen } from '@testing-library/react';
import Title from './Title';

describe('Title Component', () => {
    it('should render the title component', () => {
        let text = 'Counter';
        render(<Title value={text} />);
        const title = screen.getByText(text);
        
        expect(title).toBeInTheDocument();
    });

    it('should not render the title component if text props is missing', () => {
        let text = "text1";
        render(<Title />);
        const title = screen.queryByText(text);

        expect(title).not.toBeInTheDocument();
    })
});