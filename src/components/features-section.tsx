"use client";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import {
  ArrowUp,
  Globe,
  Play,
  Plus,
  Signature,
  Sparkles,
  GitFork,
  Eye,
  Star,
  Brain,
  Workflow,
  Zap,
  Database,
  Shield,
  Plug,
  Target,
  TrendingUp,
  Users,
  Layers,
  CheckCircle2,
  Code2,
  BarChart3,
  Boxes,
  Bot,
} from "lucide-react";

export default function FeaturesSection() {
  return (
    <section id="features">
      <div className="py-24">
        <div className="mx-auto w-full max-w-3xl px-6">
          <motion.h2
            initial={{ opacity: 0, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-foreground text-balance text-3xl font-semibold md:text-4xl"
          >
            <span className="text-muted-foreground">
              Unlock a Fully Automated Product Delivery Lifecycle
            </span>{" "}
            Core Value Ecosystem
          </motion.h2>
          <div className="mt-12 grid gap-12 sm:grid-cols-2">
            {/* Feature 1 */}
            <div className="col-span-full space-y-4">
              <Card className="overflow-hidden px-6 sm:col-span-2">
                <motion.div
                  initial={{ opacity: 0, filter: "blur(4px)" }}
                  whileInView={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="mask-b-from-75% mx-auto -mt-2 max-w-sm px-2 pt-8"
                >
                  <StrategicBlueprintIllustration />
                </motion.div>
              </Card>
              <div className="max-w-md sm:col-span-3">
                <motion.h3 className="text-foreground text-lg font-semibold">
                  Strategic SaaS Blueprinting Engine
                </motion.h3>
                <motion.p className="text-muted-foreground mt-3 text-balance">
                  Transform any idea into a comprehensive strategic dossier with
                  market analysis, competitive benchmarking, and technical
                  requirements automatically generated.
                </motion.p>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="grid grid-rows-[1fr_auto] space-y-4">
              <Card className="p-6">
                <motion.div
                  initial={{ opacity: 0, filter: "blur(4px)" }}
                  whileInView={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <AutomatedBacklogIllustration />
                </motion.div>
              </Card>
              <div>
                <h3 className="text-foreground text-lg font-semibold">
                  Automated Kanban Backlog Generation
                </h3>
                <p className="text-muted-foreground mt-3 text-balance">
                  Features become structured tickets with complexity scoring and
                  sprint grouping instantly.
                </p>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="grid grid-rows-[1fr_auto] space-y-4">
              <Card className="overflow-hidden p-6">
                <motion.div
                  initial={{ opacity: 0, filter: "blur(4px)" }}
                  whileInView={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <AutonomousAgentsIllustration />
                </motion.div>
              </Card>
              <div>
                <h3 className="text-foreground text-lg font-semibold">
                  Autonomous Engineering Agents
                </h3>
                <p className="text-muted-foreground mt-3 text-balance">
                  Multi-agent coordination executes tasks, writes code, and
                  ships features autonomously.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const StrategicBlueprintIllustration = () => {
  return (
    <Card
      aria-hidden
      className="p-4 transition-transform duration-200 group-hover:translate-y-0"
    >
      {/* Blueprint Header */}
      <div className="mb-4 flex items-center gap-3">
        <div className="bg-foreground/5 flex size-8 items-center justify-center rounded-lg border">
          <Layers className="size-4 text-foreground/60" />
        </div>
        <div>
          <div className="text-sm font-medium">Strategic Blueprint</div>
          <div className="text-muted-foreground text-xs">6 Validation Pillars</div>
        </div>
      </div>

      {/* Validation Pillars */}
      <div className="mb-4 flex gap-4 text-muted-foreground">
        <div className="flex items-center gap-1">
          <Target className="size-3" />
          <span className="text-xs">Market</span>
        </div>
        <div className="flex items-center gap-1">
          <TrendingUp className="size-3" />
          <span className="text-xs">Competitive</span>
        </div>
        <div className="flex items-center gap-1">
          <Users className="size-3" />
          <span className="text-xs">GTM</span>
        </div>
      </div>

      {/* Blueprint Sections */}
      <div className="bg-foreground/5 rounded-lg p-3 space-y-2 border">
        <div className="text-muted-foreground text-xs font-medium mb-2">
          Generated Insights
        </div>
        <div className="space-y-1.5 text-xs">
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="bg-foreground/20 size-1.5 rounded-full"></div>
            <span>Market Attractiveness</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="bg-foreground/20 size-1.5 rounded-full"></div>
            <span>Monetization Strategy</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="bg-foreground/20 size-1.5 rounded-full"></div>
            <span>Technical Feasibility</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="bg-foreground/20 size-1.5 rounded-full"></div>
            <span>Core Features & Pricing</span>
          </div>
        </div>
      </div>

      {/* Status Badge */}
      <div className="mt-3 flex justify-center">
        <div className="bg-foreground/10 text-foreground/80 px-2 py-1 rounded-full text-xs font-medium border">
          Auto-Generated
        </div>
      </div>
    </Card>
  );
};

const AutomatedBacklogIllustration = () => {
  return (
    <Card aria-hidden className="p-4">
      {/* Kanban Icon */}
      <div className="mb-4 flex justify-center">
        <div className="bg-foreground/10 flex size-10 items-center justify-center rounded-full border">
          <Boxes className="size-5 text-foreground/60" />
        </div>
      </div>

      {/* Backlog Status */}
      <div className="mb-4 text-center">
        <div className="text-sm font-medium">Automated Backlog</div>
        <div className="text-muted-foreground text-xs flex items-center justify-center gap-1 mt-1">
          <div className="bg-foreground/40 size-1.5 rounded-full"></div>
          Tickets Generated
        </div>
      </div>

      {/* Ticket Categories */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="bg-foreground/5 flex size-6 items-center justify-center rounded-lg border">
            <CheckCircle2 className="size-3 text-foreground/60" />
          </div>
          <div className="flex-1">
            <div className="text-xs font-medium text-foreground/80">
              Complexity Scoring
            </div>
            <div className="bg-foreground/10 h-1 rounded-full mt-1">
              <div className="bg-foreground/40 h-full w-full rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-foreground/5 flex size-6 items-center justify-center rounded-lg border">
            <Workflow className="size-3 text-foreground/60" />
          </div>
          <div className="flex-1">
            <div className="text-xs font-medium text-foreground/80">
              Sprint Grouping
            </div>
            <div className="bg-foreground/10 h-1 rounded-full mt-1">
              <div className="bg-foreground/40 h-full w-3/4 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-foreground/5 flex size-6 items-center justify-center rounded-lg border">
            <BarChart3 className="size-3 text-foreground/60" />
          </div>
          <div className="flex-1">
            <div className="text-xs font-medium text-foreground/80">
              Delivery Tracking
            </div>
            <div className="bg-foreground/10 h-1 rounded-full mt-1">
              <div className="bg-foreground/40 h-full w-1/2 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Integration Indicator */}
      <div className="mt-4 text-center">
        <div className="text-muted-foreground text-xs">
          Deploy to Linear, Jira or Trello
        </div>
      </div>
    </Card>
  );
};

const AutonomousAgentsIllustration = () => {
  return (
    <div aria-hidden className="relative">
      {/* Main Agent Hub */}
      <Card className="p-4">
        <div className="mb-3 flex items-center justify-center">
          <div className="bg-foreground/10 flex size-8 items-center justify-center rounded-full border">
            <Bot className="size-4 text-foreground/60" />
          </div>
        </div>

        <div className="text-center mb-4">
          <div className="text-sm font-medium">MCP + Cursor Integration</div>
          <div className="text-muted-foreground text-xs">Full Autonomy</div>
        </div>

        {/* Agent Capabilities */}
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-foreground/5 rounded-lg p-2 text-center border">
            <Code2 className="size-3 mx-auto mb-1 text-foreground/60" />
            <div className="text-xs font-medium text-muted-foreground">
              Write Code
            </div>
          </div>
          <div className="bg-foreground/5 rounded-lg p-2 text-center border">
            <GitFork className="size-3 mx-auto mb-1 text-foreground/60" />
            <div className="text-xs font-medium text-muted-foreground">
              Push Updates
            </div>
          </div>
          <div className="bg-foreground/5 rounded-lg p-2 text-center border">
            <CheckCircle2 className="size-3 mx-auto mb-1 text-foreground/60" />
            <div className="text-xs font-medium text-muted-foreground">
              Close Tickets
            </div>
          </div>
          <div className="bg-foreground/5 rounded-lg p-2 text-center border">
            <Zap className="size-3 mx-auto mb-1 text-foreground/60" />
            <div className="text-xs font-medium text-muted-foreground">
              Ship Features
            </div>
          </div>
        </div>
      </Card>

      {/* Connection Lines */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="bg-foreground/10 h-px w-full"></div>
      </div>
    </div>
  );
};