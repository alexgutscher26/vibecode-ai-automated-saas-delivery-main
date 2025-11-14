"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lightbulb, AlertTriangle, TrendingUp, DollarSign, Sparkles, Bell, X } from "lucide-react";

const insights = [
  {
    type: "improvement",
    icon: Lightbulb,
    color: "bg-blue-500/10 text-blue-500",
    title: "Blueprint Optimization",
    message: "Consider adding real-time notifications to increase user engagement by 40%",
    action: "Review Suggestion",
  },
  {
    type: "risk",
    icon: AlertTriangle,
    color: "bg-amber-500/10 text-amber-500",
    title: "Risk Alert",
    message: "Payment gateway integration blocked for 18 hours. Consider reassigning to Agent-Beta.",
    action: "Take Action",
  },
  {
    type: "optimization",
    icon: TrendingUp,
    color: "bg-emerald-500/10 text-emerald-500",
    title: "Performance Insight",
    message: "API response times improved 35% after Agent-Alpha's caching implementation",
    action: "View Metrics",
  },
  {
    type: "pricing",
    icon: DollarSign,
    color: "bg-purple-500/10 text-purple-500",
    title: "Pricing Recommendation",
    message: "Based on feature set, consider increasing Pro tier to $79/mo for 25% higher margins",
    action: "Adjust Pricing",
  },
  {
    type: "capability",
    icon: Sparkles,
    color: "bg-pink-500/10 text-pink-500",
    title: "New Agent Capability",
    message: "Agent-Alpha now supports TypeScript optimization and can reduce bundle size by 30%",
    action: "Enable Feature",
  },
];

export const InsightsSidebar = () => {
  return (
    <Card className="sticky top-20">
      <CardHeader className="border-b">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Bell className="size-5" />
            Insights & Alerts
          </CardTitle>
          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
            5 new
          </span>
        </div>
        <p className="text-sm text-muted-foreground mt-1">
          Always-on strategic guidance
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        {insights.map((insight, index) => (
          <div
            key={index}
            className="p-4 bg-muted/50 rounded-lg space-y-3 border border-border hover:border-primary/20 transition-colors"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-start gap-3 flex-1">
                <div className={`p-2 rounded-lg flex-shrink-0 ${insight.color}`}>
                  <insight.icon className="size-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <h5 className="text-sm font-semibold">{insight.title}</h5>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-3">
                    {insight.message}
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="h-6 w-6 flex-shrink-0">
                <X className="size-3" />
              </Button>
            </div>
            
            <Button variant="outline" size="sm" className="w-full">
              {insight.action}
            </Button>
          </div>
        ))}
        
        <Button variant="ghost" className="w-full" size="sm">
          View All Insights
        </Button>
      </CardContent>
    </Card>
  );
};
