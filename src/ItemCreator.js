import React from 'react'

export default function ({add}) {

  const onSubmit = (event) => {
    event.preventDefault()
    const $form = event.target
    const $input = $form.elements.namedItem('text')
    const {value} = $input
    const trimmed = value.trim()
    if (trimmed.length === 0) return
    add(trimmed)
    $input.value = ''
  }

  return (
    <div className="ItemCreator">
      <form onSubmit={onSubmit}>
        <label>
          <span>New item</span>
          <input type="text" name="text"/>
        </label>
        <button type="submit">
          Add
        </button>
      </form>
    </div>
  )

}
