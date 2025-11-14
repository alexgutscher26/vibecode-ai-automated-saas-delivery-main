"use client";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/app-sidebar";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Bot, 
  Play, 
  Pause,
  Settings,
  Activity,
  Zap,
  Code,
  GitPullRequest,
  CheckCircle2,
  Clock,
  AlertCircle,
  TrendingUp
} from "lucide-react";

const agents = [
  {
    id: "agent-alpha",
    name: "Agent-Alpha",
    status: "active",
    specialization: "Full-Stack Development",
    currentTask: "VIBE-245: Product search with filters",
    tasksCompleted: 127,
    successRate: 94,
    avgCycleTime: "4.2h",
    activity: [
      { action: "Writing unit tests for search API", time: "2 min ago", type: "code" },
      { action: "Implemented filter logic", time: "15 min ago", type: "code" },
      { action: "Created PR #245", time: "1 hour ago", type: "pr" },
    ],
    health: "healthy",
    capabilities: ["React", "Node.js", "PostgreSQL", "REST APIs"],
  },
  {
    id: "agent-beta",
    name: "Agent-Beta",
    status: "active",
    specialization: "Frontend Development",
    currentTask: "VIBE-249: Order confirmation emails",
    tasksCompleted: 89,
    successRate: 91,
    avgCycleTime: "3.8h",
    activity: [
      { action: "Designing email template", time: "5 min ago", type: "code" },
      { action: "Updated EmailService component", time: "20 min ago", type: "code" },
      { action: "Reviewed PR #242", time: "45 min ago", type: "review" },
    ],
    health: "healthy",
    capabilities: ["React", "TypeScript", "Tailwind CSS", "Email Templates"],
  },
  {
    id: "agent-gamma",
    name: "Agent-Gamma",
    status: "active",
    specialization: "Backend & Data",
    currentTask: "VIBE-247: Vendor dashboard analytics",
    tasksCompleted: 63,
    successRate: 88,
    avgCycleTime: "5.1h",
    activity: [
      { action: "Writing SQL aggregation queries", time: "8 min ago", type: "code" },
      { action: "Set up analytics pipeline", time: "1 hour ago", type: "code" },
    ],
    health: "warning",
    capabilities: ["PostgreSQL", "Data Analytics", "Node.js", "API Design"],
  },
  {
    id: "agent-delta",
    name: "Agent-Delta",
    status: "idle",
    specialization: "DevOps & Testing",
    currentTask: null,
    tasksCompleted: 45,
    successRate: 96,
    avgCycleTime: "2.9h",
    activity: [
      { action: "Completed deployment pipeline tests", time: "2 hours ago", type: "code" },
      { action: "Updated CI/CD workflow", time: "3 hours ago", type: "code" },
    ],
    health: "healthy",
    capabilities: ["CI/CD", "Docker", "Testing", "Monitoring"],
  },
];

