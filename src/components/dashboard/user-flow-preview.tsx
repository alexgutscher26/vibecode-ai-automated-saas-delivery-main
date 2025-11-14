"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Maximize2, CheckCircle2, Circle } from "lucide-react";
import Link from "next/link";

const modules = [
  { name: "Landing Page", implemented: true, x: 10, y: 20 },
  { name: "Authentication", implemented: true, x: 10, y: 40 },
  { name: "Dashboard", implemented: true, x: 30, y: 40 },
  { name: "Product Catalog", implemented: false, x: 50, y: 30 },
  { name: "Shopping Cart", implemented: false, x: 70, y: 30 },
  { name: "Checkout", implemented: false, x: 70, y: 50 },
  { name: "Payment", implemented: true, x: 90, y: 50 },
];

export const UserFlowPreview = () => {
  return (
    <Card>
      <CardHeader className="border-b">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>User Flow Diagram</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              Real-time visualization of system architecture
            </p>
          </div>
          <Button variant="ghost" size="icon" asChild>
            <Link href="/dashboard/user-flow">
              <Maximize2 className="size-4" />
            </Link>
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Simplified Flow Diagram */}
        <div className="relative h-64 bg-muted/30 rounded-lg border-2 border-dashed border-muted-foreground/20 overflow-hidden">
          {/* Flow connections */}
          <svg className="absolute inset-0 w-full h-full">
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="10"
                refX="9"
                refY="3"
                orient="auto"
                className="fill-muted-foreground"
              >
                <polygon points="0 0, 10 3, 0 6" />
              </marker>
            </defs>
            <line x1="15%" y1="25%" x2="15%" y2="38%" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead)" className="text-muted-foreground" />
            <line x1="20%" y1="45%" x2="28%" y2="45%" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead)" className="text-muted-foreground" />
            <line x1="40%" y1="45%" x2="48%" y2="38%" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead)" className="text-muted-foreground/40 opacity-50" strokeDasharray="4" />
            <line x1="60%" y1="35%" x2="68%" y2="35%" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead)" className="text-muted-foreground/40 opacity-50" strokeDasharray="4" />
            <line x1="75%" y1="35%" x2="75%" y2="48%" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead)" className="text-muted-foreground/40 opacity-50" strokeDasharray="4" />
            <line x1="80%" y1="55%" x2="88%" y2="55%" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead)" className="text-muted-foreground" />
          </svg>
          
          {/* Flow nodes */}
          {modules.map((module, index) => (
            <div
              key={index}
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${module.x}%`, top: `${module.y}%` }}
            >
              <div className={`px-3 py-2 rounded-lg text-xs font-medium flex items-center gap-1.5 ${
                module.implemented
                  ? "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30"
                  : "bg-muted text-muted-foreground border border-border"
              }`}>
                {module.implemented ? (
                  <CheckCircle2 className="size-3" />
                ) : (
                  <Circle className="size-3" />
                )}
                <span className="whitespace-nowrap">{module.name}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="size-3 text-emerald-500" />
            <span className="text-muted-foreground">Implemented</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Circle className="size-3 text-muted-foreground" />
            <span className="text-muted-foreground">Planned</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          <div className="text-center p-3 bg-muted/50 rounded-lg">
            <p className="text-2xl font-bold">4/7</p>
            <p className="text-xs text-muted-foreground mt-1">Modules Complete</p>
          </div>
          <div className="text-center p-3 bg-muted/50 rounded-lg">
            <p className="text-2xl font-bold">57%</p>
            <p className="text-xs text-muted-foreground mt-1">Flow Coverage</p>
          </div>
        </div>

        {/* CTA */}
        <Button variant="outline" className="w-full" asChild>
          <Link href="/dashboard/user-flow">
            Expand to Full Diagram
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};
