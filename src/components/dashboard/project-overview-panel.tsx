"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Circle, ArrowRight } from "lucide-react";

const phases = [
  { name: "Blueprint Validation", status: "completed", progress: 100 },
  { name: "Backlog Generation", status: "completed", progress: 100 },
  { name: "Development", status: "in-progress", progress: 65 },
  { name: "Deployment", status: "pending", progress: 0 },
];

export const ProjectOverviewPanel = () => {
  return (
    <Card className="border-primary/20">
      <CardHeader className="border-b bg-gradient-to-r from-primary/5 to-transparent">
        <CardTitle>E-Commerce Platform</CardTitle>
        <p className="text-sm text-muted-foreground mt-2">
          Multi-vendor marketplace with AI-powered product recommendations and real-time inventory management
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Phase Indicators */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium">Current Phase Progress</h4>
          {phases.map((phase, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className={`flex-shrink-0 ${
                phase.status === "completed" 
                  ? "text-emerald-500" 
                  : phase.status === "in-progress"
                  ? "text-blue-500"
                  : "text-muted-foreground"
              }`}>
                {phase.status === "completed" ? (
                  <CheckCircle2 className="size-5" />
                ) : (
                  <Circle className="size-5" />
                )}
              </div>
              <div className="flex-1 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{phase.name}</span>
                  <span className="text-xs text-muted-foreground">{phase.progress}%</span>
                </div>
                <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-300 ${
                      phase.status === "completed"
                        ? "bg-emerald-500"
                        : phase.status === "in-progress"
                        ? "bg-blue-500"
                        : "bg-muted"
                    }`}
                    style={{ width: `${phase.progress}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Percent Complete */}
        <div className="p-4 bg-muted/50 rounded-lg space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Overall Completion</span>
            <span className="text-2xl font-bold">66%</span>
          </div>
          <div className="h-2 bg-background rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 w-[66%]" />
          </div>
        </div>

        {/* Last Update */}
        <div className="text-xs text-muted-foreground">
          <span className="font-medium">Last update from AI agents:</span> 2 hours ago
        </div>

        {/* Next Best Action */}
        <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg space-y-3">
          <div className="flex items-start gap-2">
            <ArrowRight className="size-4 text-primary mt-0.5" />
            <div className="flex-1">
              <h5 className="text-sm font-semibold text-primary">Next Best Action</h5>
              <p className="text-sm text-muted-foreground mt-1">
                Review Agent-Alpha's OAuth implementation in VIBE-248 and approve merge to continue checkout flow development
              </p>
            </div>
          </div>
          <Button size="sm" className="w-full">
            Review Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
