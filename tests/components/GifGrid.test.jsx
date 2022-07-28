import { render, screen } from '@testing-library/react'
import { GifGrid } from '../../src/components/GifGrid'
import { useFetchGifs } from '../../src/hooks/useFetchGifs'

jest.mock('../../src/hooks/useFetchGifs')

describe('Testing the GifGrid component', () => {
  const category = 'Goku'

  test('should show the loading at the begining', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      loading: true,
    })

    render(<GifGrid category={category} />)

    expect(screen.getByText('Loading...'))
    expect(screen.getByText(category))
  })

  test('should show items when the useFetchGifs loads the images', () => {
    const gifs = [
      {
        id: 'ABC',
        title: 'Goku',
        url: 'https://media1.giphy.com/media/3o7btLqYqjQQQqQqZSg/200w.gif',
      },
      {
        id: 'ABC123',
        title: 'Goku',
        url: 'https://media1.giphy.com/media/asdf234erhgdfsgouh/200w.gif',
      },
    ]

    useFetchGifs.mockReturnValue({
      images: gifs,
      loading: false,
    })

    render(<GifGrid category={category} />)

    expect(screen.getAllByRole('img').length).toBe(gifs.length)
  })
})
