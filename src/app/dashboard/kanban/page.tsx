"use client";

import { useCallback, useMemo, useState } from "react";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/app-sidebar";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Plus, 
  Search,
  Filter,
  MoreVertical,
  AlertCircle,
  Clock,
  CheckCircle2,
  Circle,
  Bot
} from "lucide-react";

const columns = [
  { id: "backlog", title: "Backlog", color: "text-muted-foreground" },
  { id: "ready", title: "Ready", color: "text-blue-500" },
  { id: "in-progress", title: "In Progress", color: "text-purple-500" },
  { id: "review", title: "In Review", color: "text-amber-500" },
  { id: "done", title: "Done", color: "text-emerald-500" },
];

type Ticket = {
  id: string;
  title: string;
  priority: "critical" | "high" | "medium" | "low";
  assignee: string;
  complexity: number;
  agent?: boolean;
  progress?: number;
};

type BoardState = Record<"backlog" | "ready" | "in-progress" | "review" | "done", Ticket[]>;

const priorityColors = {
  critical: "bg-red-500/10 text-red-600 border-red-500/20",
  high: "bg-orange-500/10 text-orange-600 border-orange-500/20",
  medium: "bg-blue-500/10 text-blue-600 border-blue-500/20",
  low: "bg-gray-500/10 text-gray-600 border-gray-500/20",
};

