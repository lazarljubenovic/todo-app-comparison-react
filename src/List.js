import React from 'react'
import Item from './Item'
import ItemCreator from './ItemCreator'

export default function ({items, totalItemsCount, add, toggle, edit}) {

  const isEmpty = totalItemsCount === 0

  const isItemsEmpty = items.length === 0

  return (
    <div className="List">

      {
        isEmpty
          ?
          <p className="empty">The list is empty.</p>
          :
          !isItemsEmpty
            ?
            <ol>
              {
                items.map(item => {
                  return (
                    <li key={item.id}>
                      <Item
                        item={item}
                        toggle={() => toggle(item.id)}
                        edit={edit}
                      />
                    </li>
                  )
                })
              }
            </ol>
            :
            <p className="empty">
              No items to show for this filter.<br/>
              There are {totalItemsCount} items in total.
            </p>
      }

      <ItemCreator add={add}/>

    </div>
  )
}
