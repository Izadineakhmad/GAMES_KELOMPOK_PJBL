import { useEffect, useRef, useState } from 'react'

export function useIntersection({treshold} : {treshold : number}) {
  const intersectingRef = useRef<HTMLDivElement>(null)
  const [Intersecting, setIntersecting] = useState<boolean>(false)

  useEffect(() => {
    const entry = new IntersectionObserver(([entries]) => {
      if (entries.isIntersecting) {
        setIntersecting(true)
      }
    }, {
      threshold : treshold,
      
    })
    
    if (intersectingRef.current) {
      entry.observe(intersectingRef.current)
    }    

    return () => entry.disconnect()
  }, [] )

  return {intersectingRef, Intersecting}
}