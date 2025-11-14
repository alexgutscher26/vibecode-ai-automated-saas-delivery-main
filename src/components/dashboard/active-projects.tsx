"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardAction } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, ExternalLink, Clock, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: 1,
    name: "E-Commerce Platform",
    description: "Multi-vendor marketplace with AI recommendations",
    status: "In Progress",
    progress: 65,
    tickets: { total: 24, completed: 16 },
    lastUpdate: "2 hours ago",
  },
  {
    id: 2,
    name: "Healthcare Portal",
    description: "Patient management system with telemedicine",
    status: "Planning",
    progress: 20,
    tickets: { total: 18, completed: 4 },
    lastUpdate: "5 hours ago",
  },
  {
    id: 3,
    name: "FinTech Dashboard",
    description: "Real-time analytics and payment processing",
    status: "In Progress",
    progress: 85,
    tickets: { total: 32, completed: 27 },
    lastUpdate: "30 minutes ago",
  },
];

export const ActiveProjects = () => {
  return (
    <Card>
      <CardHeader className="border-b">
        <CardTitle>Active Projects</CardTitle>
        <CardDescription>
          Your current product blueprints and development pipelines
        </CardDescription>
        <CardAction>
          <Button variant="outline" size="sm" asChild>
            <Link href="/dashboard/projects">View All</Link>
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="divide-y">
        {projects.map((project) => (
          <div key={project.id} className="py-4 first:pt-0 last:pb-0">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 space-y-3">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold">{project.name}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      project.status === "In Progress" 
                        ? "bg-blue-500/10 text-blue-500" 
                        : "bg-amber-500/10 text-amber-500"
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {project.description}
                  </p>
                </div>
                
                {/* Progress Bar */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">
                      {project.tickets.completed} of {project.tickets.total} tickets completed
                    </span>
                    <span className="font-medium">{project.progress}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all duration-300"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="size-3" />
                    {project.lastUpdate}
                  </div>
                  <Link
                    href={`/dashboard/projects/${project.id}`}
                    className="flex items-center gap-1 hover:text-foreground transition-colors"
                  >
                    View Details
                    <ExternalLink className="size-3" />
                  </Link>
                </div>
              </div>

              <Button variant="ghost" size="icon">
                <MoreHorizontal className="size-4" />
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
