import React, { useState } from 'react'

export const useFetching = (callback) => {
  const [isLoading, setISLOADING] = useState(false)
  const [error, setERRO] = useState('')

  const fetching = async () => {
    try {
      setISLOADING(true)
      await callback()
    } catch (error) {
      setERRO(error.message)
    } finally {
      setISLOADING(false)
    }
  }
  return [fetching, isLoading, error]
}
