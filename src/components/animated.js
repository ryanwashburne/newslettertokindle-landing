import React, { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useIntersection } from 'react-use'

export default ({ children, ...props }) => {
  const [loaded, setLoaded] = useState(false)
  const ref = useRef(null)
  const intersection = useIntersection(ref, {
    root: null,
    rootMargin: '0px 0px -250px 0px',
    threshold: 0,
  })
  useEffect(() => {
    if (intersection?.isIntersecting && !loaded) {
      setLoaded(true)
    }
  }, [intersection?.isIntersecting])
  return (
    <motion.div
      ref={ref}
      animate={loaded ? 'end' : 'start'}
      variants={{
        start: {
          opacity: 0,
          x: 25,
        },
        end: {
          opacity: 1,
          x: 0,
        },
      }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
