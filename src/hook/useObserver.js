import { useEffect, useRef } from "react"

export const useObserver = (ref, canload, isLoading, callback ) => {
  const observer = useRef()
  useEffect(() => {
    if(observer.current) observer.current.disconnect()
    var cd = function (entries, observer) {
      if (entries[0].isIntersecting && canload ) {
        callback()
      }
    }
    observer.current = new IntersectionObserver(cd)
    observer.current.observe(ref.current)
  }, [isLoading])
}