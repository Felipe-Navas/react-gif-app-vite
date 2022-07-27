import { render, screen } from '@testing-library/react'
import { GifItem } from '../../src/components/GifItem'

describe('Testing GifItem', () => {
  const title = 'Test title'
  const url = 'https://media1.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif'

  test('should match with snapshot', () => {
    const { container } = render(<GifItem title={title} url={url} />)

    expect(container).toMatchSnapshot()
  })

  test('should show the image with the URL and the ALT', () => {
    render(<GifItem title={title} url={url} />)

    // expect(screen.getByRole('img').src).toBe(url)
    // expect(screen.getByRole('img').alt).toBe(title)

    const { src, alt } = screen.getByRole('img')
    expect(src).toBe(url)
    expect(alt).toBe(title)
  })

  test('should show the title in the paragraph', () => {
    render(<GifItem title={title} url={url} />)

    expect(screen.getByText(title)).toBeTruthy()
  })
})
