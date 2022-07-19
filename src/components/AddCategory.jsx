import { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('')

  const onInputChange = ({ target }) => {
    setInputValue(target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const newCategory = inputValue.trim()
    if (newCategory.length <= 2) return

    // setCategories((categories) => [inputValue, ...categories])
    onNewCategory(newCategory)
    setInputValue('')
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Find gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  )
}