export default function KanbanPage() {
  const [board, setBoard] = useState<BoardState>({
    backlog: [
      { id: "VIBE-301", title: "Implement wishlist functionality", priority: "medium", assignee: "Unassigned", complexity: 5 },
      { id: "VIBE-302", title: "Add product comparison feature", priority: "low", assignee: "Unassigned", complexity: 8 },
      { id: "VIBE-303", title: "Email notification system", priority: "high", assignee: "Unassigned", complexity: 13 },
    ],
    ready: [
      { id: "VIBE-248", title: "Stripe payment integration", priority: "critical", assignee: "Agent-Alpha", complexity: 13, agent: true },
      { id: "VIBE-249", title: "Order confirmation emails", priority: "high", assignee: "Agent-Beta", complexity: 5, agent: true },
    ],
    "in-progress": [
      { id: "VIBE-245", title: "Product search with filters", priority: "high", assignee: "Agent-Alpha", complexity: 8, agent: true, progress: 65 },
      { id: "VIBE-246", title: "Shopping cart optimization", priority: "medium", assignee: "Sarah Chen", complexity: 5, progress: 40 },
      { id: "VIBE-247", title: "Vendor dashboard analytics", priority: "medium", assignee: "Agent-Gamma", complexity: 13, agent: true, progress: 30 },
    ],
    review: [
      { id: "VIBE-242", title: "User authentication flow", priority: "critical", assignee: "Agent-Beta", complexity: 8, agent: true },
      { id: "VIBE-243", title: "Product image optimization", priority: "medium", assignee: "Mike Wilson", complexity: 3 },
    ],
    done: [
      { id: "VIBE-240", title: "Database schema setup", priority: "high", assignee: "Agent-Alpha", complexity: 8, agent: true },
      { id: "VIBE-241", title: "Homepage hero section", priority: "medium", assignee: "Sarah Chen", complexity: 3 },
    ],
  });

  const [activities, setActivities] = useState<
    Array<{
      action: "moved" | "completed" | "commented" | "blocked";
      ticket: string;
      user: string;
      time: string;
      agent: boolean;
      from?: string;
      to?: string;
    }>
  >([
    {
      action: "moved",
      ticket: "VIBE-245",
      from: "Ready",
      to: "In Progress",
      user: "Agent-Alpha",
      time: "5 min ago",
      agent: true,
    },
    {
      action: "completed",
      ticket: "VIBE-240",
      user: "Agent-Alpha",
      time: "1 hour ago",
      agent: true,
    },
    {
      action: "commented",
      ticket: "VIBE-246",
      user: "Sarah Chen",
      time: "2 hours ago",
      agent: false,
    },
    {
      action: "blocked",
      ticket: "VIBE-248",
      user: "Agent-Beta",
      time: "3 hours ago",
      agent: true,
    },
  ]);

  const titleById = useMemo(
    () => Object.fromEntries(columns.map((c) => [c.id, c.title])),
    []
  ) as Record<string, string>;

  const onDragStart = useCallback(
    (e: React.DragEvent, fromColumn: string, ticketId: string) => {
      e.dataTransfer.setData(
        "application/json",
        JSON.stringify({ fromColumn, ticketId })
      );
      e.dataTransfer.effectAllowed = "move";
    },
    []
  );

  const onDrop = useCallback(
    (e: React.DragEvent, toColumn: keyof BoardState) => {
      e.preventDefault();
      const payload =
        e.dataTransfer.getData("application/json") ||
        e.dataTransfer.getData("text/plain");
      if (!payload) return;
      let parsed: { fromColumn: keyof BoardState; ticketId: string } | null = null;
      try {
        parsed = JSON.parse(payload);
      } catch {
        return;
      }
      if (!parsed) return;
      const { fromColumn, ticketId } = parsed;
      if (fromColumn === toColumn) return;
      setBoard((prev) => {
        const moving = prev[fromColumn].find((t) => t.id === ticketId);
        if (!moving) return prev;
        const next: BoardState = {
          ...prev,
          [fromColumn]: prev[fromColumn].filter((t) => t.id !== ticketId),
          [toColumn]: [...prev[toColumn], moving],
        };
        setActivities((old) => [
          {
            action: "moved",
            ticket: ticketId,
            from: titleById[fromColumn],
            to: titleById[toColumn],
            user: moving.assignee,
            time: "just now",
            agent: !!moving.agent,
          },
          ...old,
        ]);
        return next;
      });
    },
    [titleById]
  );

  return (
    <SidebarProvider>
      <div className="relative flex h-screen w-full">
        <DashboardSidebar />
        <SidebarInset className="flex flex-col">
          <main className="mx-auto max-w-[1800px] px-6 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold">Kanban Board</h1>
              <p className="text-muted-foreground mt-2">
                Track tickets across the development lifecycle
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="sm">
                <Filter className="size-4 mr-2" />
                Filter
              </Button>
              <Button size="sm">
                <Plus className="size-4 mr-2" />
                New Ticket
              </Button>
            </div>
          </div>

          {/* Search & Stats */}
          <div className="flex items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <Input placeholder="Search tickets..." className="pl-9" />
            </div>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="size-2 bg-emerald-500 rounded-full" />
                <span className="text-muted-foreground">47 Completed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="size-2 bg-purple-500 rounded-full" />
                <span className="text-muted-foreground">12 In Progress</span>
              </div>
              <div className="flex items-center gap-2">
                <Bot className="size-4 text-primary" />
                <span className="text-muted-foreground">8 Agent Tasks</span>
              </div>
            </div>
          </div>
        </div>

          {/* Kanban Board */}
          <div className="grid grid-cols-5 gap-4 overflow-x-auto pb-4">
            {columns.map((column) => (
              <div key={column.id} className="min-w-[280px]">
                <Card className="h-full">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className={`text-sm font-semibold ${column.color}`}>
                        {column.title}
                      </CardTitle>
                      <Badge variant="secondary" className="text-xs">
                        {board[column.id as keyof BoardState]?.length ?? 0}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent
                    className="space-y-3"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => onDrop(e, column.id as keyof BoardState)}
                  >
                    {board[column.id as keyof BoardState].map((ticket) => (
                      <Card
                        key={ticket.id}
                        className="cursor-pointer hover:shadow-md transition-shadow border-l-4 border-l-transparent hover:border-l-primary"
                        draggable
                        onDragStart={(e) =>
                          onDragStart(e, column.id, ticket.id)
                        }
                      >
                        <CardContent className="p-4 space-y-3">
                          {/* Ticket Header */}
                          <div className="flex items-start justify-between">
                            <div className="space-y-1">
                              <div className="flex items-center gap-2">
                              <span className="text-xs font-mono text-muted-foreground">
                                {ticket.id}
                              </span>
                              {ticket.agent && (
                                <Bot className="size-3 text-primary" />
                              )}
                            </div>
                            <h4 className="text-sm font-medium leading-tight">
                              {ticket.title}
                            </h4>
                          </div>
                          <Button variant="ghost" size="icon" className="size-6 -mr-2 -mt-1">
                            <MoreVertical className="size-3" />
                          </Button>
                        </div>

                        {/* Progress Bar (if in progress) */}
                        {ticket.progress !== undefined && (
                          <div className="space-y-1">
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-muted-foreground">Progress</span>
                              <span className="font-medium">{ticket.progress}%</span>
                            </div>
                            <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
                                style={{ width: `${ticket.progress}%` }}
                              />
                            </div>
                          </div>
                        )}

                        {/* Priority & Complexity */}
                        <div className="flex items-center gap-2">
                          <Badge 
                            variant="outline" 
                            className={`text-xs capitalize ${priorityColors[ticket.priority as keyof typeof priorityColors]}`}
                          >
                            {ticket.priority}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            SP: {ticket.complexity}
                          </Badge>
                        </div>

                        {/* Assignee */}
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          {ticket.agent ? (
                            <div className="flex items-center gap-1.5">
                              <Bot className="size-3 text-primary" />
                              <span>{ticket.assignee}</span>
                            </div>
                          ) : ticket.assignee === "Unassigned" ? (
                            <span className="italic">{ticket.assignee}</span>
                          ) : (
                            <div className="flex items-center gap-1.5">
                              <div className="size-5 bg-primary/10 rounded-full flex items-center justify-center">
                                <span className="text-[10px] font-medium">
                                  {ticket.assignee.split(" ").map(n => n[0]).join("")}
                                </span>
                              </div>
                              <span>{ticket.assignee}</span>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}

                  {/* Add Card Button */}
                  {column.id !== "done" && (
                    <Button variant="ghost" size="sm" className="w-full justify-start text-muted-foreground">
                      <Plus className="size-4 mr-2" />
                      Add ticket
                    </Button>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Activity Feed */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activities.map((activity, i) => (
                <div key={i} className="flex items-center gap-4 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className={`size-8 rounded-full flex items-center justify-center ${
                    activity.action === "completed" ? "bg-emerald-500/10" :
                    activity.action === "blocked" ? "bg-red-500/10" :
                    "bg-blue-500/10"
                  }`}>
                    {activity.action === "completed" ? (
                      <CheckCircle2 className="size-4 text-emerald-500" />
                    ) : activity.action === "blocked" ? (
                      <AlertCircle className="size-4 text-red-500" />
                    ) : (
                      <Circle className="size-4 text-blue-500" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      {activity.agent && <Bot className="size-3 text-primary" />}
                      <span className="text-sm font-medium">{activity.user}</span>
                      <span className="text-sm text-muted-foreground">
                        {activity.action === "moved" && `moved ${activity.ticket} from ${activity.from} to ${activity.to}`}
                        {activity.action === "completed" && `completed ${activity.ticket}`}
                        {activity.action === "commented" && `commented on ${activity.ticket}`}
                        {activity.action === "blocked" && `flagged ${activity.ticket} as blocked`}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="size-3" />
                    {activity.time}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
