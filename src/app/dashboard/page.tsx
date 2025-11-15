import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/app-sidebar";
import { ProjectOverviewPanel } from "@/components/dashboard/project-overview-panel";
import { InsightsSidebar } from "@/components/dashboard/insights-sidebar";
import { StatsOverview } from "@/components/dashboard/stats-overview";
import { QuickActions } from "@/components/dashboard/quick-actions";
import { ActiveProjects } from "@/components/dashboard/active-projects";
import { TicketProgress } from "@/components/dashboard/ticket-progress";

export default function DashboardPage() {
  return (
    <SidebarProvider>
      <div className="relative flex h-screen w-full">
        <DashboardSidebar />
        <SidebarInset className="flex flex-col">
          <main className="mx-auto w-full max-w-[1600px] px-4 py-6 sm:px-6 sm:py-8">
            <h1 className="sr-only">Dashboard</h1>
            {/* Stats Overview - Full Width */}
            <div className="mb-8">
              <StatsOverview />
            </div>

            {/* Main Dashboard Grid */}
            <div className="grid gap-6 lg:grid-cols-12">
              {/* Left Column - 3 columns */}
              <div className="space-y-6 lg:col-span-3">
                <ProjectOverviewPanel />
                <QuickActions />
              </div>

              {/* Center Column - 6 columns */}
              <div className="space-y-6 lg:col-span-6">
                <ActiveProjects />
                <TicketProgress />
              </div>

              {/* Right Column - 3 columns */}
              <div className="lg:col-span-3">
                <InsightsSidebar />
              </div>
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
