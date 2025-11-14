# VibeCode MVP Delivery Flow - Development Todo

## Status Legend

- [x] Completed
- [ ] Planned/Pending

## Immediate Priorities

- [ ] Create canonical SaaS idea intake form
- [ ] Implement form validation and persist intake to Supabase
- [ ] Replace mock dashboard data with dynamic models
- [ ] Build blueprint prompt engine v0.1
- [ ] Set up API routes for data processing
- [ ] Introduce Zustand for shared client state

## 🎯 Phase 1: Opportunity Intake & Requirement Consolidation

**Objective**: Align on core value proposition and minimal interaction model for market validation

### Key Deliverables

- [x] **UI Mock Implementation**: Dashboard UI components already exist as static prototypes
- [ ] Create Canonical SaaS Idea Intake Form
- [ ] Define Validation Pillar Definitions
- [ ] Build Initial Blueprint Prompt Engine (v0.1)
- [ ] Establish Success Criteria Matrix (activation, blueprint quality, ticket accuracy)

### Technical Implementation

- [x] **Dashboard Layout**: Grid structure with mock components (src/app/dashboard/page.tsx)
- [x] **UI Components**: Reusable UI primitives available (src/components/ui/)
- [x] **Mock Dashboard Widgets**: Static components exist (stats, blueprint, velocity, etc.)
- [ ] Replace static mock data with dynamic models backed by Supabase
- [ ] Implement form validation and persist intake to Supabase
- [ ] Create validation scoring algorithms
- [ ] Build prompt template system for blueprint generation

---

## 🏗️ Phase 2: Blueprint Engine (MVP Scope)

**Objective**: Transform idea description into structured SaaS Blueprint v1

### MVP Components

- [ ] **Market Validation Pillar**: Lightweight scoring system
- [ ] **Feature Extraction Engine**: Parse and categorize features
- [ ] **Technical Stack Recommendation**: Stub implementation
- [ ] **Pricing Model Generator**: Tiered baseline recommendations
- [ ] **Summarized Improvement Insights**: Key improvement suggestions

### Output

- [ ] Generate SaaS Blueprint v1 JSON document
- [ ] Implement blueprint export functionality (JSON/PDF)
- [x] **Existing Blueprint UI**: Mock blueprint page exists (src/app/dashboard/blueprint/page.tsx) - needs enhancement

---

## 🔀 Phase 3: Feature-to-Flow Conversion Engine

**Objective**: Convert extracted features into diagram-friendly graph data

### MVP Inclusions

- [ ] **Node + Edge Generator**: Create graph structure from features
- [ ] **Linear Flow Layout**: Auto-arrange nodes for readability
- [ ] **Exportable JSON Model**: Standardized flow diagram format
- [ ] **Auto-cleanup**: Remove duplicates, flatten loops

### Technical Requirements

- [x] **Mock User Flow Diagram**: Basic SVG flow exists (src/app/dashboard/user-flow/page.tsx)
- [ ] Integrate React Flow for graph visualization
- [ ] Implement layout algorithms for optimal node positioning
- [ ] Enhance existing flow diagram rendering components
- [ ] Build JSON export functionality

---

## 🎫 Phase 4: Ticketization Layer (Kanban Builder)

**Objective**: Convert blueprint into actionable backlog items

### MVP Components

- [ ] **Epic Generator**: Create high-level feature epics
- [ ] **Task + Subtask Templates**: Break down epics into actionable items
- [ ] **Metadata Assignment**: Status, complexity, owner placeholders
- [ ] **Local Kanban Integration**: Basic kanban board implementation

### Output

- [ ] Generate backlog bundle (epics, tasks, subtasks)
- [x] **Mock Kanban Board**: Static kanban UI exists (src/app/dashboard/kanban/page.tsx)
- [ ] Implement drag-and-drop functionality
- [ ] Replace static data with dynamic task management backed by Supabase
- [ ] Build task assignment system

---

## 📊 Phase 5: Progress Tracking (Dashboard v0.1)

**Objective**: Provide operational cockpit for monitoring creation progress

### Core Modules

- [ ] **% Completion Indicator**: Track overall progress
- [ ] **Feature → Node → Task Counter**: Show conversion metrics
- [ ] **Latest Generated Assets**: Display recent blueprints/diagrams
- [ ] **Opportunity Health Score**: Basic project health assessment

### Dashboard Features

- [x] **Responsive Dashboard Layout**: Basic grid layout exists
- [x] **Mock Dashboard Components**: Static widgets with placeholder data
- [ ] Replace static data with real-time progress updates via Supabase
- [ ] Build dynamic asset gallery view
- [ ] Add filtering and search capabilities
- [ ] **IMPORTANT**: Current dashboard is mock/prototype - NOT final design

---

## 🤖 Phase 6: MCP Broker (Stub Version)

**Objective**: Deploy foundational control plane for future agent automation

### MVP Capabilities

- [ ] **Credential Onboarding**: Secure API key management
- [ ] **Connection Health Check**: Monitor external integrations
- [ ] **"Dry Run" Execution Mode**: Test without real actions
- [ ] **Foundation Setup**: Prepare for post-MVP automation

