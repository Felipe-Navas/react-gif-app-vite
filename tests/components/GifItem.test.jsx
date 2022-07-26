import { render } from '@testing-library/react'
import { GifItem } from '../../src/components/GifItem'

describe('Testing GifItem', () => {
  const title = 'Test title'
  const url = 'https://media1.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif'

  test('should match with snapshot', () => {
    const { container } = render(<GifItem title={title} url={url} />)

    expect(container).toMatchSnapshot()
  })
})
