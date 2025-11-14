"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { TrendingUp, TrendingDown, CheckCircle2, Clock, Users, Zap } from "lucide-react";

const metrics = [
  {
    label: "Tickets Generated",
    value: "248",
    change: "+32",
    trend: "up",
    icon: CheckCircle2,
  },
  {
    label: "Tickets Completed",
    value: "201",
    change: "+18 today",
    trend: "up",
    icon: CheckCircle2,
  },
  {
    label: "Avg Cycle Time",
    value: "2.3 days",
    change: "-0.5 days",
    trend: "up",
    icon: Clock,
  },
  {
    label: "Agent Contributions",
    value: "87%",
    change: "+5%",
    trend: "up",
    icon: Users,
  },
];

export const VelocityMetrics = () => {
  return (
    <Card>
      <CardHeader className="border-b">
        <CardTitle>Progress Velocity Metrics</CardTitle>
        <p className="text-sm text-muted-foreground mt-1">
          Quantified throughput across the delivery lifecycle
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-4">
          {metrics.map((metric, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center gap-2">
                <metric.icon className="size-4 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">{metric.label}</span>
              </div>
              <div className="flex items-baseline gap-2">
                <p className="text-2xl font-bold">{metric.value}</p>
                <span className={`text-xs flex items-center gap-1 ${
                  metric.trend === "up" ? "text-emerald-500" : "text-red-500"
                }`}>
                  {metric.trend === "up" ? (
                    <TrendingUp className="size-3" />
                  ) : (
                    <TrendingDown className="size-3" />
                  )}
                  {metric.change}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Sprint Status */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium">Sprint Status</h4>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Sprint 12 Progress</span>
              <span className="font-medium">18 / 24 tickets</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 w-[75%]" />
            </div>
            <p className="text-xs text-muted-foreground">6 tickets remaining · 3 days left</p>
          </div>
        </div>

        {/* Delivery Sentiment */}
        <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-500/20 rounded-lg">
              <Zap className="size-5 text-emerald-500" />
            </div>
            <div className="flex-1">
              <h5 className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                On Track
              </h5>
              <p className="text-xs text-muted-foreground mt-0.5">
                Delivery momentum is strong. Agents are resolving tickets 12% faster than last sprint.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