### Technical Implementation

- [ ] Build credential management system
- [ ] Implement health check endpoints
- [ ] Create dry run simulation engine
- [ ] Design extensible agent architecture

---

## 🎨 Phase 7: System UX & User Journey

**Objective**: Ensure frictionless workflow traversal

### User Flow

- [ ] **Enter SaaS Idea**: Intuitive idea input interface
- [ ] **Receive Blueprint v1**: Clear blueprint presentation
- [ ] **Auto-generate User Flow Diagram**: One-click diagram creation
- [ ] **Auto-generate Kanban Tickets**: Seamless ticket generation
- [ ] **View Dashboard Summary**: Comprehensive overview
- [ ] **Connect MCP (Optional)**: Future upgrade path

### UX Requirements

- [x] **Existing Design System**: Tailwind CSS, Radix UI components available
- [x] **Mock Navigation**: Dashboard header and routing exists
- [ ] Enhance existing UI with dynamic functionality
- [ ] Add progress indicators and loading states
- [ ] Create responsive design improvements

---

## 🛡️ Phase 8: Stability, QA, and Risk Controls

**Objective**: De-risk MVP experience through comprehensive testing

### Required QA

- [ ] **Pipeline Testing**: End-to-end idea → blueprint → diagram → tickets
- [ ] **Diagram Integrity Validation**: Ensure diagram accuracy
- [ ] **Prompt Regression Testing**: Maintain prompt quality
- [ ] **Load Testing**: 250-500 blueprints/hour capacity
- [ ] **Input Sanitization**: Guard against malicious inputs
- [ ] **Generation Limits**: Prevent runaway processes

### Testing Infrastructure

- [ ] Set up automated testing suite
- [ ] Implement performance monitoring
- [ ] Create error handling and logging
- [ ] Build rollback mechanisms

---

## 🚀 Phase 9: Deployment & Telemetry

**Objective**: Establish robust release footprint for real-world usage

### MVP Requirements

- [ ] **Observability**: Logs, errors, pipeline timing metrics
- [ ] **Versioned API**: Stable API for external integrations
- [ ] **Canary Release Toggle**: Gradual rollout capability
- [ ] **Usage Analytics**: Track blueprints, conversion rates

### Deployment Setup

- [ ] Configure production environment
- [ ] Set up monitoring and alerting
- [ ] Implement CI/CD pipeline
- [ ] Create deployment documentation

---

## 🔄 Phase 10: Feedback Loop & Iteration Cycle

**Objective**: Drive iterative product-market validation

### Feedback Mechanisms

- [ ] **In-app Feedback Widget**: Collect user input
- [ ] **Heatmapping**: Identify drop-off points
- [ ] **Weekly Quality Audits**: Review blueprint quality
- [ ] **Conversion Metrics**: Track idea → blueprint → ticketing → dashboard

### Analytics Implementation

- [ ] Set up user behavior tracking
- [ ] Create feedback analysis dashboard
- [ ] Implement A/B testing framework
- [ ] Build iteration planning system

---

## 📋 End-to-End MVP Flow Summary

```
Idea Input → Blueprint Engine → Diagram Engine → Ticket Builder → Dashboard → MCP (stub)
```

## 🏗️ Current Project State

### ✅ Existing Components (Mock/Prototype)

- **Dashboard Layout**: Grid structure with mock widgets (src/app/dashboard/page.tsx)
- **Blueprint UI**: Static blueprint page (src/app/dashboard/blueprint/page.tsx)
- **User Flow Diagram**: Basic SVG mock (src/app/dashboard/user-flow/page.tsx)
- **Kanban Board**: Static kanban UI (src/app/dashboard/kanban/page.tsx)
- **UI Components**: Reusable Radix UI + Tailwind components (src/components/ui/)
- **Navigation**: Dashboard header with routing (src/components/dashboard/dashboard-header.tsx)

### ⏳ Planned Implementation

- **Data Layer**: Supabase integration for persistent storage
- **State Management**: Zustand for React state management
- **Backend Services**: API routes for data processing
- **Real Functionality**: Replace all static data with dynamic content
- **Enhanced Visualization**: Replace SVG mocks with interactive diagrams

### Technical Stack Status

- **Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS ✅ **EXISTS**
- **UI Components**: Radix UI, Lucide React icons ✅ **EXISTS**
- **Mock Components**: Static dashboard widgets ✅ **EXISTS**
- **Backend**: Not implemented yet ⏳ **PLANNED**
- **State Management**: Not implemented yet ⏳ **PLANNED**
- **Data Layer**: Not implemented yet ⏳ **PLANNED**
- **Visualization**: Basic SVG mock, needs enhancement ⏳ **ENHANCEMENT NEEDED**

---

## 📝 Important Notes

- **Current dashboard UI is MOCK/PROTOTYPE** - not final design
- All existing components use static/hardcoded data
- Foundation UI components and layout structure are ready for enhancement
- Focus should be on adding dynamic functionality to existing mock components
- Design system (Tailwind + Radix) is established and ready for final implementation

# Workspace Diagram Editor TODO

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
