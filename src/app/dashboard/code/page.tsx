"use client";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/app-sidebar";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ExternalLink, 
  Code2,
  FileCode,
  GitBranch,
  Terminal,
  Folder,
  File,
  Zap
} from "lucide-react";

const recentFiles = [
  { name: "ProductSearch.tsx", path: "src/components/search", modified: "2 hours ago", author: "Agent-Alpha" },
  { name: "checkout-api.ts", path: "src/app/api/checkout", modified: "3 hours ago", author: "Agent-Beta" },
  { name: "schema.prisma", path: "prisma", modified: "1 day ago", author: "Agent-Alpha" },
  { name: "cart-utils.ts", path: "src/lib/utils", modified: "1 day ago", author: "Sarah Chen" },
  { name: "VendorDashboard.tsx", path: "src/app/vendor", modified: "2 days ago", author: "Agent-Gamma" },
];

const activeWorkspaces = [
  {
    name: "Feature: Payment Gateway",
    branch: "feature/payment-gateway",
    files: 12,
    agent: "Agent-Alpha",
    status: "active",
  },
  {
    name: "Feature: Vendor Analytics",
    branch: "feature/vendor-analytics",
    files: 8,
    agent: "Agent-Gamma",
    status: "active",
  },
  {
    name: "Fix: Cart Optimization",
    branch: "fix/cart-performance",
    files: 3,
    agent: "Sarah Chen",
    status: "idle",
  },
];

const codeSnippets = [
  {
    title: "Recent Agent Code: ProductSearch Component",
    language: "tsx",
    author: "Agent-Alpha",
    code: `export const ProductSearch = ({ onSearch }: Props) => {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState<Filters>({});
  
  const handleSearch = useCallback(async () => {
    const results = await searchProducts(query, filters);
    onSearch(results);
  }, [query, filters]);
  
  return (
    <div className="search-container">
      <Input value={query} onChange={(e) => setQuery(e.target.value)} />
      <FilterPanel filters={filters} onChange={setFilters} />
    </div>
  );
};`,
  },
];

/**
 * Renders the Code Workspace page with integration features for Cursor IDE.
 */
export default function CodeWorkspacePage() {
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
              <h1 className="text-3xl font-bold">Code Workspace</h1>
              <p className="text-muted-foreground mt-2">
                Direct integration with Cursor IDE for seamless development
              </p>
            </div>
            <Button size="sm" className="bg-gradient-to-r from-primary to-purple-500">
              <ExternalLink className="size-4 mr-2" />
              Open in Cursor
            </Button>
          </div>
        </div>

        {/* Integration Notice */}
        <Card className="mb-8 border-primary/20 bg-gradient-to-r from-primary/5 to-purple-500/5">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="size-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Code2 className="size-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-2">Cursor IDE Integration</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Your VibeCode AI project is synchronized with Cursor IDE. Open files directly from the dashboard, 
                  track agent code changes in real-time, and leverage MCP for seamless automation.
                </p>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm">
                    <Terminal className="size-4 mr-2" />
                    Launch Terminal
                  </Button>
                  <Button variant="outline" size="sm">
                    <GitBranch className="size-4 mr-2" />
                    Switch Branch
                  </Button>
                  <Button variant="outline" size="sm">
                    <FileCode className="size-4 mr-2" />
                    View Recent Changes
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Active Workspaces */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Folder className="size-5 text-primary" />
                  Active Workspaces
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {activeWorkspaces.map((workspace, i) => (
                  <div key={i} className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold mb-1">{workspace.name}</h4>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <GitBranch className="size-3" />
                            {workspace.branch}
                          </span>
                          <span>{workspace.files} files</span>
                          <span>by {workspace.agent}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {workspace.status === "active" && (
                          <Badge variant="outline" className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20">
                            Active
                          </Badge>
                        )}
                        <Button variant="outline" size="sm">
                          <ExternalLink className="size-4 mr-2" />
                          Open
                        </Button>
                      </div>
                    </div>
                    {workspace.status === "active" && (
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Zap className="size-3 text-primary" />
                        <span>Agent currently editing files...</span>
                      </div>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recent Code Changes */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code2 className="size-5 text-primary" />
                  Recent Code Changes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {recentFiles.map((file, i) => (
                    <div key={i} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                      <div className="flex items-center gap-3">
                        <File className="size-4 text-primary" />
                        <div>
                          <div className="text-sm font-medium">{file.name}</div>
                          <div className="text-xs text-muted-foreground">{file.path}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-xs text-muted-foreground">
                          {file.author} • {file.modified}
                        </div>
                        <Button variant="ghost" size="sm">
                          <ExternalLink className="size-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Code Preview */}
            <Card>
              <CardHeader>
                <CardTitle>Latest Agent-Generated Code</CardTitle>
              </CardHeader>
              <CardContent>
                {codeSnippets.map((snippet, i) => (
                  <div key={i} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-semibold">{snippet.title}</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          Generated by {snippet.author}
                        </p>
                      </div>
                      <Badge>{snippet.language}</Badge>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4 font-mono text-xs overflow-x-auto">
                      <pre className="text-foreground">
                        <code>{snippet.code}</code>
                      </pre>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      <ExternalLink className="size-4 mr-2" />
                      View Full File in Cursor
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Project Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Project Statistics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-muted-foreground">Total Files</span>
                    <span className="text-2xl font-bold">247</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-muted-foreground">Lines of Code</span>
                    <span className="text-2xl font-bold">15.2K</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-muted-foreground">Components</span>
                    <span className="text-2xl font-bold">84</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-muted-foreground">API Routes</span>
                    <span className="text-2xl font-bold">23</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Technology Stack */}
            <Card>
              <CardHeader>
                <CardTitle>Tech Stack</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="text-sm font-semibold mb-2">Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Next.js 15</Badge>
                    <Badge variant="outline">React 19</Badge>
                    <Badge variant="outline">TypeScript</Badge>
                    <Badge variant="outline">Tailwind</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-2">Backend</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Node.js</Badge>
                    <Badge variant="outline">PostgreSQL</Badge>
                    <Badge variant="outline">Prisma</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-2">Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Cursor</Badge>
                    <Badge variant="outline">MCP</Badge>
                    <Badge variant="outline">Git</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <ExternalLink className="size-4 mr-2" />
                  Open Project in Cursor
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Terminal className="size-4 mr-2" />
                  Launch Dev Server
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <FileCode className="size-4 mr-2" />
                  View Git History
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <GitBranch className="size-4 mr-2" />
                  Create New Branch
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
