"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Zap, Bell, Settings, User } from "lucide-react";

export const DashboardHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto max-w-[1600px] px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-semibold"
          >
            <Zap className="fill-primary text-primary size-5" />
            <span>VibeCode AI</span>
          </Link>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/dashboard"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Dashboard
            </Link>
            <Link
              href="/dashboard/blueprint"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Blueprint
            </Link>
            <Link
              href="/dashboard/user-flow"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              User Flow
            </Link>
            <Link
              href="/dashboard/kanban"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Kanban Board
            </Link>
            <Link
              href="/dashboard/agents"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Agents
            </Link>
            <Link
              href="/dashboard/code"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Code Workspace
            </Link>
            <Link
              href="/dashboard/releases"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Releases
            </Link>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="size-4" />
              <span className="absolute top-1.5 right-1.5 size-2 bg-destructive rounded-full" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="size-4" />
            </Button>
            <Button variant="outline" size="icon">
              <User className="size-4" />
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}