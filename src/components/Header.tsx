import React from 'react'

interface Props {
  total: number
}

const Header: React.FunctionComponent<Props> = ({ total }) => {
  return (
    <div className='header'>
      <select>
        <option value="">Recommended</option>
      </select>
      <p>{`${total} results`}</p>
    </div>
  )
}

export default Header