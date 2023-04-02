import { useEffect, useState } from "react"
import { IListingData } from "../types";

const useProductData = () => {
  const [productData, setProductData] = useState<IListingData | null>(null)
    useEffect(() => {
      (async () => {
        try {
          const rawResponse = await fetch('https://spanishinquisition.victorianplumbing.co.uk/interviews/listings?apikey=yj2bV48J40KsBpIMLvrZZ1j1KwxN4u3A83H8IBvI', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              "query": "toilets",
              "pageNumber": 0,
              "size": 66,
              "additionalPages": 0,
              "sort": 1
            })
          });
          const data = await rawResponse.json();
          console.log(data, 'yup');
          setProductData(data)
        } catch (error) {
          console.log(error)
        }
      })();
    }, [])
  return productData
}

export default useProductData