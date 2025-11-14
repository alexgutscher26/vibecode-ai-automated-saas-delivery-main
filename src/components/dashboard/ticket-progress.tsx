"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, CheckCircle2, Circle, Clock } from "lucide-react";

const tickets = [
  {
    id: "VIBE-248",
    title: "Implement OAuth authentication flow",
    project: "E-Commerce Platform",
    status: "In Progress",
    priority: "High",
    assignee: "Agent-Alpha",
    complexity: 8,
  },
  {
    id: "VIBE-249",
    title: "Design product recommendation algorithm",
    project: "E-Commerce Platform",
    status: "In Review",
    priority: "Medium",
    assignee: "Agent-Beta",
    complexity: 5,
  },
  {
    id: "VIBE-250",
    title: "Create patient dashboard UI components",
    project: "Healthcare Portal",
    status: "Ready",
    priority: "High",
    assignee: "Unassigned",
    complexity: 3,
  },
  {
    id: "VIBE-251",
    title: "Setup payment gateway integration",
    project: "FinTech Dashboard",
    status: "Blocked",
    priority: "Critical",
    assignee: "Agent-Gamma",
    complexity: 13,
  },
];

const statusConfig = {
  "In Progress": { icon: Clock, color: "text-blue-500 bg-blue-500/10" },
  "In Review": { icon: AlertCircle, color: "text-amber-500 bg-amber-500/10" },
  "Ready": { icon: Circle, color: "text-gray-500 bg-gray-500/10" },
  "Blocked": { icon: AlertCircle, color: "text-red-500 bg-red-500/10" },
};

const priorityConfig = {
  "Critical": "text-red-500",
  "High": "text-orange-500",
  "Medium": "text-yellow-500",
  "Low": "text-green-500",
};

export const TicketProgress = () => {
  return (
    <Card>
      <CardHeader className="border-b">
        <CardTitle>Recent Tickets</CardTitle>
        <CardDescription>
          Active and pending tasks in your backlog
        </CardDescription>
      </CardHeader>
      <CardContent className="divide-y">
        {tickets.map((ticket) => {
          const StatusIcon = statusConfig[ticket.status as keyof typeof statusConfig].icon;
          const statusColor = statusConfig[ticket.status as keyof typeof statusConfig].color;
          const priorityColor = priorityConfig[ticket.priority as keyof typeof priorityConfig];
          
          return (
            <div key={ticket.id} className="py-4 first:pt-0 last:pb-0">
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-lg ${statusColor}`}>
                  <StatusIcon className="size-4" />
                </div>
                
                <div className="flex-1 space-y-2">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-muted-foreground">
                          {ticket.id}
                        </span>
                        <span className={`text-xs font-medium ${priorityColor}`}>
                          {ticket.priority}
                        </span>
                      </div>
                      <h4 className="font-medium mt-1">{ticket.title}</h4>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {ticket.project}
                      </p>
                    </div>
                    
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </div>
                  
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>Assigned to: <span className="text-foreground">{ticket.assignee}</span></span>
                    <span>•</span>
                    <span>Complexity: <span className="text-foreground">{ticket.complexity}</span></span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
