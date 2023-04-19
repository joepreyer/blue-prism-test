import { render, fireEvent } from '@testing-library/react'
import Button from '../button'

describe('Button', () => {
    it('renders children correctly', () => {
        const buttonText = 'Click me!'
        const { getByText } = render(<Button onClick={() => { }}>{buttonText}</Button>)
        expect(getByText(buttonText)).toBeInTheDocument()
    })

    it('calls onClick handler when clicked', () => {
        const handleClick = jest.fn()
        const { getByText } = render(<Button onClick={handleClick}>Click me!</Button>)
        fireEvent.click(getByText('Click me!'))
        expect(handleClick).toHaveBeenCalledTimes(1)
    })
})