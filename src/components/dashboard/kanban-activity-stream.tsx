"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, User, AlertTriangle, ArrowRight, CheckCircle2, Code } from "lucide-react";
import Link from "next/link";

const activities = [
  {
    type: "agent",
    agent: "Agent-Alpha",
    action: "moved",
    ticket: "VIBE-248",
    from: "In Progress",
    to: "Code Review",
    time: "3 min ago",
    icon: ArrowRight,
  },
  {
    type: "agent",
    agent: "Agent-Beta",
    action: "completed",
    ticket: "VIBE-245",
    description: "Implemented payment webhook handlers",
    time: "12 min ago",
    icon: CheckCircle2,
  },
  {
    type: "blocker",
    ticket: "VIBE-251",
    description: "Blocked: Waiting for API credentials",
    agent: "Agent-Gamma",
    time: "18 min ago",
    icon: AlertTriangle,
  },
  {
    type: "human",
    user: "You",
    action: "manually moved",
    ticket: "VIBE-239",
    from: "Ready",
    to: "In Progress",
    time: "45 min ago",
    icon: User,
  },
  {
    type: "agent",
    agent: "Agent-Delta",
    action: "started working on",
    ticket: "VIBE-252",
    description: "Create dashboard analytics components",
    time: "1 hour ago",
    icon: Code,
  },
  {
    type: "automation",
    action: "Auto-moved",
    ticket: "VIBE-240",
    from: "Testing",
    to: "Done",
    description: "All tests passed via MCP",
    time: "2 hours ago",
    icon: CheckCircle2,
  },
];

export const KanbanActivityStream = () => {
  return (
    <Card>
      <CardHeader className="border-b">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Kanban Activity Stream</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              Live workflow updates across automation and human collaboration
            </p>
          </div>
          <Button variant="outline" size="sm" asChild>
            <Link href="/dashboard/kanban">
              View Board
            </Link>
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className={`p-2 rounded-lg flex-shrink-0 ${
              activity.type === "blocker"
                ? "bg-red-500/10 text-red-500"
                : activity.type === "human"
                ? "bg-purple-500/10 text-purple-500"
                : "bg-blue-500/10 text-blue-500"
            }`}>
              <activity.icon className="size-4" />
            </div>
            
            <div className="flex-1 space-y-1 min-w-0">
              {activity.type === "agent" && (
                <p className="text-sm">
                  <span className="font-medium">{activity.agent}</span>{" "}
                  <span className="text-muted-foreground">{activity.action}</span>{" "}
                  <span className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">
                    {activity.ticket}
                  </span>
                  {activity.from && activity.to && (
                    <>
                      {" "}
                      <span className="text-muted-foreground">from</span>{" "}
                      <span className="text-muted-foreground">{activity.from}</span>{" "}
                      <span className="text-muted-foreground">to</span>{" "}
                      <span className="text-foreground">{activity.to}</span>
                    </>
                  )}
                </p>
              )}
              
              {activity.type === "blocker" && (
                <p className="text-sm">
                  <span className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">
                    {activity.ticket}
                  </span>{" "}
                  <span className="text-red-500 font-medium">{activity.description}</span>
                </p>
              )}
              
              {activity.type === "human" && (
                <p className="text-sm">
                  <span className="font-medium">{activity.user}</span>{" "}
                  <span className="text-muted-foreground">{activity.action}</span>{" "}
                  <span className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">
                    {activity.ticket}
                  </span>
                  {activity.from && activity.to && (
                    <>
                      {" "}
                      <span className="text-muted-foreground">from</span>{" "}
                      <span className="text-muted-foreground">{activity.from}</span>{" "}
                      <span className="text-muted-foreground">to</span>{" "}
                      <span className="text-foreground">{activity.to}</span>
                    </>
                  )}
                </p>
              )}
              
              {activity.type === "automation" && (
                <p className="text-sm">
                  <span className="font-medium">{activity.action}</span>{" "}
                  <span className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">
                    {activity.ticket}
                  </span>{" "}
                  <span className="text-muted-foreground">to</span>{" "}
                  <span className="text-foreground">{activity.to}</span>
                </p>
              )}
              
              {activity.description && activity.type !== "blocker" && (
                <p className="text-xs text-muted-foreground">{activity.description}</p>
              )}
              <p className="text-xs text-muted-foreground">{activity.time}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
