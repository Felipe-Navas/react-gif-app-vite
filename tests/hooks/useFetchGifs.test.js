import { renderHook, waitFor } from '@testing-library/react'
import { useFetchGifs } from '../../src/hooks/useFetchGifs'

describe('Testing the useFetchGifs hook', () => {
  test('should return the initial state', () => {
    const { result } = renderHook(() => useFetchGifs('Goku'))

    const { images, loading } = result.current

    expect(images.length).toBe(0)
    expect(loading).toBe(true)
  })

  test('should return an images array and the loading in true', async () => {
    const { result } = renderHook(() => useFetchGifs('Goku'))

    await waitFor(() => expect(result.current.images.length).toBeGreaterThan(0),
      { timeout: 3000 })

    const { images, loading } = result.current

    expect(images.length).toBeGreaterThan(0)
    expect(loading).toBeFalsy()
  })
})
