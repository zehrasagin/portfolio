import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import AnalyticsDashboard from "@/components/analytics-dashboard"

export const metadata: Metadata = {
  title: "Admin Dashboard | Full-Stack Developer Portfolio",
  description: "Analytics dashboard for portfolio website",
}

export default function AdminPage() {
  return (
    <main className="min-h-screen p-6 md:p-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <Button variant="outline" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Link>
          </Button>
        </div>

        <AnalyticsDashboard />
      </div>
    </main>
  )
}