export default function AgentsPage() {
  return (
    <SidebarProvider>
      <div className="relative flex h-screen w-full">
        <DashboardSidebar />
        <SidebarInset className="flex flex-col">
          <main className="mx-auto max-w-[1600px] px-6 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-bold">AI Agent Operations</h1>
              <p className="text-muted-foreground mt-2">
                Monitor and manage your autonomous development workforce
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="sm">
                <Settings className="size-4 mr-2" />
                Configure
              </Button>
              <Button size="sm">
                <Bot className="size-4 mr-2" />
                Deploy New Agent
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid gap-4 sm:grid-cols-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Active Agents</span>
                <Activity className="size-4 text-emerald-500" />
              </div>
              <div className="text-3xl font-bold">3<span className="text-muted-foreground text-lg">/4</span></div>
              <Badge variant="outline" className="mt-2 bg-emerald-500/10 text-emerald-600 border-emerald-500/20">
                Operational
              </Badge>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Tasks Completed</span>
                <CheckCircle2 className="size-4 text-blue-500" />
              </div>
              <div className="text-3xl font-bold">324</div>
              <div className="text-xs text-muted-foreground mt-2">+28 today</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Success Rate</span>
                <TrendingUp className="size-4 text-purple-500" />
              </div>
              <div className="text-3xl font-bold">92%</div>
              <div className="text-xs text-muted-foreground mt-2">+3% vs last week</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Avg Cycle Time</span>
                <Clock className="size-4 text-amber-500" />
              </div>
              <div className="text-3xl font-bold">4.0h</div>
              <div className="text-xs text-muted-foreground mt-2">Per ticket</div>
            </CardContent>
          </Card>
        </div>

        {/* Agent Cards */}
        <div className="grid gap-6 lg:grid-cols-2">
          {agents.map((agent) => (
            <Card key={agent.id} className={`${
              agent.status === "active" ? "border-primary/20" : ""
            }`}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`size-12 rounded-lg flex items-center justify-center ${
                      agent.status === "active" 
                        ? "bg-gradient-to-br from-primary/20 to-purple-500/20" 
                        : "bg-muted"
                    }`}>
                      <Bot className={`size-6 ${
                        agent.status === "active" ? "text-primary" : "text-muted-foreground"
                      }`} />
                    </div>
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        {agent.name}
                        {agent.status === "active" ? (
                          <Badge variant="outline" className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20">
                            Active
                          </Badge>
                        ) : (
                          <Badge variant="outline">Idle</Badge>
                        )}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">
                        {agent.specialization}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {agent.health === "warning" && (
                      <AlertCircle className="size-4 text-amber-500" />
                    )}
                    <Button variant="ghost" size="icon" className="size-8">
                      {agent.status === "active" ? (
                        <Pause className="size-4" />
                      ) : (
                        <Play className="size-4" />
                      )}
                    </Button>
                    <Button variant="ghost" size="icon" className="size-8">
                      <Settings className="size-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Current Task */}
                {agent.currentTask ? (
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-start gap-2 mb-2">
                      <Zap className="size-4 text-primary mt-0.5" />
                      <div className="flex-1">
                        <div className="text-xs text-muted-foreground mb-1">Current Task</div>
                        <div className="text-sm font-medium">{agent.currentTask}</div>
                      </div>
                    </div>
                    <div className="h-1.5 bg-background rounded-full overflow-hidden mt-3">
                      <div className="h-full bg-gradient-to-r from-primary to-purple-500 w-[65%] animate-pulse" />
                    </div>
                  </div>
                ) : (
                  <div className="p-4 bg-muted/30 rounded-lg border-2 border-dashed">
                    <div className="text-center text-sm text-muted-foreground">
                      No active task assigned
                    </div>
                  </div>
                )}

                {/* Performance Metrics */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">{agent.tasksCompleted}</div>
                    <div className="text-xs text-muted-foreground mt-1">Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">{agent.successRate}%</div>
                    <div className="text-xs text-muted-foreground mt-1">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">{agent.avgCycleTime}</div>
                    <div className="text-xs text-muted-foreground mt-1">Avg Time</div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold mb-3">Recent Activity</h4>
                  {agent.activity.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm">
                      <div className={`size-6 rounded flex items-center justify-center mt-0.5 ${
                        item.type === "code" ? "bg-blue-500/10" :
                        item.type === "pr" ? "bg-purple-500/10" :
                        "bg-emerald-500/10"
                      }`}>
                        {item.type === "code" ? (
                          <Code className="size-3 text-blue-500" />
                        ) : item.type === "pr" ? (
                          <GitPullRequest className="size-3 text-purple-500" />
                        ) : (
                          <CheckCircle2 className="size-3 text-emerald-500" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm">{item.action}</div>
                        <div className="text-xs text-muted-foreground mt-0.5">{item.time}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Capabilities */}
                <div>
                  <h4 className="text-sm font-semibold mb-2">Capabilities</h4>
                  <div className="flex flex-wrap gap-2">
                    {agent.capabilities.map((cap, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {cap}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* System Health */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>System Health & Logs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { type: "success", message: "Agent-Alpha successfully deployed PR #245", time: "5 min ago" },
                { type: "info", message: "Agent-Beta started task VIBE-249", time: "10 min ago" },
                { type: "warning", message: "Agent-Gamma experiencing high memory usage (85%)", time: "15 min ago" },
                { type: "success", message: "Agent-Delta completed deployment pipeline tests", time: "2 hours ago" },
                { type: "info", message: "System: All agents synchronized with latest codebase", time: "3 hours ago" },
              ].map((log, i) => (
                <div key={i} className="flex items-start gap-3 p-3 border rounded-lg">
                  <div className={`size-2 rounded-full mt-2 ${
                    log.type === "success" ? "bg-emerald-500" :
                    log.type === "warning" ? "bg-amber-500" :
                    "bg-blue-500"
                  }`} />
                  <div className="flex-1">
                    <div className="text-sm">{log.message}</div>
                    <div className="text-xs text-muted-foreground mt-1">{log.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
