import React from 'react'

export function Select({options, defaultValue,value,onChangeSelect}) {
  return (
    <select onChange={(event)=> onChangeSelect(event.target.value)}>
      <option disabled value={value}>{defaultValue}</option>
      {options.map((option)=>
      <option key={option.value} value={option.value}>{option.name}</option>
      )}
    </select>
  )
}
