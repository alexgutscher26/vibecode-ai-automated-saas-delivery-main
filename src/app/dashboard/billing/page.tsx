"use client";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/app-sidebar";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  CreditCard, 
  Download,
  Receipt,
  TrendingUp,
  Calendar,
  DollarSign,
  Zap,
  CheckCircle2
} from "lucide-react";

const currentPlan = {
  name: "Pro Plan",
  price: 99,
  billingCycle: "monthly",
  nextBilling: "Feb 15, 2024",
  features: [
    "Unlimited projects",
    "4 AI agents",
    "Advanced analytics",
    "Priority support",
    "Custom integrations",
  ],
};

const invoices = [
  { id: "INV-2024-001", date: "Jan 15, 2024", amount: 99, status: "paid" },
  { id: "INV-2023-012", date: "Dec 15, 2023", amount: 99, status: "paid" },
  { id: "INV-2023-011", date: "Nov 15, 2023", amount: 99, status: "paid" },
  { id: "INV-2023-010", date: "Oct 15, 2023", amount: 99, status: "paid" },
];

const plans = [
  {
    name: "Starter",
    price: 29,
    features: ["3 projects", "1 AI agent", "Basic analytics", "Email support"],
  },
  {
    name: "Pro",
    price: 99,
    features: ["Unlimited projects", "4 AI agents", "Advanced analytics", "Priority support"],
    current: true,
  },
  {
    name: "Enterprise",
    price: 299,
    features: ["Unlimited everything", "Unlimited agents", "Custom analytics", "Dedicated support"],
  },
];

export default function BillingPage() {
  return (
    <SidebarProvider>
      <div className="relative flex h-screen w-full">
        <DashboardSidebar />
        <SidebarInset className="flex flex-col">
          <main className="mx-auto max-w-[1600px] px-6 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Billing & Subscription</h1>
          <p className="text-muted-foreground mt-2">
            Manage your subscription and billing information
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Current Plan */}
            <Card className="border-primary/20">
              <CardHeader className="border-b bg-gradient-to-r from-primary/5 to-purple-500/5">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="size-5 text-primary" />
                      {currentPlan.name}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground mt-2">
                      Your current subscription plan
                    </p>
                  </div>
                  <Badge className="bg-gradient-to-r from-primary to-purple-500">
                    Active
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold">${currentPlan.price}</span>
                  <span className="text-muted-foreground">/{currentPlan.billingCycle}</span>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">Plan Features</h4>
                  {currentPlan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="size-4 text-emerald-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-muted-foreground">Next billing date</div>
                      <div className="font-semibold mt-1">{currentPlan.nextBilling}</div>
                    </div>
                    <Calendar className="size-5 text-muted-foreground" />
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1">
                    Change Plan
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Cancel Subscription
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="size-5 text-primary" />
                  Payment Method
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="size-12 bg-primary/10 rounded flex items-center justify-center">
                      <CreditCard className="size-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">•••• •••• •••• 4242</div>
                      <div className="text-sm text-muted-foreground">Expires 12/25</div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Update
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Available Plans */}
            <Card>
              <CardHeader>
                <CardTitle>Available Plans</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-3">
                  {plans.map((plan, i) => (
                    <div 
                      key={i} 
                      className={`p-4 border rounded-lg ${
                        plan.current ? "border-primary bg-primary/5" : ""
                      }`}
                    >
                      <div className="mb-4">
                        <h3 className="font-semibold">{plan.name}</h3>
                        <div className="flex items-baseline gap-1 mt-2">
                          <span className="text-2xl font-bold">${plan.price}</span>
                          <span className="text-sm text-muted-foreground">/mo</span>
                        </div>
                      </div>
                      <div className="space-y-2 mb-4">
                        {plan.features.map((feature, j) => (
                          <div key={j} className="text-sm text-muted-foreground">
                            • {feature}
                          </div>
                        ))}
                      </div>
                      {plan.current ? (
                        <Badge className="w-full justify-center">Current Plan</Badge>
                      ) : (
                        <Button variant="outline" size="sm" className="w-full">
                          {plan.price > currentPlan.price ? "Upgrade" : "Downgrade"}
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Billing History */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Receipt className="size-5 text-primary" />
                  Billing History
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {invoices.map((invoice, i) => (
                    <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="size-10 bg-muted rounded flex items-center justify-center">
                          <Receipt className="size-5 text-muted-foreground" />
                        </div>
                        <div>
                          <div className="font-semibold">{invoice.id}</div>
                          <div className="text-sm text-muted-foreground">{invoice.date}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <div className="font-semibold">${invoice.amount}</div>
                          <Badge variant="outline" className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20">
                            Paid
                          </Badge>
                        </div>
                        <Button variant="ghost" size="icon">
                          <Download className="size-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Usage Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="size-5 text-primary" />
                  Usage This Month
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Projects</span>
                    <span className="font-semibold">12 / Unlimited</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[30%]" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">AI Agents</span>
                    <span className="font-semibold">3 / 4</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-purple-500 w-[75%]" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">API Calls</span>
                    <span className="font-semibold">8.4K / 25K</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 w-[34%]" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Storage</span>
                    <span className="font-semibold">2.1GB / 10GB</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-amber-500 w-[21%]" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Spending Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="size-5 text-primary" />
                  Spending Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-sm text-muted-foreground mb-1">Total Spent</div>
                  <div className="text-3xl font-bold">$396</div>
                  <div className="text-xs text-muted-foreground mt-1">Last 4 months</div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Current period</span>
                    <span className="font-semibold">$99.00</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Last period</span>
                    <span className="font-semibold">$99.00</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Average</span>
                    <span className="font-semibold">$99.00</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Support */}
            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Have questions about billing or your subscription?
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Contact Support
                </Button>
                <Button variant="outline" size="sm" className="w-full">
                  View Documentation
                </Button>
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
