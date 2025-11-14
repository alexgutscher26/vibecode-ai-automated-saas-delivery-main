import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/app-sidebar";
import { ProjectOverviewPanel } from "@/components/dashboard/project-overview-panel";
import { BlueprintSummary } from "@/components/dashboard/blueprint-summary";
import { VelocityMetrics } from "@/components/dashboard/velocity-metrics";
import { KanbanActivityStream } from "@/components/dashboard/kanban-activity-stream";
import { AgentOperationsPanel } from "@/components/dashboard/agent-operations-panel";
import { DeploymentTimeline } from "@/components/dashboard/deployment-timeline";
import { UserFlowPreview } from "@/components/dashboard/user-flow-preview";
import { InsightsSidebar } from "@/components/dashboard/insights-sidebar";
import { StatsOverview } from "@/components/dashboard/stats-overview";
import { QuickActions } from "@/components/dashboard/quick-actions";

export default function DashboardPage() {
  return (
    <SidebarProvider>
      <div className="relative flex h-screen w-full">
        <DashboardSidebar />
        <SidebarInset className="flex flex-col">
          <main className="mx-auto max-w-[1600px] px-6 py-8">
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
            <BlueprintSummary />
            <VelocityMetrics />
            <KanbanActivityStream />
            <AgentOperationsPanel />
            <DeploymentTimeline />
            <UserFlowPreview />
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
