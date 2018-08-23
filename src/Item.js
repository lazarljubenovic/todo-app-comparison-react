import React from 'react'

class Edit extends React.Component {

  onChange (event) {
    const $input = event.target
    const {value} = $input
    this.setState({value})
  }

  onKeyDown (event) {
    if (event.key === 'Enter') {
      event.preventDefault()
      this.props.submit(this.state.value)
    } else if (event.key === 'Escape') {
      event.preventDefault()
      this.props.submit(null)
    }
  }

  constructor (props) {
    // {item, submit}
    super(props)
    this.state = {value: ''}
    this.onChange = this.onChange.bind(this)
    this.onKeyDown = this.onKeyDown.bind(this)
  }

  render () {
    return (
      <div className="Edit">
        <input
          type="text"
          aria-label="Change text"
          value={this.value}
          onInput={this.onChange}
          onKeyDown={this.onKeyDown}
        />
      </div>
    )
  }

}

export default class extends React.Component {

  onEditClick () {
    this.setState({isEditMode: true})
  }

  onEditSubmit (text) {
    this.setState({isEditMode: false})
    if (text !== null) {
      this.props.edit({id: this.props.item.id, text})
    }
  }

  constructor (props) {
    // {item, toggle, edit}
    super(props)
    this.state = {isEditMode: false}
    this.onEditClick = this.onEditClick.bind(this)
    this.onEditSubmit = this.onEditSubmit.bind(this)
  }

  render () {

    const toggleText = this.props.item.isCompleted ? `Undo` : `Done`
    const className = this.props.item.isCompleted ? 'complete' : ''

    return (
      <div className="Item">
        {
          this.state.isEditMode
            ?
            <Edit item={this.props.item} submit={this.onEditSubmit}/>
            :
            <div className={className}>
              <span>{this.props.item.text}</span>
              <button onClick={this.props.toggle}>{toggleText}</button>
              {
                !this.props.item.isCompleted
                  ? <button onClick={this.onEditClick}>Edit</button>
                  : null
              }
            </div>

        }
      </div>
    )

  }

}
