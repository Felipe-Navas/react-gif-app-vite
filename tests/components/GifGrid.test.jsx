import { render, screen } from '@testing-library/react'
import { GifGrid } from '../../src/components/GifGrid'

describe('Testing the GifGrid component', () => {
  const category = 'Goku'

  test('should show the loading at the begining', () => {
    render(<GifGrid category={category} />)

    expect(screen.getByText('Loading...'))
    expect(screen.getByText(category))
  })
})
