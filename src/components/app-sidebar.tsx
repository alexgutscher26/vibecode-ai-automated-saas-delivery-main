"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  Activity,
  Home,
  Infinity,
  LinkIcon,
  Package2,
  PieChart,
  Settings,
  Sparkles,
  TrendingUp,
  Users,
  Sun,
  Moon,
  Folder,
} from "lucide-react";
import { Logo } from "@/components/logo";
import type { Route } from "./nav-main";
import DashboardNavigation from "@/components/nav-main";
import { TeamSwitcher } from "@/components/team-switcher";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";


const dashboardRoutes: Route[] = [
  {
    id: "dashboard",
    title: "Dashboard",
    icon: <Home className="size-4" />,
    link: "/dashboard",
  },
  {
    id: "blueprint",
    title: "Blueprint",
    icon: <Package2 className="size-4" />,
    link: "/dashboard/blueprint",
    subs: [
      { title: "Overview", link: "#" },
      { title: "Strategy", link: "#" },
      { title: "Tech Stack", link: "#" },
    ],
  },
  {
    id: "user-flow",
    title: "User Flow",
    icon: <Activity className="size-4" />,
    link: "/dashboard/user-flow",
    subs: [
      { title: "Map", link: "#" },
      { title: "Scenarios", link: "#" },
    ],
  },
  {
    id: "kanban",
    title: "Kanban Board",
    icon: <PieChart className="size-4" />,
    link: "/dashboard/kanban",
    subs: [
      { title: "Backlog", link: "#" },
      { title: "In Progress", link: "#" },
      { title: "Done", link: "#" },
    ],
  },
  {
    id: "agents",
    title: "Agents",
    icon: <Users className="size-4" />,
    link: "/dashboard/agents",
    subs: [
      { title: "All Agents", link: "#" },
      { title: "Tasks", link: "#" },
      { title: "Logs", link: "#" },
    ],
  },
  {
    id: "code",
    title: "Code Workspace",
    icon: <Infinity className="size-4" />,
    link: "/dashboard/code",
    subs: [
      { title: "Files", link: "#" },
      { title: "Pull Requests", link: "#" },
      { title: "Branches", link: "#" },
    ],
  },
  {
    id: "workspace",
    title: "Workspace",
    icon: <Folder className="size-4" />,
    link: "/dashboard/workspace",
  },
  {
    id: "releases",
    title: "Releases",
    icon: <Sparkles className="size-4" />,
    link: "/dashboard/releases",
    subs: [
      { title: "Stable", link: "#" },
      { title: "Beta", link: "#" },
      { title: "Canary", link: "#" },
    ],
  },
  {
    id: "settings",
    title: "Settings",
    icon: <Settings className="size-4" />,
    link: "/dashboard/settings",
    subs: [
      { title: "Profile", link: "#" },
      { title: "Notifications", link: "#" },
      { title: "Security", link: "#" },
      { title: "Appearance", link: "#" },
    ],
  },
];

const teams = [
  { id: "1", name: "Alpha Inc.", logo: Logo, plan: "Free" },
  { id: "2", name: "Beta Corp.", logo: Logo, plan: "Free" },
  { id: "3", name: "Gamma Tech", logo: Logo, plan: "Free" },
];

export function DashboardSidebar() {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <Sidebar variant="floating" collapsible="icon">
      <SidebarHeader
        className={cn(
          "flex md:pt-3.5",
          isCollapsed
            ? "flex-row items-center justify-between gap-y-4 md:flex-col md:items-start md:justify-start"
            : "flex-row items-center justify-between"
        )}
      >
        <a href="/" className="flex items-center gap-2">
          <Logo className="h-8 w-8" />
          {!isCollapsed && (
            <span className="font-semibold text-black dark:text-white">
              VibeCode AI
            </span>
          )}
        </a>

        <motion.div
          key={isCollapsed ? "header-collapsed" : "header-expanded"}
          className={cn(
            "flex items-center gap-2",
            isCollapsed ? "flex-row md:flex-col-reverse" : "flex-row"
          )}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          >
            {mounted && resolvedTheme === "dark" ? (
              <Sun className="size-4" />
            ) : (
              <Moon className="size-4" />
            )}
          </Button>
          <SidebarTrigger />
        </motion.div>
      </SidebarHeader>
      <SidebarContent className="gap-4 px-2 py-4">
        <DashboardNavigation routes={dashboardRoutes} />
      </SidebarContent>
      <SidebarFooter className="px-2">
        <TeamSwitcher teams={teams} />
      </SidebarFooter>
    </Sidebar>
  );
}
