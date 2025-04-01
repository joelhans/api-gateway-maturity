# API Gateway Maturity Matrix

Every API needs a front door, but many organizations struggle to define what
"done" means for their API gateway implementation. Is authentication and rate
limiting enough? What about multi-region failover or self-service development
environments?

In this project, we're trying build on the CNCF's [Cloud Native Maturity
Model](https://maturitymodel.cncf.io/) to create a practical framework for API
gateway evolution across five key phases: **Build** (choosing fundamentals), **Operate**
(implementing CI/CD), **Scale** (mastering multi-region), **Improve** (balancing control
with velocity), and **Adapt** (enabling advanced patterns).

This project began as a talk for [KubeCon EU
2025](https://kccnceu2025.sched.com/event/1tx7N). The slides for the talk are
available in the [`kubecon-eu-2025-talk/`
folder](https://github.com/joelhans/api-gateway-maturity/tree/main/kubecon-eu-2025-talk) as a
[Slidev](https://github.com/slidevjs/slidev) project.

## Is this Matrix right for you?



## The API Gateway Maturity Matrix

Let’s start with a broad look at how API gateways transform over the five
Levels, borrowed from the CNCF's Cloud Native Maturity Model, from both a
technological and team/process angle.

|    |    |
| -- | -- |
| Build   | **Is this thing on?** We have a basic ingress with a reverse proxy masquerading as an API gateway. The infra team (or the one person who understands it) owns the manual configuration, holds all the knowledge, and manages things ad-hoc. |
| Operate | **Time to make this API gateway thing a little less Swiss cheese-y.** We’ve upgraded to a dedicated API gateway, managed by our infra or DevOps team, which is declaratively configured with CI/CD and supported by minimal-to-acceptable documentation. |
| Scale   | **How do we make this thing get 10X (or 100X!) bigger... and not terrible to work on at the same time?** Our API gateway now standardizes services from deployment to observability to incident response, and offers reusable configs for developers to ship quickly while our newfangled platform team manages the scale. |
| Improve | **All the things are important now. And how do I help devs move quick without losing control?** The platform team constantly modulates how the API gateway works to create a golden path for self-service while isolating different teams’ work, automating policy enforcement, and providing built-in observability for every service. |
| Adapt   | **How do we keep innovating... without over-engineering?** The API gateway is now fully dynamic, policy-driven, and responsive to signals like traffic patterns, active threats, or cost. It’s the foundation of a unified platform that everyone not just relies on, but actually enjoys using. |

For the remainder of this Matrix, we're looking at these 5 levels across 5
dimensions.

- Traffic management
- Authentication & security
- Observability & debugging
- Developer/team experience
- Governance & compliance

Each level of growth gets a general statement about where the API gatweay stands
and the big problems it's solving, along with example features that, if you have
them turned on and they're working well, might be a signal that you've reached a
certain level.

We're focused on capabilities because we're covering a specific technolgy—unlike
the CNCF’s maturity model, which focuses on categories like People and Business
Outcomes, we're not arguing that an API gateway will drive your entire platform
engineering culture.

API gateways can, on the other hand, play a major role in how those successful
that culture is.

### Traffic management

#### Build

Our APIs are protected from unauthorized access, but the application of AuthN is
inconsistent—sometimes at our gateway, sometimes embedded in your services.

Examples:

- Static routing on paths, subdomains, etc
- Hardcoded rewrites and redirects
- Simple load balancing and manual failover

#### Operate

We centrally manage, configure, and turn on features like routing on behalf of
development teams, some driven by their asks and some driven by protecting our
infrastructure.

Examples:

- Basic per-client rate limits for fairness and abuse
- DDoS protection and global load balancing
- Geoblocking and IP restrictions
- Timeouts

#### Scale

Our APIs can handle high traffic safely and without overloading our upstream
services, and we're optimizing for performance and availability... and
automatically fail over when things go wrong.

Examples:

- Multi-environment and -region routing (multicloud?)
- Weighted traffic splitting for blue/green or canaries
- Load balancing: latency-based, or sticky, round robin

#### Improve

Teams can self-manage routing, rate limits, and other traffic management rules
while staying within platform guardrails.

Examples:

- Dynamic throttling based on load or error rates
- Custom LB: PEWMA+weighting, proximity+load
- Request hedging for latency optimization

#### Adapt

We can route traffic dynamically based on cost, latency, congestion, usage
patterns, availability, and beyond.

Examples:

- Dynamic routing for user priority or slow starts
- Dynamic limits based on predicted workload patterns
- Multicloud LB based on cost and capacity

### Authentication & security

#### Build

Our APIs are protected from unauthorized access, but the application of AuthN is
inconsistent—sometimes at our gateway, sometimes embedded in our services.

Examples:

- API keys and basic authentication
- Mix-and-match of AuthN/AuthZ services
- TLS termination at the gateway edge

#### Operate

Security enforcement is increasingly centralized at the API gateway, reducing
per-service misconfigurations that lead to risk or breaches.

Examples:

- JWTs or OAuth2
- Centralized AuthN/AuthZ via the API gateway
- Basic role-based access control

#### Scale

Our API gateway is a central hardening point, and we have a unified and repeatable security model that supports multiple distributed teams.

| Scale   | Our API gateway is a central hardening point, and we have a unified and repeatable security model that supports multiple distributed teams.<ul><li>Geoblocking and IP reputation filtering</li><li>mTLS for service-to-service AuthN/AuthZ</li><li>Multi-tenant isolation in gateway routes</li></ul> |

Examples:

- Geoblocking and IP reputation filtering
- mTLS for service-to-service AuthN/AuthZ
- Multi-tenant isolation in gateway routes

#### Improve

Developers can implement new Zero Trust fundamentals via the API gateway without writing tickets or waiting for approvals.

Examples:

- Self-service policy enforcement via OPA/Kyverno
- Automated API posture checks
- Fine-grained access control per team or service

#### Adapt

Our API security model is adaptive and capable of preventing breaches before they happen.

Examples:

- Risk-based authentication and rate limiting
- Threat detection/intelligence feeds
- Just-in-time access control

### Observability & debugging

#### Build

We can see *what* our API services are doing, mostly via logs, in a deployed environment to help us identify issues.

Examples:

- Basic logs generated at the API gateway
- Error rate monitoring (5xx API errors)
- Basic health check endpoints
- 'Debugging with a shotgun'
- Basic usage audits

#### Operate

We have a unified view *how* our APIs are doing via dashboards, making
troubleshooting a lot easier and helping us resolve issues faster.

Examples:

- Gateway metrics published to observability platforms
- Structured logs
- Unified monitoring for one gateway+environment
- Trcking for usage-based billing

#### Scale

Our API gateway is seen as the first place to look (and often to blame!) when
we're monitoring the API landscape or developers need to do distributed
debugging.

Examples:

- Unified monitoring across clusters/regions/clouds
- Tracing to help find distributed bottlenecks
- Real-time incident alerting for relevant stakeholders
- Anomaly detection for unusual traffic patterns

#### Improve

Other teams can extend the API gateway to add their own metrics or tracing based
on new requirements without having to change the main API surface beneath
everyone's feet.

Examples:

- Automated remediation runbooks
- Editable request replay for debugging
- Team-specific gateway traffic dashboards

#### Adapt

API issues are fully self-healing, minimizing the need for us (platform team) or
others (API developers) to intervene manually.

Examples:

- AI-driven anomaly detection and automated RCA
- Automated incident response and rerouting
- Business outcome correlation with ingress patterns

### Team/developer experience

#### Build

API configurations are managed with manual changes, with developers cobbling
together ways to ship to prod. It works, but it's slow.

Examples:

- No IaC for API gateway configs
- Ticket-based (or YOLO) configuration changes
- Little to no documentation

#### Operate

API changes have a clearly-defined process, streamlining Linear/Jira/etc board
of tickets and freeing up our team’s engineering time.

Examples:

- Standardized API definitions
- IaC + CI/CD for all gateway configurations
- Basic API catalog derived from routing topology

#### Scale

API management (via automation and IaC) helps us manage APIs at scale across
multiple clusters, environments, and growing teams.

Examples:

- GitOps and CI/CD++ (regions, canaries, rollbacks)
- Many deployment options (K8s, hybrid, multicloud)
- API versioning strategies at the API gateway

#### Improve

Developers can self-service isolated API gateway configurations while we (now a
platform team!) enforce policy, reducing operational overhead on a golden path.

Examples:

- Golden path templates/recipes for gateway patterns
- Rich documentation of gateway best practices
- Extensive API catalog/developer portal

#### Adapt

We give developers more than guardrails—we support them with best practices on
designing and deploying APIs.

Examples:

- Support for advanced customization and plugins
- Shift-lefted, AI-driven gateway recommendations
- Automatic detection of unused/deprecated services

### Governance & compliance

#### Build

APIs meet basic security and compliance standards, but inconsistently, leading
to risk and ad-hoc responses.

Examples:

- No enforced API standards at the gateway
- Infrequent/ad-hoc audits of gateway compliance
- Manual configuration reviews

#### Operate

We enforce standards across multiple APIs and teams to reduce the risk of being
non-compliant.

Examples:

- Basic API lifecycle management (e.g. versioning)
- Standardized security (TLS requirements/versioning)
- Semi-regular scanning of API gateway policy

#### Scale

Governance of API gateways scales across teams and cloud environments without
blocking development velocity.

Examples:

- Configs controlled with policy-as-code and CI/CD
- Traffic auditing across multiple environments
- Gateway-enforced data sovereignty

#### Improve

Anyone can configure APIs within a predefined, platform-wide governance model.

Examples:

- Role- or team-based API gateway management
- Fine-grained access control for config changes
- Configuration change tracking for compliance

#### Adapt

Our compliance is now automated and capable of adapting to new regulations or
security risks dynamically.

Examples:

- AI-driven, continuous compliance monitoring
- Threat-based security policy updates
- Automatic policy updates for regulatory changes

## Inspirations, references, and further reading

### Maturity models

- [CNCF Cloud Native Maturity Model](https://maturitymodel.cncf.io/)
  - [CTO SUMMIT: Exploring The Foundations Of Cloud Native Maturity](https://www.cncf.io/reports/cto-summit-na-2022/)
- [Capability Maturity
  Model](https://en.wikipedia.org/wiki/Capability_Maturity_Model)
- [Platform Engineering Maturity
  Model](https://tag-app-delivery.cncf.io/whitepapers/platform-eng-maturity-model/)
- [API Platform Engineering Maturity
  Model](https://konghq.com/blog/enterprise/api-platform-engineering-maturity-model)
- [API platform maturity
  model](https://tyk.io/blog/the-tyk-api-platform-maturity-model/)

### Blog posts

- Martin Fowler: [Maturity
  Model](https://martinfowler.com/bliki/MaturityModel.html) 
- Maurício Linhares: [Building DigitalOcean's API gateway: Microservices all the
  way](https://mauricio.github.io/2021/01/14/building-digitaloceans-api-gateway.html)
- [Designing Edge Gateway, Uber’s API Lifecycle Management
  Platform](https://www.uber.com/blog/gatewayuberapi/)
- [The Architecture of Uber’s API
  gateway](https://www.uber.com/blog/architecture-api-gateway/)
- [How we built the Tinder API
  Gateway](https://medium.com/tinder/how-we-built-the-tinder-api-gateway-831c6ca5ceca)

