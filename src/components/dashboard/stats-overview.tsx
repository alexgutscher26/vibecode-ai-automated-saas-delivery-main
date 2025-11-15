"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { Rocket, ListTodo, Zap, TrendingUp, TrendingDown, Minus } from "lucide-react";

type StatItem = {
  label: string;
  value: string | number;
  change?: string;
  trend?: "up" | "down" | "neutral";
  icon?: React.ComponentType<{ className?: string }>;
  color?: string;
};

const defaultStats: StatItem[] = [
  {
    label: "Active Projects",
    value: 12,
    change: "+3 this week",
    trend: "up",
    icon: Rocket,
    color: "text-blue-500",
  },
  {
    label: "Open Tickets",
    value: 47,
    change: "23 in progress",
    trend: "neutral",
    icon: ListTodo,
    color: "text-purple-500",
  },
  {
    label: "Agent Tasks",
    value: 156,
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

interface StatsOverviewProps {
  stats?: StatItem[];
  isLoading?: boolean;
  className?: string;
}

export const StatsOverview = ({ stats = defaultStats, isLoading = false, className }: StatsOverviewProps) => {
  const skeletonCount = 4;
  return (
    <div className={cn("grid gap-4 sm:grid-cols-2 lg:grid-cols-4", className)}>
      {isLoading
        ? Array.from({ length: skeletonCount }).map((_, i) => (
            <Card key={`skeleton-${i}`} className="py-4">
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-4 w-4 rounded" />
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-8 w-32" />
                  <Skeleton className="h-3 w-28" />
                </div>
              </CardContent>
            </Card>
          ))
        : stats.length === 0 ? (
            <Card className="py-4 sm:col-span-2 lg:col-span-4">
              <CardContent className="flex items-center justify-center py-6">
                <p className="text-sm text-muted-foreground">No data available</p>
              </CardContent>
            </Card>
          ) : (
            stats.map((stat, index) => {
              const Icon = stat.icon ?? Rocket;
              const TrendIcon = stat.trend === "down" ? TrendingDown : stat.trend === "neutral" ? Minus : TrendingUp;
              const formattedValue = typeof stat.value === "number" ? new Intl.NumberFormat().format(stat.value) : stat.value;
              return (
                <Card key={index} className="py-4">
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                      <Icon className={cn("size-4", stat.color)} aria-hidden />
                    </div>
                    <div>
                      <p className="text-3xl font-bold">{formattedValue}</p>
                      {stat.change && (
                        <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                          <TrendIcon
                            className={cn(
                              "size-3",
                              stat.trend === "down"
                                ? "text-red-500"
                                : stat.trend === "neutral"
                                ? "text-muted-foreground"
                                : "text-emerald-500"
                            )}
                            aria-hidden
                          />
                          {stat.change}
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })
          )}
    </div>
  );
};
