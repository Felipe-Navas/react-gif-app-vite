import { fireEvent, render, screen } from '@testing-library/react'
import { AddCategory } from '../../src/components/AddCategory'

describe('Testing the AddCategory component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('should change the value of the input', () => {
    render(<AddCategory onNewCategory={() => {}} />)

    const input = screen.getByRole('textbox')
    fireEvent.input(input, { target: { value: 'test' } })
    expect(input.value).toBe('test')
  })

  test('should call onNewCategory', () => {
    const inputValue = 'test'
    const onNewCategory = jest.fn()

    render(<AddCategory onNewCategory={onNewCategory} />)

    const input = screen.getByRole('textbox')

    // * Add the aria-label to the form in the component
    const form = screen.getByRole('form')
    fireEvent.input(input, { target: { value: inputValue } })
    fireEvent.submit(form)

    expect(input.value).toBe('')
    expect(onNewCategory).toHaveBeenCalledTimes(1)
    expect(onNewCategory).toHaveBeenCalledWith(inputValue)
  })

  test('should not call onNewCategory', () => {
    const onNewCategory = jest.fn()

    render(<AddCategory onNewCategory={onNewCategory} />)

    const form = screen.getByRole('form')
    fireEvent.submit(form)

    expect(onNewCategory).toHaveBeenCalledTimes(0)
    expect(onNewCategory).not.toHaveBeenCalled()
  })
})
