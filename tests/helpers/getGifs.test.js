import { getGifs } from '../../src/helpers/getFifs'

describe('Testing the getGifs', () => {
  test('should return an array of gifs', async() => {
    const gifs = await getGifs('cats')

    expect(gifs.length).toBeGreaterThan(0)
    expect(gifs[0]).toHaveProperty('id')
    expect(gifs[0]).toHaveProperty('title')
    expect(gifs[0]).toHaveProperty('url')

    // * Another way to test the properties
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    })
  })
})
