"use client";

import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Maximize2, 
  Download, 
  RefreshCw,
  CheckCircle2,
  Circle,
  ArrowRight,
  User,
  ShoppingCart,
  CreditCard,
  Package,
  Star
} from "lucide-react";

export default function UserFlowPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <main className="mx-auto max-w-[1600px] px-6 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-bold">User Flow Diagram</h1>
              <p className="text-muted-foreground mt-2">
                Visual system architecture and user journey mapping
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="sm">
                <Download className="size-4 mr-2" />
                Export
              </Button>
              <Button variant="outline" size="sm">
                <RefreshCw className="size-4 mr-2" />
                Regenerate
              </Button>
              <Button size="sm">
                <Maximize2 className="size-4 mr-2" />
                Full Screen
              </Button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid gap-4 sm:grid-cols-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold">7</div>
              <div className="text-sm text-muted-foreground">Total Modules</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-emerald-500">4</div>
              <div className="text-sm text-muted-foreground">Implemented</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-amber-500">3</div>
              <div className="text-sm text-muted-foreground">In Progress</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold">57%</div>
              <div className="text-sm text-muted-foreground">Coverage</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main Flow Diagram */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Customer Journey Flow</CardTitle>
              </CardHeader>
              <CardContent>
                {/* SVG Flow Diagram */}
                <div className="bg-muted/30 rounded-lg p-8 min-h-[700px]">
                  <svg className="w-full h-full" viewBox="0 0 800 700" xmlns="http://www.w3.org/2000/svg">
                    {/* Entry Point */}
                    <g>
                      <circle cx="400" cy="50" r="30" fill="hsl(var(--primary))" />
                      <text x="400" y="55" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">START</text>
                    </g>

                    {/* User Registration/Login - Implemented */}
                    <g>
                      <line x1="400" y1="80" x2="400" y2="120" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#arrowhead)" />
                      <rect x="320" y="120" width="160" height="60" rx="8" fill="hsl(var(--emerald-500))" fillOpacity="0.2" stroke="hsl(142 76% 36%)" strokeWidth="2" />
                      <circle cx="340" cy="140" r="4" fill="hsl(142 76% 36%)" />
                      <text x="400" y="145" textAnchor="middle" fontSize="14" fontWeight="600">User Auth</text>
                      <text x="400" y="165" textAnchor="middle" fontSize="11" fill="hsl(var(--muted-foreground))">Registration/Login</text>
                    </g>

                    {/* Browse Products - Implemented */}
                    <g>
                      <line x1="400" y1="180" x2="400" y2="220" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#arrowhead)" />
                      <rect x="320" y="220" width="160" height="60" rx="8" fill="hsl(var(--emerald-500))" fillOpacity="0.2" stroke="hsl(142 76% 36%)" strokeWidth="2" />
                      <circle cx="340" cy="240" r="4" fill="hsl(142 76% 36%)" />
                      <text x="400" y="245" textAnchor="middle" fontSize="14" fontWeight="600">Product Catalog</text>
                      <text x="400" y="265" textAnchor="middle" fontSize="11" fill="hsl(var(--muted-foreground))">Browse & Search</text>
                    </g>

                    {/* AI Recommendations - In Progress */}
                    <g>
                      <line x1="480" y1="250" x2="600" y2="250" stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray="4 2" markerEnd="url(#arrowhead)" />
                      <rect x="600" y="220" width="160" height="60" rx="8" fill="hsl(var(--amber-500))" fillOpacity="0.2" stroke="hsl(38 92% 50%)" strokeWidth="2" strokeDasharray="4 2" />
                      <circle cx="620" cy="240" r="4" fill="hsl(38 92% 50%)" />
                      <text x="680" y="245" textAnchor="middle" fontSize="14" fontWeight="600">AI Engine</text>
                      <text x="680" y="265" textAnchor="middle" fontSize="11" fill="hsl(var(--muted-foreground))">Recommendations</text>
                    </g>

                    {/* Shopping Cart - Implemented */}
                    <g>
                      <line x1="400" y1="280" x2="400" y2="320" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#arrowhead)" />
                      <rect x="320" y="320" width="160" height="60" rx="8" fill="hsl(var(--emerald-500))" fillOpacity="0.2" stroke="hsl(142 76% 36%)" strokeWidth="2" />
                      <circle cx="340" cy="340" r="4" fill="hsl(142 76% 36%)" />
                      <text x="400" y="345" textAnchor="middle" fontSize="14" fontWeight="600">Shopping Cart</text>
                      <text x="400" y="365" textAnchor="middle" fontSize="11" fill="hsl(var(--muted-foreground))">Add/Remove Items</text>
                    </g>

                    {/* Checkout Process - Implemented */}
                    <g>
                      <line x1="400" y1="380" x2="400" y2="420" stroke="hsl(var(--primary))" strokeWidth="2" markerEnd="url(#arrowhead)" />
                      <rect x="320" y="420" width="160" height="60" rx="8" fill="hsl(var(--emerald-500))" fillOpacity="0.2" stroke="hsl(142 76% 36%)" strokeWidth="2" />
                      <circle cx="340" cy="440" r="4" fill="hsl(142 76% 36%)" />
                      <text x="400" y="445" textAnchor="middle" fontSize="14" fontWeight="600">Checkout</text>
                      <text x="400" y="465" textAnchor="middle" fontSize="11" fill="hsl(var(--muted-foreground))">Payment & Shipping</text>
                    </g>

                    {/* Payment Gateway - In Progress */}
                    <g>
                      <line x1="480" y1="450" x2="600" y2="450" stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray="4 2" markerEnd="url(#arrowhead)" />
                      <rect x="600" y="420" width="160" height="60" rx="8" fill="hsl(var(--amber-500))" fillOpacity="0.2" stroke="hsl(38 92% 50%)" strokeWidth="2" strokeDasharray="4 2" />
                      <circle cx="620" cy="440" r="4" fill="hsl(38 92% 50%)" />
                      <text x="680" y="445" textAnchor="middle" fontSize="14" fontWeight="600">Payment API</text>
                      <text x="680" y="465" textAnchor="middle" fontSize="11" fill="hsl(var(--muted-foreground))">Stripe Integration</text>
                    </g>

                    {/* Order Management - In Progress */}
                    <g>
                      <line x1="400" y1="480" x2="400" y2="520" stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray="4 2" markerEnd="url(#arrowhead)" />
                      <rect x="320" y="520" width="160" height="60" rx="8" fill="hsl(var(--amber-500))" fillOpacity="0.2" stroke="hsl(38 92% 50%)" strokeWidth="2" strokeDasharray="4 2" />
                      <circle cx="340" cy="540" r="4" fill="hsl(38 92% 50%)" />
                      <text x="400" y="545" textAnchor="middle" fontSize="14" fontWeight="600">Order System</text>
                      <text x="400" y="565" textAnchor="middle" fontSize="11" fill="hsl(var(--muted-foreground))">Tracking & Updates</text>
                    </g>

                    {/* Vendor Notification - Pending */}
                    <g>
                      <line x1="320" y1="550" x2="200" y2="550" stroke="hsl(var(--muted-foreground))" strokeWidth="2" strokeDasharray="4 2" opacity="0.4" />
                      <rect x="40" y="520" width="160" height="60" rx="8" fill="hsl(var(--muted))" fillOpacity="0.3" stroke="hsl(var(--border))" strokeWidth="2" strokeDasharray="4 2" />
                      <circle cx="60" cy="540" r="4" fill="hsl(var(--muted-foreground))" />
                      <text x="120" y="545" textAnchor="middle" fontSize="14" fontWeight="600" fill="hsl(var(--muted-foreground))">Vendor Portal</text>
                      <text x="120" y="565" textAnchor="middle" fontSize="11" fill="hsl(var(--muted-foreground))">Notifications</text>
                    </g>

                    {/* Completion */}
                    <g>
                      <line x1="400" y1="580" x2="400" y2="620" stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray="4 2" />
                      <circle cx="400" cy="650" r="30" fill="hsl(142 76% 36%)" fillOpacity="0.2" stroke="hsl(142 76% 36%)" strokeWidth="2" />
                      <text x="400" y="655" textAnchor="middle" fill="hsl(142 76% 36%)" fontSize="12" fontWeight="bold">END</text>
                    </g>

                    {/* Arrow marker definition */}
                    <defs>
                      <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                        <polygon points="0 0, 10 3, 0 6" fill="hsl(var(--primary))" />
                      </marker>
                    </defs>
                  </svg>
                </div>

                {/* Legend */}
                <div className="mt-6 flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="size-4 bg-emerald-500/20 border-2 border-emerald-500 rounded" />
                    <span className="text-muted-foreground">Implemented</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="size-4 bg-amber-500/20 border-2 border-amber-500 border-dashed rounded" />
                    <span className="text-muted-foreground">In Progress</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="size-4 bg-muted border-2 border-border border-dashed rounded" />
                    <span className="text-muted-foreground">Pending</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Module Status */}
            <Card>
              <CardHeader>
                <CardTitle>Module Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { name: "User Authentication", status: "completed", icon: User },
                  { name: "Product Catalog", status: "completed", icon: Package },
                  { name: "Shopping Cart", status: "completed", icon: ShoppingCart },
                  { name: "Checkout Flow", status: "completed", icon: CreditCard },
                  { name: "AI Recommendations", status: "in-progress", icon: Star },
                  { name: "Payment Gateway", status: "in-progress", icon: CreditCard },
                  { name: "Order Management", status: "in-progress", icon: Package },
                ].map((module, i) => (
                  <div key={i} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      {module.status === "completed" ? (
                        <CheckCircle2 className="size-4 text-emerald-500" />
                      ) : (
                        <Circle className="size-4 text-amber-500" />
                      )}
                      <span className="text-sm font-medium">{module.name}</span>
                    </div>
                    <module.icon className="size-4 text-muted-foreground" />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Dependencies */}
            <Card>
              <CardHeader>
                <CardTitle>Critical Dependencies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-muted/50 rounded-lg space-y-2">
                  <div className="flex items-center gap-2">
                    <ArrowRight className="size-4 text-primary" />
                    <span className="text-sm font-medium">Checkout → Payment</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Payment gateway must be completed before checkout can go live
                  </p>
                </div>
                <div className="p-3 bg-muted/50 rounded-lg space-y-2">
                  <div className="flex items-center gap-2">
                    <ArrowRight className="size-4 text-primary" />
                    <span className="text-sm font-medium">Catalog → AI Engine</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    AI recommendations depend on product catalog data structure
                  </p>
                </div>
                <div className="p-3 bg-muted/50 rounded-lg space-y-2">
                  <div className="flex items-center gap-2">
                    <ArrowRight className="size-4 text-primary" />
                    <span className="text-sm font-medium">Payment → Order System</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Order management needs payment confirmation webhooks
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" variant="outline">
                  <Maximize2 className="size-4 mr-2" />
                  View Full Diagram
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Download className="size-4 mr-2" />
                  Export as PNG
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <RefreshCw className="size-4 mr-2" />
                  Regenerate Flow
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
