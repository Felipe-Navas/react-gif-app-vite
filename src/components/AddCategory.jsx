import { useState } from 'react'
import PropTypes from 'prop-types'

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
    setInputValue('')
    onNewCategory(newCategory)
  }

  return (
    <form onSubmit={onSubmit} aria-label="form">
      <input
        type="text"
        placeholder="Find gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  )
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
}
