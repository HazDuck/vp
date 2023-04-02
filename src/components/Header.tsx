import React from 'react'
import { useProductListing } from '../hooks/useProductListing'

interface Props {
  total: number
}

const Header: React.FunctionComponent<Props> = ({ total }) => {
  const { actions: { updateSchema } } = useProductListing()

  const handleChange = (val: number) => {
    updateSchema({sort:val})
  }
  return (
    <div className='header'>
      <label>
        Sort By:
        <select 
          className='header__sort-select'
          onChange={(e) => handleChange(parseInt(e.target.value))}
        >
          <option value="1">Recommended</option>
          <option value="2">Lowest Price</option>
          <option value="3">Highest Price</option>
        </select>
      </label>
      <p>{`${total} results`}</p>
    </div>
  )
}

export default Header