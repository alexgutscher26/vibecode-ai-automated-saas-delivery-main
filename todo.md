# VibeCode MVP Delivery Roadmap & Tasks

## Status Legend

- [x] Completed
- [ ] Planned/Pending

## Immediate Priorities

- [ ] Create canonical SaaS idea intake form (Phase 1)
- [ ] Implement form validation and persist intake to Supabase (Phase 1)
- [ ] Replace mock dashboard data with dynamic models (Phase 5)
- [ ] Build blueprint prompt engine v0.1 (Phase 2)
- [ ] Set up API routes for data processing (Backend/Data Layer)
- [ ] Introduce Zustand for shared client state (Data Layer)

## 🎯 Phase 1: Opportunity Intake & Requirement Consolidation

**Objective**: Align on core value proposition and minimal interaction model for market validation

### Deliverables

- [x] UI mock implementation: dashboard prototypes exist
- [ ] Canonical SaaS idea intake form
- [ ] Validation pillar definitions
- [ ] Initial blueprint prompt engine (v0.1)
- [ ] Success criteria matrix (activation, blueprint quality, ticket accuracy)

### Technical

- [x] Dashboard layout: grid with mock components (`src/app/dashboard/page.tsx`)
- [x] UI primitives: reusable components (`src/components/ui/`)
- [x] Mock dashboard widgets (stats, blueprint, velocity)
- [ ] Replace static mock data with Supabase-backed models
- [ ] Intake form validation + persistence to Supabase
- [ ] Validation scoring algorithms
- [ ] Prompt template system for blueprint generation

## 🏗️ Phase 2: Blueprint Engine (MVP Scope)

**Objective**: Transform idea description into structured SaaS Blueprint v1

### Components

- [ ] Market validation pillar: lightweight scoring
- [ ] Feature extraction engine: parse and categorize features
- [ ] Technical stack recommendation: stub
- [ ] Pricing model generator: tiered baseline
- [ ] Summarized improvement insights

### Output

- [ ] Generate SaaS Blueprint v1 JSON document
- [ ] Blueprint export (JSON/PDF)
- [x] Existing blueprint UI: mock page (`src/app/dashboard/blueprint/page.tsx`) — enhance

## 🔀 Phase 3: Feature-to-Flow Conversion Engine

**Objective**: Convert extracted features into diagram-friendly graph data

### Components

- [ ] Node + edge generator
- [ ] Linear flow layout (auto-arrange)
- [ ] Exportable JSON model (standardized format)
- [ ] Auto-cleanup (dedupe, flatten loops)

### Technical

- [x] Mock user flow diagram: basic SVG (`src/app/dashboard/user-flow/page.tsx`)
- [ ] Integrate React Flow for visualization
- [ ] Layout algorithms for node positioning
- [ ] Enhance flow diagram rendering components
- [ ] JSON export functionality

## 🎫 Phase 4: Ticketization Layer (Kanban Builder)

**Objective**: Convert blueprint into actionable backlog items

### Components

- [ ] Epic generator
- [ ] Task + subtask templates
- [ ] Metadata assignment (status, complexity, owner)
- [ ] Local kanban integration

### Output

- [ ] Backlog bundle (epics, tasks, subtasks)
- [x] Mock kanban board: static UI (`src/app/dashboard/kanban/page.tsx`)
- [ ] Drag-and-drop functionality
- [ ] Dynamic task management backed by Supabase
- [ ] Task assignment system

## 📊 Phase 5: Progress Tracking (Dashboard v0.1)

**Objective**: Provide operational cockpit for monitoring creation progress

### Modules

- [ ] % completion indicator
- [ ] Feature → node → task counter
- [ ] Latest generated assets
- [ ] Opportunity health score

### Dashboard

- [x] Responsive layout: grid
- [x] Mock components: placeholder data
- [ ] Real-time progress updates via Supabase
- [ ] Dynamic asset gallery view
- [ ] Filtering and search
- [ ] Note: current dashboard is mock/prototype — not final

## 🤖 Phase 6: MCP Broker (Stub Version)

**Objective**: Foundational control plane for future agent automation

### Capabilities

- [ ] Credential onboarding (secure API keys)
- [ ] Connection health checks
- [ ] Dry run execution mode
- [ ] Extensible foundation for post-MVP automation

### Technical

- [ ] Credential management system
- [ ] Health check endpoints
- [ ] Dry run simulation engine
- [ ] Extensible agent architecture

