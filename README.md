# Amunet AI

**The Last Firewall You'll Ever Need**

> Autonomous cloud defense console with Moving Target Defense (MTD), deception infrastructure, and a cinematic keyboard-driven UX. Makes your cloud infrastructure practically impossible to target at scale.

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Go](https://img.shields.io/badge/Go-00ADD8?style=flat&logo=go&logoColor=white)](https://golang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## 🚀 Quick Start

```bash
# Clone repository
git clone https://github.com/Neon-Nomad/Amunet-AI.git
cd Amunet-AI

# Install dependencies
npm install

# Run tests
npm test

# Start development server
npm run dev
```

Access at `http://localhost:5173`

**Demo Credentials**: `demo@amunet.ai` / `demo123`

---

## 📋 Project Status

| Component | Status | Notes |
|-----------|--------|-------|
| **Frontend** | ✅ Complete | React + TypeScript, all UI components working |
| **Command Palette** | ✅ Complete | Cmd+K interface with macro recording |
| **Sentinel Mode** | 🟡 Visual Demo | 3D war room renders, needs real data integration |
| **Traceback Protocol** | 🟡 Simulated | Cinematic logs working, needs MaxMind GeoIP |
| **Backend API** | ❌ Not Started | Go/Python control plane required |
| **Agent Fleet** | ❌ Not Started | Go agent binaries needed |
| **Cloud Integrations** | ❌ Not Started | AWS/GCP/Azure SDKs |
| **AI/ML Core** | ❌ Spec Only | Architecture documented, not implemented |
| **Test Suite** | ✅ Passing | All unit & integration tests green |

**Current State**: Fully functional frontend prototype with simulated backend  
**Next Phase**: Build real backend (see [Issues](https://github.com/Neon-Nomad/Amunet-AI/issues) for roadmap)

---

## 🎯 Core Features

### ✅ Implemented (Frontend)

#### 1. **Cinematic Command Palette** (`Cmd+K`)
```bash
# Direct commands
scan                    # Scan all agents for vulnerabilities
rotate                  # Rotate infrastructure IPs
rotate --all            # Rotate all agents simultaneously
lockdown                # Emergency lockdown mode
snapshot                # Create infrastructure snapshot
rollback                # Rollback to previous snapshot

# Natural language
trace 1.2.3.4           # Trace attacker infrastructure origin
ban ip 1.2.3.4          # Ban IP across all agents
show me threats         # Display threat intelligence summary
grep failed rotation    # Search logs

# Command chaining
scan && rotate && snapshot

# Macro recording
record                  # Start recording
> scan                  # Execute commands
> rotate
stop                    # Stop recording
save macro deploy       # Save as "deploy"
exec deploy             # Execute macro
```

#### 2. **Sentinel Mode (3D War Room)**
- Rotating globe with agent nodes (WebGL/Canvas 2D)
- Real-time attack visualization
- IP rotation animations
- Cyberpunk HUD with live metrics
- Honeypot activation indicators

**Status**: Visual demo complete, needs WebSocket integration for live data

#### 3. **Active Traceback Protocol**
5-stage cinematic traceback showing:
- DNS resolution
- BGP routing analysis
- VPN/proxy detection
- Threat intelligence cross-reference
- Infrastructure origin (Country, ISP, ASN)

**Status**: Simulated output, needs MaxMind GeoIP + BGP APIs

#### 4. **Dashboard & Analytics**
- Agent status overview
- Rotation history
- Threat intelligence feed
- Honeypot activity monitor
- Real-time metrics (simulated)

### 🟡 Partially Implemented (Simulated APIs)

All current functionality routes through `services/SentinelAPI.ts` mock methods:
- `triggerLockdown()` → Mock
- `scanAgents()` → Mock
- `rotateAll()` → Mock
- `traceHost()` → Simulated cinematic log
- `snapshot()` / `rollback()` → Mock
- `saveMacro()` / `runMacro()` → Working (localStorage)

**To make real**: Replace mocks with HTTP/WebSocket calls to backend

### ❌ Not Implemented (Backend Required)

| Feature | Priority | Effort | Issue |
|---------|----------|--------|-------|
| Go Agent Binary | P0 | 1 week | [#27](https://github.com/Neon-Nomad/Amunet-AI/issues/27) |
| Control Plane API | P0 | 1 week | [#2](https://github.com/Neon-Nomad/Amunet-AI/issues/2) |
| WebSocket Feed | P0 | 3 days | [#3](https://github.com/Neon-Nomad/Amunet-AI/issues/3) |
| AWS IP Rotation | P0 | 1 week | [#4](https://github.com/Neon-Nomad/Amunet-AI/issues/4) |
| Honeypot Deployment | P0 | 3 days | [#1](https://github.com/Neon-Nomad/Amunet-AI/issues/1) |
| MaxMind GeoIP | P0 | 2 days | [#9](https://github.com/Neon-Nomad/Amunet-AI/issues/9) |

**See all 27 issues**: [Project Board](https://github.com/Neon-Nomad/Amunet-AI/issues)

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     Web Console (React/TS)                   │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │
│  │  Landing     │  │  Dashboard   │  │  Sentinel    │     │
│  │  Page        │  │  + CLI       │  │  Mode (3D)   │     │
│  └──────────────┘  └──────────────┘  └──────────────┘     │
└─────────────────────────────────────────────────────────────┘
                              ↕ WebSocket + REST
┌─────────────────────────────────────────────────────────────┐
│              Control Plane (Go/Python Backend)               │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  API Gateway  │  Auth  │  WebSocket Hub  │  Metrics │  │
│  └──────────────────────────────────────────────────────┘  │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  MTD Orchestrator  │  Honeypot Manager  │  AI Core  │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                              ↕ TLS + Agent Protocol
┌─────────────────────────────────────────────────────────────┐
│                   Agent Fleet (Go Binaries)                  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │
│  │  AWS Agent   │  │  GCP Agent   │  │  Azure Agent │     │
│  │  + Honeypots │  │  + Honeypots │  │  + Honeypots │     │
│  └──────────────┘  └──────────────┘  └──────────────┘     │
└─────────────────────────────────────────────────────────────┘
```

### Tech Stack

**Frontend** (✅ Implemented)
- React 18 + TypeScript
- Vite (build tool)
- TailwindCSS + Framer Motion
- Canvas 2D (Sentinel Mode rendering)
- Custom Command Palette (Cmd+K)

**Backend** (❌ Not Implemented)
- Go (agents, control plane core)
- Python (AI/ML pipeline, data analysis)
- PostgreSQL (persistent state)
- Redis (real-time metrics, pubsub)
- TimescaleDB (time-series metrics)

**Infrastructure** (❌ Not Implemented)
- Docker + Kubernetes
- AWS/GCP/Azure SDKs
- Terraform (IaC)
- Prometheus + Grafana

---

## 📁 Repository Structure

```
amunet-ai/
├── src/
│   ├── App.tsx                    # Main app routing
│   ├── views/
│   │   ├── LandingPage.tsx        # Marketing page
│   │   ├── Login.tsx              # Auth page
│   │   ├── Dashboard.tsx          # Main console
│   │   ├── ThreatIntelligence.tsx # Threat intel + traceback
│   │   └── SentinelMode.tsx       # 3D war room (conceptual)
│   ├── components/
│   │   └── CommandPalette.tsx     # Cmd+K CLI
│   ├── contexts/
│   │   └── AuthContext.tsx        # Auth state management
│   ├── services/
│   │   └── SentinelAPI.ts         # API client (MOCKED - needs backend)
│   └── tests/
│       ├── setupTests.ts          # Test configuration
│       ├── App.test.tsx           # Integration tests
│       └── *.test.tsx             # Unit tests
├── package.json
├── vite.config.ts
├── tsconfig.json
└── README.md
```

**Key Files for Handoff**:
- `services/SentinelAPI.ts` - All mocked API methods (replace with real backend)
- `components/CommandPalette.tsx` - CLI implementation (works, needs backend)
- `views/ThreatIntelligence.tsx` - Traceback UI (needs MaxMind integration)

---

## 🧪 Testing

```bash
# Run all tests
npm test

# Run specific test
npm test App.test.tsx

# Coverage report
npm test -- --coverage
```

**Test Coverage**: All core components and workflows

| Test File | Coverage |
|-----------|----------|
| `App.test.tsx` | Routing, auth, CLI, stress test |
| `services/SentinelAPI.test.ts` | API method contracts |
| `contexts/AuthContext.test.tsx` | Login/logout state |
| `views/Login.test.tsx` | Login UI, demo credentials |
| `components/CommandPalette.test.tsx` | Command parsing, macros |
| `views/LandingPage.test.tsx` | Landing page render |

**Status**: ✅ All tests passing

---

## 📚 Documentation

### Complete Technical Specification
📄 [**Amunet AI - Technical Specification & Roadmap**](https://docs.google.com/document/d/1GihgpQgrxnLzrZW2Yoz6xJ98eIrHlN2r3iOIUPXwz5g/edit)

Comprehensive 50-page document covering:
- System architecture
- API contracts
- AI/ML design
- Security considerations
- Phase-by-phase roadmap
- Honest assessment of what's real vs. simulated

### Project Resources
- 📂 [**Google Drive Folder**](https://drive.google.com/drive/folders/1zZKE5gbun9azBgOy-m5P_41p5gU9L79v) - All project documentation
- 🐛 [**GitHub Issues**](https://github.com/Neon-Nomad/Amunet-AI/issues) - 27 issues tracking all development phases
- 🌐 [**Live Demo**](https://amunet.ai) - amunet.ai (when deployed)

---

## 🗺️ Development Roadmap

### Phase 0: Foundation (Weeks 1-4)
**Goal**: Make backend real enough for live data

- [x] Frontend prototype complete
- [ ] Build Go agent binary ([#27](https://github.com/Neon-Nomad/Amunet-AI/issues/27))
- [ ] Set up control plane API ([#2](https://github.com/Neon-Nomad/Amunet-AI/issues/2))
- [ ] WebSocket feed ([#3](https://github.com/Neon-Nomad/Amunet-AI/issues/3))
- [ ] AWS IP rotation ([#4](https://github.com/Neon-Nomad/Amunet-AI/issues/4))
- [ ] Deploy honeypots ([#1](https://github.com/Neon-Nomad/Amunet-AI/issues/1))
- [ ] MaxMind GeoIP ([#9](https://github.com/Neon-Nomad/Amunet-AI/issues/9))

**Success Metric**: Dashboard shows live agents, one manual rotation works

### Phase 1: Core MTD (Weeks 5-8)
**Goal**: Automated infrastructure rotation

- [ ] Automated rotation scheduler ([#8](https://github.com/Neon-Nomad/Amunet-AI/issues/8))
- [ ] Multi-agent coordination ([#5](https://github.com/Neon-Nomad/Amunet-AI/issues/5))
- [ ] Snapshot/rollback ([#7](https://github.com/Neon-Nomad/Amunet-AI/issues/7))
- [ ] GCP support ([#6](https://github.com/Neon-Nomad/Amunet-AI/issues/6))
- [ ] Sentinel Mode live data ([#14](https://github.com/Neon-Nomad/Amunet-AI/issues/14))

**Success Metric**: 10 agents rotating IPs every 15 minutes

### Phase 2: Deception & Intelligence (Weeks 9-12)
**Goal**: Honeypots generate actionable intel

- [ ] Deploy 5+ honeypot types ([#10](https://github.com/Neon-Nomad/Amunet-AI/issues/10))
- [ ] Log aggregation pipeline ([#11](https://github.com/Neon-Nomad/Amunet-AI/issues/11))
- [ ] Threat intel feeds ([#13](https://github.com/Neon-Nomad/Amunet-AI/issues/13))
- [ ] Honeypot Theater UI ([#12](https://github.com/Neon-Nomad/Amunet-AI/issues/12))
- [ ] Automated IP banning ([#16](https://github.com/Neon-Nomad/Amunet-AI/issues/16))
- [ ] Full traceback ([#15](https://github.com/Neon-Nomad/Amunet-AI/issues/15))

**Success Metric**: 100+ unique attackers caught, auto-banned

### Phase 3: AI/ML MVP (Weeks 13-16)
**Goal**: Baseline anomaly detection

- [ ] Collect baseline data ([#17](https://github.com/Neon-Nomad/Amunet-AI/issues/17))
- [ ] Isolation Forest ([#18](https://github.com/Neon-Nomad/Amunet-AI/issues/18))
- [ ] Per-environment profiles ([#19](https://github.com/Neon-Nomad/Amunet-AI/issues/19))
- [ ] Simple RL policy ([#20](https://github.com/Neon-Nomad/Amunet-AI/issues/20))
- [ ] AI confidence scores ([#23](https://github.com/Neon-Nomad/Amunet-AI/issues/23))

**Success Metric**: 80%+ precision on traffic anomalies

### Phase 4: Production Hardening (Weeks 17-20)
**Goal**: SOC 2, scale, billing

- [ ] SOC 2 Type II prep ([#22](https://github.com/Neon-Nomad/Amunet-AI/issues/22))
- [ ] Azure support ([#21](https://github.com/Neon-Nomad/Amunet-AI/issues/21))
- [ ] Stripe billing ([#24](https://github.com/Neon-Nomad/Amunet-AI/issues/24))
- [ ] Kubernetes auto-scaling ([#26](https://github.com/Neon-Nomad/Amunet-AI/issues/26))
- [ ] Public beta launch ([#25](https://github.com/Neon-Nomad/Amunet-AI/issues/25))

**Success Metric**: 50 paying customers, zero critical vulns

---

## 🤝 Contributing

This project is currently in active development. If you're taking over or contributing:

### For AI Agents
1. Read `services/SentinelAPI.ts` - understand what's mocked
2. Read `components/CommandPalette.tsx` - see CLI capabilities
3. Read [Technical Specification](https://docs.google.com/document/d/1GihgpQgrxnLzrZW2Yoz6xJ98eIrHlN2r3iOIUPXwz5g/edit)
4. Start with Phase 0 tasks ([#27](https://github.com/Neon-Nomad/Amunet-AI/issues/27), [#2](https://github.com/Neon-Nomad/Amunet-AI/issues/2))
5. **Keep the cinematic illusion, ground in reality**

### For Human Developers
1. Clone repo: `git clone https://github.com/Neon-Nomad/Amunet-AI.git`
2. Install: `npm install`
3. Test: `npm test`
4. Run: `npm run dev`
5. Review [GitHub Issues](https://github.com/Neon-Nomad/Amunet-AI/issues)

### Key Principles
✅ **DO**:
- Maintain cinematic UX (Cmd+K, Sentinel Mode animations)
- Keep honesty about what's real vs. simulated
- Ground traceback in infrastructure (not street-level geo)
- Target security engineers (terminal-friendly)

❌ **DON'T**:
- Claim "perfect AI" or "100% autonomous"
- Claim street-level attacker geolocation
- Overpromise on AI capabilities (start simple)

---

## 🔒 Security Considerations

### Current State (Frontend Only)
- Demo credentials: Public (not for production)
- No real user data stored
- No external API calls (all mocked)

### Future (Backend)
- TLS mutual auth for agents
- API key rotation (30-day expiry)
- Encryption at rest (PostgreSQL, Redis)
- Encryption in transit (TLS 1.3+)
- RBAC (Role-Based Access Control)
- SOC 2 Type II compliance (planned Q2 2026)

---

## 📝 License

MIT License - see [LICENSE](LICENSE) file

---

## 📧 Contact

- **Repository**: [github.com/Neon-Nomad/Amunet-AI](https://github.com/Neon-Nomad/Amunet-AI)
- **Documentation**: [Google Drive Folder](https://drive.google.com/drive/folders/1zZKE5gbun9azBgOy-m5P_41p5gU9L79v)
- **Live Demo**: amunet.ai (TBD - deploy to Vercel/Netlify)

---

## 🎯 One-Line Summary For Next AI/Developer

> **You're taking over Amunet AI: a cinematic, CLI-driven cloud defense console with mock/simulated MTD, tracebacks, and 3D War Room views already wired into the frontend and tests. Your job is to progressively replace simulations with real backend logic, keep the UX illusion, and make the system genuinely useful and safe for real teams.**

---

**Status**: ✅ Frontend Complete | ⚠️ Backend Required | 📋 27 Issues Tracked  
**Last Updated**: November 21, 2025
