"use client";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/app-sidebar";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Rocket, 
  GitBranch,
  GitPullRequest,
  CheckCircle2,
  Clock,
  AlertCircle,
  ExternalLink,
  Code,
  PlayCircle,
  Package
} from "lucide-react";

const releases = [
  {
    version: "v1.2.0",
    status: "deployed",
    date: "2024-01-15",
    features: ["AI Product Recommendations", "Enhanced Search", "Performance Optimizations"],
    commits: 47,
    prs: 12,
    deployTime: "00:04:23",
  },
  {
    version: "v1.1.0",
    status: "deployed",
    date: "2024-01-08",
    features: ["Shopping Cart", "Wishlist", "Order History"],
    commits: 38,
    prs: 9,
    deployTime: "00:03:51",
  },
  {
    version: "v1.0.1",
    status: "deployed",
    date: "2024-01-01",
    features: ["Bug Fixes", "Security Patches"],
    commits: 12,
    prs: 4,
    deployTime: "00:02:15",
  },
];

const branches = [
  {
    name: "feature/payment-gateway",
    status: "in-progress",
    commits: 23,
    author: "Agent-Alpha",
    lastUpdate: "2 hours ago",
    readiness: 85,
  },
  {
    name: "feature/vendor-analytics",
    status: "in-progress",
    commits: 15,
    author: "Agent-Gamma",
    lastUpdate: "4 hours ago",
    readiness: 60,
  },
  {
    name: "feature/email-notifications",
    status: "ready",
    commits: 8,
    author: "Agent-Beta",
    lastUpdate: "1 day ago",
    readiness: 100,
  },
];

const prs = [
  {
    id: "#245",
    title: "Implement product search with advanced filters",
    author: "Agent-Alpha",
    status: "approved",
    reviews: 2,
    checks: { passed: 8, total: 8 },
    mergeable: true,
  },
  {
    id: "#242",
    title: "Add user authentication flow with OAuth",
    author: "Agent-Beta",
    status: "review",
    reviews: 1,
    checks: { passed: 7, total: 8 },
    mergeable: false,
  },
  {
    id: "#240",
    title: "Database schema optimization for multi-vendor",
    author: "Agent-Alpha",
    status: "approved",
    reviews: 2,
    checks: { passed: 8, total: 8 },
    mergeable: true,
  },
];

