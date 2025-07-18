"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { trackPageView } from "@/app/actions/analytics"

export default function AnalyticsTracker() {
  const pathname = usePathname()

  useEffect(() => {
    // Check if this page view was already tracked in this session
    const sessionKey = `viewed_${pathname}`
    const hasViewedInSession = sessionStorage.getItem(sessionKey)

    if (!hasViewedInSession) {
      // Track page view when component mounts or pathname changes
      const trackView = async () => {
        try {
          // Mark this page as viewed in this session
          sessionStorage.setItem(sessionKey, "true")

          // Get a visitor ID from local storage or create a new one
          let visitorId = localStorage.getItem("visitor_id")
          if (!visitorId) {
            visitorId = `visitor_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`
            localStorage.setItem("visitor_id", visitorId)
          }

          await trackPageView({
            path: pathname,
            timestamp: Date.now(),
            referrer: document.referrer,
            userAgent: visitorId, // Using visitorId instead of full userAgent for privacy
          })
        } catch (error) {
          console.error("Failed to track page view:", error)
        }
      }

      trackView()
    }
  }, [pathname])

  // This component doesn't render anything
  return null
}
