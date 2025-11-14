"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, FileText, GitBranch, Sparkles, Settings } from "lucide-react";
import Link from "next/link";

const actions = [
  {
    label: "New Blueprint",
    description: "Generate strategic SaaS blueprint",
    icon: Sparkles,
    href: "/dashboard/new-blueprint",
    color: "bg-purple-500/10 text-purple-500",
  },
  {
    label: "Create Flow",
    description: "Design user journey diagram",
    icon: GitBranch,
    href: "/dashboard/new-flow",
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    label: "Generate Backlog",
    description: "Auto-create Kanban tickets",
    icon: FileText,
    href: "/dashboard/new-backlog",
    color: "bg-emerald-500/10 text-emerald-500",
  },
  {
    label: "Deploy Agent",
    description: "Launch autonomous engineering agent",
    icon: Plus,
    href: "/dashboard/deploy-agent",
    color: "bg-amber-500/10 text-amber-500",
  },
];

export const QuickActions = () => {
  return (
    <Card>
      <CardHeader className="border-b">
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {actions.map((action, index) => (
          <Button
            key={index}
            variant="ghost"
            className="w-full justify-start h-auto py-3 px-3"
            asChild
          >
            <Link href={action.href}>
              <div className={`p-2 rounded-lg ${action.color} mr-3`}>
                <action.icon className="size-4" />
              </div>
              <div className="text-left flex-1">
                <p className="font-medium text-sm">{action.label}</p>
                <p className="text-xs text-muted-foreground">
                  {action.description}
                </p>
              </div>
            </Link>
          </Button>
        ))}
      </CardContent>
    </Card>
  );
}
