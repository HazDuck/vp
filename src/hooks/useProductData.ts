import { useEffect } from "react"
import { IFetchData, 
  // IListingData 
} from "../types";


const useProductData = ( fetchData: IFetchData, actions: any) => {
    useEffect(() => {
      (async () => {
        try {
          const rawResponse = await fetch('https://spanishinquisition.victorianplumbing.co.uk/interviews/listings?apikey=yj2bV48J40KsBpIMLvrZZ1j1KwxN4u3A83H8IBvI', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(fetchData)
          });
          const data = await rawResponse.json();
          console.log(data, 'yup');
          actions.fetchSuccess(data)
        } catch (error) {
          console.log(error)
          // setProductData({})
        }
      })();
    }, [
      // fetchData
    ])
}

export default useProductData