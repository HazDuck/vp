import React, { useEffect, useState } from 'react'
import { useProductListing } from '../hooks/useProductListing'

const Filters = () => {
  const { state, actions: { updateSchema } } = useProductListing()
  const [isChecked, setIsChecked] = useState(false);

  {/* here would loop over and handle each filter as a seperate component, looping over each option to populate each checkbox but due to time I'm just doing stock */}

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  }

  useEffect(() => {
    if (isChecked) {
      updateSchema({facets: {
        stockStatus: [{
          identifier: oosObj.options[0].identifier,
          value: oosObj.options[0].value
        }]
      }})
    } else {
      //would need to remove individual scheama rather than clearing all
      updateSchema({facets: {}})
    }
  }, [isChecked])
  
  const oosObj = state.data.facets.filter(({identifier}: any) => identifier === 'stockStatus')[0]

  return (
    !state.loading ? (
    <div className='filters'>
      <h2>Filters</h2>

      <label>{oosObj.displayName}</label>
      <div className="flex">
        <input 
          type="checkbox" 
          id="oos" 
          name="oos" 
          value={oosObj.options[0].value}
          checked={isChecked}
          onChange={handleOnChange}
          />
          <p>{oosObj.options[0].displayValue}</p>
      </div>
        <p>({oosObj.options[0].productCount})</p>
    </div>) : null)
}

export default Filters