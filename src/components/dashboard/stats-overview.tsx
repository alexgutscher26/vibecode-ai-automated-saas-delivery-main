"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Rocket, ListTodo, Zap, TrendingUp } from "lucide-react";

const stats = [
  {
    label: "Active Projects",
    value: "12",
    change: "+3 this week",
    trend: "up",
    icon: Rocket,
    color: "text-blue-500",
  },
  {
    label: "Open Tickets",
    value: "47",
    change: "23 in progress",
    trend: "neutral",
    icon: ListTodo,
    color: "text-purple-500",
  },
  {
    label: "Agent Tasks",
    value: "156",
    change: "+28 today",
    trend: "up",
    icon: Zap,
    color: "text-amber-500",
  },
  {
    label: "Velocity Score",
    value: "8.4x",
    change: "+12% vs last sprint",
    trend: "up",
    icon: TrendingUp,
    color: "text-emerald-500",
  },
];

export const StatsOverview = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Card key={index} className="py-4">
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">{stat.label}</p>
              <stat.icon className={`size-4 ${stat.color}`} />
            </div>
            <div>
              <p className="text-3xl font-bold">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-1">
                {stat.change}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
