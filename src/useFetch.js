import { useEffect, useState } from 'react'

const useFetch = url => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(url)
      .then(res => {
        if (!res.ok) {
          // error coming back from server
          throw Error('Could not fetch the data.')
        }
        return res.json()
      })
      .then(data => {
        setData(data)
        setIsLoading(false)
        setError(null)
      })
      .catch(err => {
        // auto catches network / connection error
        setError(err.message)
        setIsLoading(false)
      })
  }, [url])

  return { data, isLoading, error }
}

export default useFetch