export default function ReleasesPage() {
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
              <h1 className="text-3xl font-bold">Releases & Deployments</h1>
              <p className="text-muted-foreground mt-2">
                Track code progression from development to production
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="sm">
                <Code className="size-4 mr-2" />
                Open in Cursor
              </Button>
              <Button size="sm">
                <Rocket className="size-4 mr-2" />
                Deploy Release
              </Button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid gap-4 sm:grid-cols-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Releases</span>
                <Rocket className="size-4 text-emerald-500" />
              </div>
              <div className="text-3xl font-bold">3</div>
              <div className="text-xs text-muted-foreground mt-2">Last: v1.2.0</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Active Branches</span>
                <GitBranch className="size-4 text-blue-500" />
              </div>
              <div className="text-3xl font-bold">3</div>
              <div className="text-xs text-muted-foreground mt-2">2 in progress</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Open PRs</span>
                <GitPullRequest className="size-4 text-purple-500" />
              </div>
              <div className="text-3xl font-bold">3</div>
              <div className="text-xs text-muted-foreground mt-2">2 ready to merge</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Deploy Time</span>
                <Clock className="size-4 text-amber-500" />
              </div>
              <div className="text-3xl font-bold">4:23</div>
              <div className="text-xs text-muted-foreground mt-2">Avg minutes</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Active Branches */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GitBranch className="size-5 text-primary" />
                  Active Branches
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {branches.map((branch, i) => (
                  <div key={i} className="p-4 border rounded-lg space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-mono text-sm font-semibold">{branch.name}</h4>
                          {branch.status === "ready" ? (
                            <Badge variant="outline" className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20">
                              Ready
                            </Badge>
                          ) : (
                            <Badge variant="outline" className="bg-blue-500/10 text-blue-600 border-blue-500/20">
                              In Progress
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span>{branch.commits} commits</span>
                          <span>by {branch.author}</span>
                          <span>{branch.lastUpdate}</span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Code className="size-4 mr-2" />
                        View
                      </Button>
                    </div>
                    
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">Deployment Readiness</span>
                        <span className="font-semibold">{branch.readiness}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className={`h-full ${
                            branch.readiness === 100
                              ? "bg-emerald-500"
                              : "bg-gradient-to-r from-blue-500 to-purple-500"
                          }`}
                          style={{ width: `${branch.readiness}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Pull Requests */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GitPullRequest className="size-5 text-primary" />
                  Open Pull Requests
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {prs.map((pr, i) => (
                  <div key={i} className="p-4 border rounded-lg space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-mono text-sm font-semibold text-primary">{pr.id}</span>
                          <span className="text-sm font-medium">{pr.title}</span>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          by {pr.author}
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="size-4 mr-2" />
                        Review
                      </Button>
                    </div>

                    <div className="flex items-center gap-4">
                      {pr.status === "approved" ? (
                        <Badge variant="outline" className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20">
                          <CheckCircle2 className="size-3 mr-1" />
                          Approved
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="bg-amber-500/10 text-amber-600 border-amber-500/20">
                          <Clock className="size-3 mr-1" />
                          In Review
                        </Badge>
                      )}
                      <div className="text-xs text-muted-foreground">
                        {pr.reviews} review{pr.reviews !== 1 ? "s" : ""}
                      </div>
                      <div className={`text-xs ${
                        pr.checks.passed === pr.checks.total
                          ? "text-emerald-600"
                          : "text-amber-600"
                      }`}>
                        {pr.checks.passed}/{pr.checks.total} checks passed
                      </div>
                    </div>

                    {pr.mergeable && pr.status === "approved" && (
                      <Button size="sm" className="w-full">
                        <GitPullRequest className="size-4 mr-2" />
                        Merge Pull Request
                      </Button>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Build Pipeline */}
            <Card>
              <CardHeader>
                <CardTitle>Current Build Pipeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { stage: "Linting & Type Check", status: "completed", time: "00:00:45" },
                    { stage: "Unit Tests", status: "completed", time: "00:01:23" },
                    { stage: "Integration Tests", status: "in-progress", time: "00:01:45" },
                    { stage: "Build Production", status: "pending", time: "--" },
                    { stage: "Deploy to Vercel", status: "pending", time: "--" },
                  ].map((stage, i) => (
                    <div key={i} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        {stage.status === "completed" ? (
                          <CheckCircle2 className="size-5 text-emerald-500" />
                        ) : stage.status === "in-progress" ? (
                          <PlayCircle className="size-5 text-blue-500 animate-pulse" />
                        ) : (
                          <Clock className="size-5 text-muted-foreground" />
                        )}
                        <span className="text-sm font-medium">{stage.stage}</span>
                      </div>
                      <span className="text-xs text-muted-foreground font-mono">{stage.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Release History */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="size-5 text-primary" />
                  Release History
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {releases.map((release, i) => (
                  <div key={i} className="p-4 border rounded-lg space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold">{release.version}</div>
                        <div className="text-xs text-muted-foreground">{release.date}</div>
                      </div>
                      <Badge variant="outline" className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20">
                        Deployed
                      </Badge>
                    </div>
                    
                    <div className="space-y-1">
                      {release.features.map((feature, j) => (
                        <div key={j} className="text-xs text-muted-foreground">
                          • {feature}
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 text-xs text-muted-foreground pt-2 border-t">
                      <span>{release.commits} commits</span>
                      <span>{release.prs} PRs</span>
                      <span>{release.deployTime}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Deployment Status */}
            <Card>
              <CardHeader>
                <CardTitle>Deployment Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="size-4 text-emerald-600" />
                    <span className="font-semibold text-emerald-600">Production</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    v1.2.0 • Deployed 7 days ago
                  </div>
                  <Button variant="outline" size="sm" className="w-full mt-3">
                    <ExternalLink className="size-4 mr-2" />
                    View Live
                  </Button>
                </div>

                <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <PlayCircle className="size-4 text-blue-600" />
                    <span className="font-semibold text-blue-600">Staging</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    feature/payment-gateway • Running tests
                  </div>
                  <Button variant="outline" size="sm" className="w-full mt-3">
                    <ExternalLink className="size-4 mr-2" />
                    View Staging
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Code className="size-4 mr-2" />
                  Open in Cursor
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <GitPullRequest className="size-4 mr-2" />
                  Create PR
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Rocket className="size-4 mr-2" />
                  Deploy to Staging
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
