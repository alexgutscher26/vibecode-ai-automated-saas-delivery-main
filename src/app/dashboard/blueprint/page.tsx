"use client";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/app-sidebar";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Target, 
  Sparkles, 
  DollarSign, 
  Users, 
  BarChart3,
  AlertCircle,
  CheckCircle2,
  FileText,
  Download
} from "lucide-react";

/**
 * Renders the BlueprintPage component, displaying a dashboard with strategic analysis and market validation.
 */
export default function BlueprintPage() {
  return (
    <SidebarProvider>
      <div className="relative flex h-screen w-full">
        <DashboardSidebar />
        <SidebarInset className="flex flex-col">
          <main className="mx-auto max-w-[1600px] px-6 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-bold">AI-Generated Blueprint</h1>
              <p className="text-muted-foreground mt-2">
                Strategic analysis and market validation for E-Commerce Platform
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="sm">
                <Download className="size-4 mr-2" />
                Export PDF
              </Button>
              <Button size="sm">
                <Sparkles className="size-4 mr-2" />
                Regenerate
              </Button>
            </div>
          </div>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Market Validation</span>
                <TrendingUp className="size-4 text-emerald-500" />
              </div>
              <div className="flex items-end gap-2">
                <span className="text-3xl font-bold">8.7</span>
                <span className="text-muted-foreground mb-1">/10</span>
              </div>
              <Badge variant="outline" className="mt-2 bg-emerald-500/10 text-emerald-600 border-emerald-500/20">
                High Demand
              </Badge>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Feasibility Rating</span>
                <Target className="size-4 text-blue-500" />
              </div>
              <div className="flex items-end gap-2">
                <span className="text-3xl font-bold">High</span>
              </div>
              <Badge variant="outline" className="mt-2 bg-blue-500/10 text-blue-600 border-blue-500/20">
                Achievable
              </Badge>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Core Features</span>
                <FileText className="size-4 text-purple-500" />
              </div>
              <div className="flex items-end gap-2">
                <span className="text-3xl font-bold">24</span>
                <span className="text-muted-foreground mb-1">features</span>
              </div>
              <Badge variant="outline" className="mt-2 bg-purple-500/10 text-purple-600 border-purple-500/20">
                Well Scoped
              </Badge>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Revenue Model</span>
                <DollarSign className="size-4 text-amber-500" />
              </div>
              <div className="flex items-end gap-2">
                <span className="text-2xl font-bold">Freemium</span>
              </div>
              <Badge variant="outline" className="mt-2 bg-amber-500/10 text-amber-600 border-amber-500/20">
                Recommended
              </Badge>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Left Column - 2 cols */}
          <div className="lg:col-span-2 space-y-6">
            {/* Market Analysis */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="size-5 text-primary" />
                  Market Analysis
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Target Market</h4>
                  <p className="text-sm text-muted-foreground">
                    Small to medium-sized businesses looking to establish online marketplaces. 
                    Primary focus on niche product categories with 100-1000 vendors.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Market Size</h4>
                  <div className="grid grid-cols-3 gap-4 mt-3">
                    <div className="p-3 bg-muted rounded-lg">
                      <div className="text-2xl font-bold">$127B</div>
                      <div className="text-xs text-muted-foreground mt-1">Total Addressable</div>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <div className="text-2xl font-bold">$18B</div>
                      <div className="text-xs text-muted-foreground mt-1">Serviceable</div>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <div className="text-2xl font-bold">$2.4B</div>
                      <div className="text-xs text-muted-foreground mt-1">Obtainable</div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Competition Analysis</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <span className="text-sm">Shopify</span>
                      <Badge>Major Competitor</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <span className="text-sm">WooCommerce</span>
                      <Badge variant="outline">Indirect</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <span className="text-sm">Sharetribe</span>
                      <Badge variant="outline">Niche Player</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Core Features */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="size-5 text-primary" />
                  Core Feature Set
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  {[
                    { name: "Multi-vendor Management", priority: "P0", complexity: "High" },
                    { name: "AI Product Recommendations", priority: "P0", complexity: "Medium" },
                    { name: "Real-time Inventory Sync", priority: "P0", complexity: "High" },
                    { name: "Vendor Dashboard & Analytics", priority: "P1", complexity: "Medium" },
                    { name: "Payment Gateway Integration", priority: "P0", complexity: "Medium" },
                    { name: "Order Management System", priority: "P0", complexity: "High" },
                    { name: "Customer Reviews & Ratings", priority: "P1", complexity: "Low" },
                    { name: "Advanced Search & Filters", priority: "P1", complexity: "Medium" },
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="size-4 text-emerald-500" />
                        <span className="text-sm font-medium">{feature.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={feature.priority === "P0" ? "default" : "secondary"} className="text-xs">
                          {feature.priority}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {feature.complexity}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Technical Architecture */}
            <Card>
              <CardHeader>
                <CardTitle>Recommended Tech Stack</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Frontend</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge>Next.js 15</Badge>
                      <Badge>React 19</Badge>
                      <Badge>TypeScript</Badge>
                      <Badge>Tailwind CSS</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Backend</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge>Node.js</Badge>
                      <Badge>PostgreSQL</Badge>
                      <Badge>Prisma</Badge>
                      <Badge>Redis</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Infrastructure</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge>Vercel</Badge>
                      <Badge>Supabase</Badge>
                      <Badge>AWS S3</Badge>
                      <Badge>Stripe</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Pricing Strategy */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="size-5 text-primary" />
                  Pricing Strategy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 border-2 border-primary rounded-lg bg-primary/5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold">Free Tier</span>
                    <Badge>Recommended</Badge>
                  </div>
                  <div className="text-2xl font-bold mb-2">$0</div>
                  <ul className="text-sm space-y-1.5 text-muted-foreground">
                    <li>• Up to 5 vendors</li>
                    <li>• 50 products</li>
                    <li>• Basic analytics</li>
                    <li>• Community support</li>
                  </ul>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold">Pro</span>
                  </div>
                  <div className="text-2xl font-bold mb-2">$49<span className="text-sm text-muted-foreground">/mo</span></div>
                  <ul className="text-sm space-y-1.5 text-muted-foreground">
                    <li>• Unlimited vendors</li>
                    <li>• Unlimited products</li>
                    <li>• AI recommendations</li>
                    <li>• Priority support</li>
                  </ul>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold">Enterprise</span>
                  </div>
                  <div className="text-2xl font-bold mb-2">Custom</div>
                  <ul className="text-sm space-y-1.5 text-muted-foreground">
                    <li>• White-label</li>
                    <li>• Custom integrations</li>
                    <li>• Dedicated account manager</li>
                    <li>• SLA guarantees</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Improvement Recommendations */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="size-5 text-primary" />
                  Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-lg">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="size-4 text-amber-600 mt-0.5 flex-shrink-0" />
                    <div className="text-sm">
                      <span className="font-semibold text-amber-600">Scalability Risk</span>
                      <p className="text-muted-foreground mt-1">
                        Consider implementing database sharding early for multi-vendor data isolation
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                  <div className="flex items-start gap-2">
                    <Users className="size-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div className="text-sm">
                      <span className="font-semibold text-blue-600">User Acquisition</span>
                      <p className="text-muted-foreground mt-1">
                        Partner with existing vendor communities for faster marketplace growth
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <div className="text-sm">
                      <span className="font-semibold text-emerald-600">Revenue Opportunity</span>
                      <p className="text-muted-foreground mt-1">
                        Add transaction fee model (2-5%) to supplement subscription revenue
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                  <div className="flex items-start gap-2">
                    <Sparkles className="size-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <div className="text-sm">
                      <span className="font-semibold text-purple-600">Differentiation</span>
                      <p className="text-muted-foreground mt-1">
                        Focus on AI-powered vendor matching to connect buyers with best sellers
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Timeline Estimate */}
            <Card>
              <CardHeader>
                <CardTitle>Development Timeline</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">MVP (Phase 1)</span>
                  <span className="text-sm font-semibold">8-10 weeks</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Beta Launch (Phase 2)</span>
                  <span className="text-sm font-semibold">14-16 weeks</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Full Launch (Phase 3)</span>
                  <span className="text-sm font-semibold">20-24 weeks</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
