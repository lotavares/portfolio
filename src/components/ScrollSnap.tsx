'use client'

import { useEffect, useRef } from 'react'

export function ScrollSnap() {
  const isScrollingRef = useRef(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const sections = ['introduction', 'about', 'contact']

    const getCurrentSectionIndex = () => {
      const scrollTop = window.pageYOffset
      const windowHeight = window.innerHeight

      for (let i = 0; i < sections.length; i++) {
        const element = document.getElementById(sections[i])
        if (element) {
          const rect = element.getBoundingClientRect()
          const elementTop = scrollTop + rect.top

          if (scrollTop >= elementTop - windowHeight / 2 &&
            scrollTop < elementTop + windowHeight / 2) {
            return i
          }
        }
      }

      return Math.round(scrollTop / windowHeight)
    }

    const scrollToSection = (index: number) => {
      if (index < 0 || index >= sections.length) return

      const element = document.getElementById(sections[index])
      if (element) {
        isScrollingRef.current = true
        element.scrollIntoView({ behavior: 'smooth' })

        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current)
        }

        timeoutRef.current = setTimeout(() => {
          isScrollingRef.current = false
        }, 1000)
      }
    }

    const handleWheel = (e: WheelEvent) => {
      if (isScrollingRef.current) {
        e.preventDefault()
        return
      }

      if (Math.abs(e.deltaY) < 10) return

      const currentIndex = getCurrentSectionIndex()
      const direction = e.deltaY > 0 ? 1 : -1
      const nextIndex = currentIndex + direction

      if (nextIndex >= 0 && nextIndex < sections.length) {
        e.preventDefault()
        scrollToSection(nextIndex)
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })

    return () => {
      window.removeEventListener('wheel', handleWheel)
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return null
}