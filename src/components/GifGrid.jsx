import { getGifs } from '../helpers/getFifs'

export const GifGrid = ({ category }) => {
  getGifs(category)

  return (
    <>
      <h3>{category}</h3>
    </>
  )
}
