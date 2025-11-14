"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Bot, CheckCircle2, Clock, Code } from "lucide-react";

const activities = [
  {
    agent: "Agent-Alpha",
    action: "Completed ticket",
    target: "VIBE-245",
    time: "2 min ago",
    status: "success",
  },
  {
    agent: "Agent-Beta",
    action: "Writing code for",
    target: "VIBE-249",
    time: "5 min ago",
    status: "active",
  },
  {
    agent: "Agent-Gamma",
    action: "Reviewing PR for",
    target: "VIBE-232",
    time: "12 min ago",
    status: "active",
  },
  {
    agent: "Agent-Delta",
    action: "Started working on",
    target: "VIBE-251",
    time: "18 min ago",
    status: "active",
  },
  {
    agent: "Agent-Alpha",
    action: "Deployed changes for",
    target: "VIBE-240",
    time: "1 hour ago",
    status: "success",
  },
];

export const AgentActivity = () => {
  return (
    <Card>
      <CardHeader className="border-b">
        <CardTitle>Agent Activity</CardTitle>
        <CardDescription>
          Real-time autonomous agent updates
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className={`p-1.5 rounded-lg ${
              activity.status === "success" 
                ? "bg-emerald-500/10 text-emerald-500" 
                : "bg-blue-500/10 text-blue-500"
            }`}>
              {activity.status === "success" ? (
                <CheckCircle2 className="size-3.5" />
              ) : (
                <Bot className="size-3.5" />
              )}
            </div>
            
            <div className="flex-1 space-y-1">
              <p className="text-sm">
                <span className="font-medium">{activity.agent}</span>{" "}
                <span className="text-muted-foreground">{activity.action}</span>{" "}
                <span className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">
                  {activity.target}
                </span>
              </p>
              <p className="text-xs text-muted-foreground">{activity.time}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