## 🎨 Phase 7: System UX & User Journey

**Objective**: Ensure frictionless workflow traversal

### Flow

- [ ] Enter SaaS idea: intuitive input
- [ ] Receive Blueprint v1: clear presentation
- [ ] Auto-generate user flow diagram: one-click
- [ ] Auto-generate kanban tickets: seamless
- [ ] View dashboard summary: comprehensive overview
- [ ] Connect MCP (optional): future upgrade

### UX

- [x] Design system: Tailwind CSS, Radix UI
- [x] Mock navigation: header and routing exists
- [ ] Dynamic functionality enhancements
- [ ] Progress indicators and loading states
- [ ] Responsive design improvements

## 🛡️ Phase 8: Stability, QA, and Risk Controls

**Objective**: De-risk MVP experience through comprehensive testing

### QA

- [ ] Pipeline testing: idea → blueprint → diagram → tickets
- [ ] Diagram integrity validation
- [ ] Prompt regression testing
- [ ] Load testing: 250–500 blueprints/hour
- [ ] Input sanitization
- [ ] Generation limits

### Infrastructure

- [ ] Automated testing suite
- [ ] Performance monitoring
- [ ] Error handling and logging
- [ ] Rollback mechanisms

## 🚀 Phase 9: Deployment & Telemetry

**Objective**: Establish robust release footprint for real-world usage

### Requirements

- [ ] Observability: logs, errors, pipeline timing metrics
- [ ] Versioned API: stable external integrations
- [ ] Canary release toggle
- [ ] Usage analytics: blueprints, conversion rates

### Setup

- [ ] Configure production environment
- [ ] Monitoring and alerting
- [ ] CI/CD pipeline
- [ ] Deployment documentation

## 🔄 Phase 10: Feedback Loop & Iteration Cycle

**Objective**: Drive iterative product–market validation

### Mechanisms

- [ ] In-app feedback widget
- [ ] Heatmapping: identify drop-off points
- [ ] Weekly quality audits: blueprint quality
- [ ] Conversion metrics: idea → blueprint → ticketing → dashboard

### Analytics

- [ ] User behavior tracking
- [ ] Feedback analysis dashboard
- [ ] A/B testing framework
- [ ] Iteration planning system

## 📋 End-to-End MVP Flow Summary

```
Idea Input → Blueprint Engine → Diagram Engine → Ticket Builder → Dashboard → MCP (stub)
```

## 🏗️ Current Project State

### Existing Components (Mock/Prototype)

- Dashboard layout: grid with mock widgets (`src/app/dashboard/page.tsx`)
- Blueprint UI: static page (`src/app/dashboard/blueprint/page.tsx`)
- User flow diagram: basic SVG mock (`src/app/dashboard/user-flow/page.tsx`)
- Kanban board: static UI (`src/app/dashboard/kanban/page.tsx`)
- UI components: Radix UI + Tailwind (`src/components/ui/`)
- Navigation: dashboard header with routing (`src/components/dashboard/dashboard-header.tsx`)

### Planned Implementation

- Data layer: Supabase integration for persistence
- State management: Zustand for React
- Backend services: API routes for processing
- Real functionality: replace static data with dynamic content
- Enhanced visualization: interactive diagrams

### Technical Stack Status

- Frontend: Next.js 15, React 19, TypeScript, Tailwind CSS — EXISTS
- UI components: Radix UI, Lucide React — EXISTS
- Mock components: static widgets — EXISTS
- Backend: not implemented — PLANNED
- State management: not implemented — PLANNED
- Data layer: not implemented — PLANNED
- Visualization: basic SVG mock — ENHANCEMENT NEEDED

## 📝 Important Notes

- Current dashboard UI is mock/prototype — not final
- Existing components use static/hardcoded data
- Foundation UI and layout are ready for enhancement
- Focus on adding dynamic functionality to existing mock components
- Design system (Tailwind + Radix) is established

## Workspace Diagram Editor TODO

- Create editor route under `/dashboard/workspace/[projectId]/editor`
- Implement canvas UI shell (toolbar, panel, minimap)
- Add node/edge models and state management
- Integrate Mermaid rendering for diagram preview
- Build basic nodes: Start, Task, Decision, End
- Implement drag-and-drop and snap-to-grid
- Add zoom/pan interactions
- Support save/load to local storage
- Wire “Open Editor” from Workspace cards to the editor route
- Add tests for node linking and serialization
