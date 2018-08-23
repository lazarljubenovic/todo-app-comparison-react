import React from 'react'

export default function ({filter, filterChange}) {

  const isSelectedAll = filter === 'all' ? 'selected' : ''
  const isSelectedComplete = filter === 'complete' ? 'selected' : ''
  const isSelectedIncomplete = filter === 'incomplete' ? 'selected' : ''

  return (
    <div className="Filters">
      <button type="button" className={isSelectedAll} onClick={() => filterChange('all')}>
        All
      </button>
      <button type="button" className={isSelectedComplete} onClick={() => filterChange('complete')}>
        Complete
      </button>
      <button type="button" className={isSelectedIncomplete} onClick={() => filterChange('incomplete')}>
        Incomplete
      </button>
    </div>
  )
}