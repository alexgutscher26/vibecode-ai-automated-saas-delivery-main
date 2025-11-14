"use client";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/app-sidebar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: "marketplace",
    title: "Multi‑Vendor",
    description:
      "A marketplace platform enabling multiple vendors, real‑time inventory and AI product recommendations.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
    tags: ["E‑commerce", "AI", "Inventory"],
    createdAt: "Created Nov 28, 2025",
  },
  {
    id: "analytics-suite",
    title: "Analytics Suite",
    description:
      "Unified analytics with dashboards, events pipeline and usage‑based billing integration.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    tags: ["Analytics", "Billing", "Dashboards"],
    createdAt: "Created Nov 28, 2025",
  },
];

export default function WorkspacePage() {
  return (
    <SidebarProvider>
      <div className="relative flex h-screen w-full">
        <DashboardSidebar />
        <SidebarInset className="flex flex-col">
          <main className="mx-auto max-w-[1600px] px-6 py-8">
            <div className="mb-8 flex items-start justify-between">
              <div>
                <h1 className="text-3xl font-bold">Workspace</h1>
                <p className="text-muted-foreground mt-2">
                  Explore projects. Open any to design its flow with a diagram editor.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {projects.map((p) => (
                <Card key={p.id} className="overflow-hidden border bg-card">
                  <div className="relative h-20 w-full">
                    <div
                      className="h-full w-full"
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(135deg, #ef4444 0 64px, #ffffff 64px 128px)",
                      }}
                    />
                    <div className="absolute left-3 -bottom-3 flex h-7 w-7 items-center justify-center rounded-md bg-red-500 shadow-sm">
                      <div className="flex items-center">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-black mr-0.5" />
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-black ml-0.5" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4 pt-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-base font-semibold truncate">{p.title}</h3>
                        <div className="text-[11px] text-muted-foreground mt-1">{p.createdAt}</div>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/dashboard/workspace/${p.id}`}>
                          Open Editor
                          <ArrowRight className="ml-2 size-3" />
                        </Link>
                      </Button>
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground truncate">{p.description}</p>
                    <div className="mt-3 flex items-center gap-2 text-[11px] text-muted-foreground">
                      {p.tags.map((t) => (
                        <span key={t} className="rounded-full border px-1.5 py-0.5">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
