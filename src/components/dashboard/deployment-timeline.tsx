"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GitBranch, GitPullRequest, CheckCircle2, Clock, ExternalLink, Rocket } from "lucide-react";
import Link from "next/link";

const branches = [
  {
    name: "feature/oauth-integration",
    status: "in-progress",
    commits: 12,
    author: "Agent-Alpha",
    updated: "2 hours ago",
  },
  {
    name: "feature/payment-webhooks",
    status: "ready",
    commits: 8,
    author: "Agent-Beta",
    updated: "5 hours ago",
  },
];

const prs = [
  {
    number: 342,
    title: "Add OAuth authentication flow",
    status: "review",
    author: "Agent-Alpha",
    checks: { passed: 12, total: 15 },
    progress: 80,
  },
  {
    number: 341,
    title: "Implement product recommendation engine",
    status: "approved",
    author: "Agent-Beta",
    checks: { passed: 18, total: 18 },
    progress: 100,
  },
];

export const DeploymentTimeline = () => {
  return (
    <Card>
      <CardHeader className="border-b">
        <CardTitle>Code Deployment Timeline</CardTitle>
        <p className="text-sm text-muted-foreground mt-1">
          Track branches, PRs, and release readiness
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* In-Progress Branches */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium">Active Branches</h4>
          {branches.map((branch, index) => (
            <div key={index} className="p-3 bg-muted/50 rounded-lg space-y-2">
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-start gap-2 flex-1">
                  <GitBranch className="size-4 text-muted-foreground mt-0.5" />
                  <div className="flex-1 min-w-0">
                    <p className="font-mono text-sm font-medium truncate">{branch.name}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {branch.commits} commits by {branch.author} · {branch.updated}
                    </p>
                  </div>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  branch.status === "ready"
                    ? "bg-emerald-500/10 text-emerald-500"
                    : "bg-blue-500/10 text-blue-500"
                }`}>
                  {branch.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Pull Requests */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium">Latest Pull Requests</h4>
          {prs.map((pr, index) => (
            <div key={index} className="p-3 bg-muted/50 rounded-lg space-y-3">
              <div className="flex items-start gap-2">
                <GitPullRequest className="size-4 text-muted-foreground mt-0.5" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm font-medium">#{pr.number}: {pr.title}</p>
                    <span className={`text-xs px-2 py-1 rounded-full flex-shrink-0 ${
                      pr.status === "approved"
                        ? "bg-emerald-500/10 text-emerald-500"
                        : "bg-amber-500/10 text-amber-500"
                    }`}>
                      {pr.status}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    by {pr.author}
                  </p>
                </div>
              </div>
              
              {/* Build Pipeline Progress */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">
                    Build Pipeline: {pr.checks.passed}/{pr.checks.total} checks passed
                  </span>
                  <span className="font-medium">{pr.progress}%</span>
                </div>
                <div className="h-1.5 bg-background rounded-full overflow-hidden">
                  <div
                    className={`h-full ${
                      pr.progress === 100 ? "bg-emerald-500" : "bg-blue-500"
                    }`}
                    style={{ width: `${pr.progress}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Deployment Readiness */}
        <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-500/20 rounded-lg">
              <Rocket className="size-5 text-emerald-500" />
            </div>
            <div className="flex-1">
              <h5 className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                Ready to Deploy
              </h5>
              <p className="text-xs text-muted-foreground mt-0.5">
                PR #341 passed all checks and is approved for production deployment
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <Button variant="outline" className="w-full" asChild>
          <Link href="/dashboard/code">
            Review Code in Cursor
            <ExternalLink className="size-4 ml-2" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};
