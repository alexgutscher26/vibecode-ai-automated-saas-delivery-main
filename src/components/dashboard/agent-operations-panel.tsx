"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, CheckCircle2, AlertCircle, Clock, GitPullRequest, Code, Activity } from "lucide-react";

const agents = [
  {
    name: "Agent-Alpha",
    status: "active",
    currentTask: "VIBE-248: OAuth implementation",
    progress: 85,
    activities: [
      "Writing authentication middleware",
      "Created PR #342",
      "Running integration tests"
    ],
    health: "healthy",
  },
  {
    name: "Agent-Beta",
    status: "active",
    currentTask: "VIBE-249: Recommendation algorithm",
    progress: 60,
    activities: [
      "Analyzing user behavior data",
      "Implementing ML model",
      "Optimizing query performance"
    ],
    health: "healthy",
  },
  {
    name: "Agent-Gamma",
    status: "blocked",
    currentTask: "VIBE-251: Payment gateway setup",
    progress: 30,
    activities: [
      "Waiting for API credentials",
      "Prepared integration tests",
      "Documented implementation plan"
    ],
    health: "warning",
  },
  {
    name: "Agent-Delta",
    status: "active",
    currentTask: "VIBE-252: Dashboard components",
    progress: 45,
    activities: [
      "Creating chart components",
      "Implementing data fetching",
      "Writing unit tests"
    ],
    health: "healthy",
  },
];

export const AgentOperationsPanel = () => {
  return (
    <Card>
      <CardHeader className="border-b">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Agent Operations Panel</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              Operational telemetry for your AI workforce
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <div className="size-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-muted-foreground">4 active</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {agents.map((agent, index) => (
          <div key={index} className="space-y-3">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3 flex-1">
                <div className={`p-2 rounded-lg ${
                  agent.status === "active"
                    ? "bg-blue-500/10 text-blue-500"
                    : "bg-amber-500/10 text-amber-500"
                }`}>
                  <Bot className="size-4" />
                </div>
                
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold">{agent.name}</h4>
                    <div className={`flex items-center gap-1.5 text-xs ${
                      agent.health === "healthy"
                        ? "text-emerald-500"
                        : "text-amber-500"
                    }`}>
                      {agent.health === "healthy" ? (
                        <CheckCircle2 className="size-3.5" />
                      ) : (
                        <AlertCircle className="size-3.5" />
                      )}
                      {agent.health}
                    </div>
                  </div>
                  
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-sm">
                      <Code className="size-3.5 text-muted-foreground" />
                      <span className="text-muted-foreground">{agent.currentTask}</span>
                    </div>
                    
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium">{agent.progress}%</span>
                    </div>
                    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full transition-all ${
                          agent.status === "active" ? "bg-blue-500" : "bg-amber-500"
                        }`}
                        style={{ width: `${agent.progress}%` }}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-1.5 text-xs">
                    <h5 className="font-medium text-muted-foreground">Recent Activity</h5>
                    {agent.activities.map((activity, actIndex) => (
                      <div key={actIndex} className="flex items-start gap-2">
                        <div className="size-1 bg-primary rounded-full mt-1.5" />
                        <span className="text-muted-foreground">{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {index < agents.length - 1 && <div className="border-t" />}
          </div>
        ))}
        
        <Button variant="outline" className="w-full">
          View All Agent Logs
        </Button>
      </CardContent>
    </Card>
  );
};
