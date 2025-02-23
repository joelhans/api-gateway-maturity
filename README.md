# API Gateway Maturity Model

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
available in the [`slides/`
folder](https://github.com/joelhans/api-gateway-maturity/tree/main/slides) as a
[Slidev](https://github.com/slidevjs/slidev) project.
 
## Methodology

- Implementers first, decision-makers second.
- Focus on what specific capabilities to learn and enable next via _generalized
  estimates of progress_ (TY Martin Fowler!) rather than broad cross-functional
  or cultural change.
- Follow "threads" of capability growth between each level of maturity.
- Remain vendor agnostic and focused on capabilities of _off-the-shelf_ API
  gateway products (cloud-specific, self-hosted, managed).
- Minimize the number of dimensions as much as possible!
- Each level gets:
  1. A general statement about where your API (gateway) program should be in
  relation to the rest of your DevOps &rarr; platform engineering efforts.
  2. Updates to each capability thread.
  3. A _failure state_ where most API gateway programs go south.

### The maturity levels

- **Build**: Pick your poison and commit.
- **Operate**: Wrangle chaos with automation.
- **Scale**: Go distributed in every dimension.
- **Improve**: You built an internal developer platform… deal with it.
- **Adapt**: Advanced, flexible, and future-proofed.

### Capability threads

1. Deployment & automation
2. Routing & availability
3. AuthN+AuthZ+security
4. Traffic management
5. Observability & debugging
6. Developer experience
7. Governance

## The API Gateway Maturity Model

### Level 1: Build

**You see the value of API gateways can bring to your platform and are ready to
build a solid foundation for managing API traffic and treating APIs as
products.**

|    |    |
| -- | -- |
| Deployment & automation | Deployments and configuration changes all happen manually in a ticket-driven process |
| Routing & availability | Static routing to upstreams with manual failover via a mix of basic ingress and API gateway |
| AuthN+AuthZ+security | Relies on API keys and Basic Auth, some handled at the app/service layer instead of the gateway |
| Traffic management | Basic rate limits applied at the API gateway to prevent abuse and ensure fairness |
| Observability & debugging | Basic logs (response types/times/errors) collected at both pod and gateway, followed by manual debugging |
| Developer experience | Developers rely on DevOps/infra team to provision API deployments |
| Governance | Security policies manually enforced (perhaps inconsistently) during (perhaps infrequent) audits |

**Failure state**: "Our routing is a labyrinth and we're still hardcoding auth.
Can we go back in time to the load balancer days? Is it going to be like this
forever??"

### Level 2: Operate

**You're over ad-hoc changes and are ready to embrace a culture of automation,
which in turn gets both best pratices but your first taste of governance.**

|    |    |
| -- | -- |
| Deployment & automation | Gateway configs are controlled via IaC and deployed with standardized tooling or GitOps |
| Routing & availability | DDoS protection, global load balancing, weighted traffic splitting for blue/green, canary deploys |
| AuthN+AuthZ+security | Support for JWTs or OAuth2, centrally managed and provisioned |
| Traffic management | Per-service and per-client rate limits; feature-flagging and A/B testing methods |
| Observability & debugging | Structured logs ingested into a single platform (stretch goal for distributed tracing!) |
| Developer experience | Self-service internal API registry for what does (or can) live behind the API gateway |
| Governance | Certain policies (AuthN/Z, logging, rate limiting) standardized across all APIs |

**Failure state**: “Every change requires a Slack war, a handful of Linear
tickets, and a few days from everyone’s life.” 

### Level 3: Scale

**You're ready to stop fighting fires and build for distributed, multi-region
(maybe multi-cloud?), and multi-team usage.**

|    |    |
| -- | -- |
| Deployment & automation | Dynamic API gateway configurations via K8s operators |
| Routing & availability | Multi-region deployments with failover; round-robin/latency-based/sticky load balancing |
| AuthN+AuthZ+security | Fine-grained access control per API and mTLS wherever relevant |
| Traffic management | Per-region and per-tenant limits plus dynamic throttling based on load or error (circuit breakers) |
| Observability & debugging | Centralized API monitoring and anomaly detection to help developers with debugging |
| Developer experience | Teams can provision API gateways per project/function with central governance |
| Governance | API gateway compliance enforced via CI/CD and automated policy check jobs |

**Failure state**: “This is _our_ platform. It works. It's beautiful! Its highly
available and properly governed and fully automated—*WAIT DON'T TOUCH THAT*—”

### Level 4: Improve

**You're done with ticket-based development and bottlenecking your
peers&mdash;time to become an enabler for self-service (without things going all
wild west on you).**

|    |    |
| -- | -- |
| Deployment & automation | Developers define APIs and gateways all the way to production all by their lonesome! |
| Routing & availability | Dynamic routing to support new or changing APIs; custom load balancing (PEWMA+weighting, proximity+load) |
| AuthN+AuthZ+security | Security teams define auth under policy-as-code for developers to self-service within compliance boundaries |
| Traffic management | Per-service blocks (geo, IPs), limits, and breakers are developer-defined and composed after global policies |
| Observability & debugging | Debugging gets easier with inspection and replay tools that work in dev/stage/prod |
| Developer experience | Developers manage API gateway settings within policy constraints |
| Governance | Developers can take new APIs into production without tearing down all the precious compliance work! |

**Failure state**: "We built a developer platform... hope you like it?"

### Level 5: Adapt

**You're actively supporting emerging patterns while sticking to a long-term API
strategy... and not overcomplicating your architecture without a clear ROI.**

|    |    |
| -- | -- |
| Deployment & automation | Gateways are policy-driven, dynamic, aware of changes to topology/workload, and autonomous |
| Routing & availability | Routing/LB gets fully dynamic based on request hedging, slow starts, server metrics (ORCA standard) |
| AuthN+AuthZ+security | API access isn't just on (nice token! nice cert!) or off, but based on user behavior and threat intelligence  |
| Traffic management | Limits of all types are auto-adjusted based on workload patterns and predictive analytics |
| Observability & debugging | AI root cause analysis identifies and mitigates service failures as logged by the gateway |
| Developer experience | Policy goes past guardrails to actively assist devs with recommendations of best practices and optimizations |
| Governance | Compliance monitoring adjusts gateway policies in real-time based on new threats or regulatory changes |

**Failure(?) state**: "Our architecture diagram looks like we're finally getting
really close to figuring out who Pepe Silvia is."

## Contribute!

This maturity model is open source for a reason: it gets more accurate and
effective with contributions from the wider community of DevOps, infrastructure,
and platform engineers who have implemented and improved API gateways.

You can make this model better by contributing:

- Issues to start discussions about improving or extending the model
- PRs for quick fixes (typos) or improvements (e.g. to a specific capability
  thread)
- Real-world experiences to create "illustrations" for each level and their
  failure states

For now, most contributions should be confined to the main `README.md` file,
which contains the model itself.

## Inspirations, references, and further reading

### Maturity models

- [CNCF Cloud Native Maturity Model](https://maturitymodel.cncf.io/)
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

## Deploy `api-gateway-maturity.joelhans.xyz`

TK
