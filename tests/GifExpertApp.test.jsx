import { render, screen } from '@testing-library/react'
import { GifExpertApp } from '../src/GifExpertApp'

describe('Testing the GifExpertApp component', () => {
  test('should show the loading', () => {
    render(<GifExpertApp />)
    // screen.debug()

    const heading = screen.getAllByRole('heading')
    expect(heading).toHaveLength(5)
  })
})
