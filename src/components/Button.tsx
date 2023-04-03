import React from 'react'

interface Props {
  children: string, 
  buttonClass: string, 
  handleClick: () => void
}

const Button: React.FunctionComponent<Props> = ({ children, buttonClass, handleClick }) => {
  return (
    <button className={buttonClass} onClick={handleClick}>{children}</button>
  )
}

export default Button