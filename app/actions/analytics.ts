"use server"

// In-memory storage for analytics data
// Note: This will reset on server restart, but works for demo purposes
const analyticsData = {
  totalViews: 0,
  pathViews: new Map<string, number>(),
  dailyVisitors: new Map<string, Set<string>>(),
}

type PageView = {
  path: string
  timestamp: number
  referrer: string
  userAgent: string
  country?: string
}

export async function trackPageView(data: PageView) {
  try {
    // Increment total views
    analyticsData.totalViews += 1

    // Increment path-specific views
    const currentPathViews = analyticsData.pathViews.get(data.path) || 0
    analyticsData.pathViews.set(data.path, currentPathViews + 1)

    // Track unique visitors by day
    const today = new Date().toISOString().split("T")[0]
    if (!analyticsData.dailyVisitors.has(today)) {
      analyticsData.dailyVisitors.set(today, new Set())
    }
    analyticsData.dailyVisitors.get(today)?.add(data.userAgent)

    return { success: true }
  } catch (error) {
    console.error("Error tracking page view:", error)
    return { success: false, error }
  }
}

export async function getAnalytics() {
  try {
    // Get total views
    const totalViews = analyticsData.totalViews

    // Get views for each section
    const sections = ["", "about", "skills", "projects", "experience", "contact"]
    const sectionViews = sections.map((section) => {
      const path = section ? `/${section}` : "/"
      const views = analyticsData.pathViews.get(path) || 0
      return { path: section || "home", views }
    })

    // Get visitor counts for the last 7 days
    const last7Days = Array.from({ length: 7 }, (_, i) => {
      const date = new Date()
      date.setDate(date.getDate() - i)
      return date.toISOString().split("T")[0]
    })

    const dailyVisitors = last7Days
      .map((day) => {
        const visitors = analyticsData.dailyVisitors.get(day)
        const count = visitors ? visitors.size : 0
        return { day, count }
      })
      .reverse()

    return {
      totalViews,
      sectionViews,
      dailyVisitors,
    }
  } catch (error) {
    console.error("Error fetching analytics:", error)
    return {
      totalViews: 0,
      sectionViews: [],
      dailyVisitors: [],
    }
  }
}
