import React, {Component} from 'react'
import List from './List'
import Filters from './Filters'

let counter = 0

class App extends Component {

  addItem (itemText) {
    const trimmed = itemText.trim()
    if (trimmed.length === 0) return
    const newItem = {
      id: counter++,
      text: trimmed,
      isCompleted: false,
    }
    this.setState({
      items: [...this.state.items, newItem],
    })
  }

  toggle (id) {
    const index = this.state.items.findIndex(item => item.id === id)
    if (index === -1) {
      throw new Error(`Item with ID ${id} not found.`)
    }
    const oldItem = this.state.items[index]
    const newItem = {...oldItem, isCompleted: !oldItem.isCompleted}
    const before = this.state.items.slice(0, index)
    const after = this.state.items.slice(index + 1)
    this.setState({
      items: [...before, newItem, ...after],
    })
  }

  edit ({id, text}) {
    const index = this.state.items.findIndex(item => item.id === id)
    if (index === -1) {
      throw new Error(`Item with ID ${id} not found.`)
    }
    const oldItem = this.state.items[index]
    const newItem = {...oldItem, text}
    const before = this.state.items.slice(0, index)
    const after = this.state.items.slice(index + 1)
    this.setState({
      items: [...before, newItem, ...after],
    })
  }

  changeFilter (selectedFilter) {
    this.setState({selectedFilter})
  }

  constructor (props) {
    super(props)
    this.state = {
      items: [],
      selectedFilter: 'all', // all, complete, completed
    }
    this.addItem = this.addItem.bind(this)
    this.toggle = this.toggle.bind(this)
    this.edit = this.edit.bind(this)
    this.changeFilter = this.changeFilter.bind(this)
  }

  render () {
    const visibleItems = this.state.selectedFilter === 'all'
      ? this.state.items
      : this.state.selectedFilter === 'complete'
        ? this.state.items.filter(item => item.isCompleted)
        : this.state.items.filter(item => !item.isCompleted)

    return (
      <React.Fragment>
        <List
          items={visibleItems}
          totalItemsCount={this.state.items.length}
          add={this.addItem}
          toggle={this.toggle}
          edit={this.edit}
        />
        <Filters
          filter={this.state.selectedFilter}
          filterChange={this.changeFilter}
        />
      </React.Fragment>
    )
  }

}

export default App
