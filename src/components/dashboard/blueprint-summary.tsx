"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, TrendingUp, Target, DollarSign, Lightbulb } from "lucide-react";
import Link from "next/link";

const insights = [
  { icon: TrendingUp, label: "Market Validation", value: "8.7/10", color: "text-emerald-500" },
  { icon: Target, label: "Feasibility Rating", value: "High", color: "text-blue-500" },
  { icon: Lightbulb, label: "Core Features", value: "24", color: "text-purple-500" },
  { icon: DollarSign, label: "Recommended Tier", value: "Freemium", color: "text-amber-500" },
];

export const BlueprintSummary = () => {
  return (
    <Card>
      <CardHeader className="border-b">
        <CardTitle>Blueprint Summary</CardTitle>
        <p className="text-sm text-muted-foreground mt-1">
          AI-generated strategic insights for your project
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 gap-4">
          {insights.map((insight, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center gap-2">
                <insight.icon className={`size-4 ${insight.color}`} />
                <span className="text-xs text-muted-foreground">{insight.label}</span>
              </div>
              <p className="text-2xl font-bold">{insight.value}</p>
            </div>
          ))}
        </div>

        {/* Improvement Recommendations */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium">Top Recommendations</h4>
          <div className="space-y-2">
            {[
              "Add social authentication for faster onboarding",
              "Implement progressive disclosure for complex features",
              "Consider tiered pricing with usage-based add-ons"
            ].map((rec, index) => (
              <div key={index} className="flex items-start gap-2 text-sm">
                <div className="size-1.5 bg-primary rounded-full mt-2" />
                <p className="text-muted-foreground">{rec}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Button variant="outline" className="w-full" asChild>
          <Link href="/dashboard/blueprint">
            View Full Blueprint
            <ExternalLink className="size-4 ml-2" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};
