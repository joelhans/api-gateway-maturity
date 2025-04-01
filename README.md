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

For the remainder of thiss Matrix, we're looking at these 5 levels across 5
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

Security enforcement is increasingly centralized at the API gateway, reducing per-service misconfigurations that lead to risk or breaches. 

Examples:

- JWTs or OAuth2
- Centralized AuthN/AuthZ via the API gateway
- Basic role-based access control

#### Operate



Examples:

- 
- 
- 

#### Scale



Examples:

- 
- 
- 

#### Improve



Examples:

- 
- 
- 

#### Adapt



Examples:

- 
- 
- 

### Observability & debugging

#### Build



Examples:

- 
- 
- 

#### Operate



Examples:

- 
- 
- 

#### Scale



Examples:

- 
- 
- 

#### Improve



Examples:

- 
- 
- 

#### Adapt



Examples:

- 
- 
- 

### Team/developer experience

#### Build



Examples:

- 
- 
- 

#### Operate



Examples:

- 
- 
- 

#### Scale



Examples:

- 
- 
- 

#### Improve



Examples:

- 
- 
- 

#### Adapt



Examples:

- 
- 
- 

### Governance & compliance

#### Build



Examples:

- 
- 
- 

#### Operate



Examples:

- 
- 
- 

#### Scale



Examples:

- 
- 
- 

#### Improve



Examples:

- 
- 
- 

#### Adapt



Examples:

- 
- 
- 

###



#### Build



Examples:

- 
- 
- 

#### Operate



Examples:

- 
- 
- 

#### Scale



Examples:

- 
- 
- 

#### Improve



Examples:

- 
- 
- 

#### Adapt



Examples:

- 
- 
- 


## Scratchpad

- Obs/Build - auditing usage
- Obs/Build - debugging with a shotgun
- Obs/Operate - Tracking for usage-based billing
- Obs/Scale - Anomaly detection for traffic patterns

- timeouts

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

