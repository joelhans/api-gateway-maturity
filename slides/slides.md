---
theme: default

title: "API Gateway Maturity Matrix: Where Do You Rank?"

mdc: true
fonts:
  sans: Euclid Square
  mono: Fira Code
  local: Euclid Square
---

# The API Gateway Maturity Matrix

## *Where Do You Rank?*

<!--
About me: I'm Joel, and I do all things DevRel at ngrok, the universal gateway
company. I love stories, so let me start with a short one loosely based on
ngrok itself.
-->

---

![](./assets/python.png){width=120 .center style="rotate: 5deg;"}

![](/assets/nginx.png){width=400 v-click .center style="margin-top: -70px; margin-left: -40px; rotate: -8deg;"}

![](./assets/k8s.png){width=180 v-click .center style="margin-top: 60px; margin-left: 100px;"}

<div v-click style="display: block; margin-left: 20px; rotate: -1deg;">

![](./assets/api.png){width=80}
![](./assets/api.png){width=80}
![](./assets/api.png){width=80}

</div>

![](./assets/docusaurus.png){v-click width=120 style="margin-left: 120px; margin-top: 80px; rotate: 3deg"}

![](./assets/webflow.png){v-click width=120 style="position: absolute; top: -30px; right: -40px; rotate: -20deg"}

<style>
img.center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>

<!--

It starts with just a simple Python app. It's a one-page marketing site and the
rest of the backend.

Then at some point you need to slap NGINX on it. You need that reverse proxy,
and NGINX is free and trusted.

Then you decide, wait, let's go Kubernetes. Slap that on there. Nice easy
project.

Oh look, some new API services want to sneak in behind your proxy.

And there's Docusaurus, asking for a little space for your new developer
documentation. Slap that on there.

What's that? The dreaded Webflow peeking in?

I'm sure many of you have been in this situation before. To get all this
working, your NGINX proxy is all of a sudden full of complex routing rules and
traffic management policies. All your security in a configuration that's both
strict and verbose.

It's a front door, but it's a fragile one.

-->

---
transition: slide-up
---

An API gateway can stop all that chaos.

<v-click>

# An API gateway is...

A "front door" to all your APIs.

A single URL to expose all your APIs to the wild world outside your network.

A way to offload non-functional requirements like AuthN/AuthZ, load balancing,
rate limiting, failover, scaling, and much more from your services.

</v-click>

<v-click>

# You (probably) need one because…

They are designed specifically to solve the problem of the sprawling ecosystem I
just covered.

API gateways make expanding your services both simpler and more secure, create a
better experience for your developers, and future-proof your
architecture.

</v-click>

---
transition: slide-up
---

# What is maturity, anyway?

To paraphrase the Capability Maturity Model (CMM), maturity is how formal and
actively optimized your processes are, from ad hoc to formally defined.

<v-click>

I’ve been asking around at ngrok, too.

</v-click>

<v-clicks>

- "The API won't change underneath me."
- "When I get paged because something is broken, it's because of a bug in my
software and not the infrastructure breaking down. `:lolsob:`"

</v-clicks>

---
transition: slide-up
---

# Maturity isn’t always a good thing.

<v-clicks>

- There's a fine line between *mature* and *legacy*.
- Mature platforms are difficult for you to modify and others to build upon.
- No one understands how a mature platform works anymore, whether that’s lost institutional
knowledge or it just worked once so leave it alone.
- Hard to steer the ship quickly if you need to do something complex... like
multicloud (yikes).

</v-clicks>

<v-click>

## But it _can_ be a conscious effort to get you:

</v-click>

<v-after>
    
- Reliability without surprises.
- Velocity without chaos.
- Scalability without rip-and-replace (again).
- Governance without bureaucracy.

</v-after>

---
transition: slide-left
layout: quote
---

As teams mature, they're shifting _away_ from building API gateways for
themselves and _to_ enabling others while still maintaining control of policy
and governance.

---
layout: quote
transition: slide-up
---

# Why do _I_ care about this?

_A CNCF Story_

<!--

Years ago, I was in a room much like this one in Detroit, Michigan.

I was with 15 or so CTOs and tech leaders from the heaviest hitters of CNCF's
end user community. Can't name names, but they were big ones.

They were there to talk about CNCF's Cloud Native Maturity Model and how they
could apply it to their organizations, particularly from a platform engineering
perspective.

They loved having this kind of roadmap to look forward to, but still
struggled. How were they supposed to apply this to a specific technology?

Fast forward, and I'm in a place where I think about and write about and build
around API gateways all the time. Why not apply this methodology to a specific
technology?

-->

---
layout: quote
transition: slide-up
---

# You should care because…

API gateways are not some set it and forget it tool&mdash;if you don’t maximize how
you use it, you’re actively making your life harder. Will your current API
gateway allow you to reach the state of maturity you’re after?

---
transition: slide-left
layout: two-cols
---

# Audience poll: Where do you think you stand?

- 🚀 "Our API gateway is in good shape."
- 🏗️ "We're duct-taping stuff together."
- 🔥 "NGINX config copy-pasted from Stack Overflow. Send help."

::right::

![](./assets/qr-poll-01.png)

---
transition: slide-left
---

# Methodology

- Implementers first, decision-makers second.
- Focus on what specific capabilities to learn and enable next via _generalized
estimates of progress_ rather than broad cross-functional or cultural change.
- Follow "threads" of capability growth between each level of maturity.
- Remain vendor agnostic and focused on capabilities of _off-the-shelf_ API gateway products
(cloud-specific, self-hosted, managed).
- Minimize the number of dimensions as much as possible!
- Each level gets:
  1. A general statement about where your API (gateway) program should be in
  relation to the rest of your DevOps &rarr; platform engineering efforts.
  2. Updates to each capability thread.
  3. A _failure state_ where most API gateway programs go south.

<!--

I wanted to align maturity more closely with capabilities and specific
implementations rather than wider platform engineering or cloud native
transformation. For example, the cloud native maturity model has four
dimensions—People, Process, Policy, and Technology—but we're talking about one
piece of technology among many others. API gateways won't dictate people or
process, but will impact them.

"generalized estimates of progress"—thanks to Martin Fowler for that quote and
inspiration.

Deployment models/products:
  - Vendor-Specific: AWS API Gateway, Apigee, Azure API Management
  - Self-Hosted: Kong, Traefik, Envoy
  - Managed: Cloudflare, Fastly, ngrok

If you're thinking about building your own API gateway, go read some of the
engineering blogs from Uber and Tinder!

-->

---
transition: slide-up
---

# Time to introduce you to our maturity levels

- **Build**: Pick your poison and commit.
- **Operate**: Wrangle chaos with automation.
- **Scale**: Go distributed in every dimension.
- **Improve**: You built an internal developer platform… deal with it.
- **Adapt**: Advanced, flexible, and future-proofed.

<div v-click style="font-size: 1.2rem; margin-top: 4rem;">

Manual → Automated → Distributed → Self-service → Intelligent and adaptive

</div>

<!--

I'm trying to be a little cheeky with these, but I hope you can see the
progression from building for yourself toward building toward others.

-->

---
transition: slide-left
---

# Don't forget the capability threads!

1. Deployment & automation
2. Routing & availability
3. AuthN+AuthZ+security
4. Traffic management
5. Observability
6. Developer experience
7. Governance

---
transition: slide-up
---

# Build

**You see the value of API gateways can bring to your platform and are ready to
build a solid foundation for managing API traffic and treating APIs as
products.**

<div v-click style="font-size:0.8rem">

|    |    |
| -- | -- |
| Deployment & automation | API keys or basic auth, perhaps handled by services or ingress controller from a past life |
| Routing & availability | Static routing to upstreams with manual failover via a mix of basic ingress and API gateway |
| AuthN+AuthZ+security | API keys and Basic Auth, some handled at the app layer  |
| Traffic management | Basic rate limits applied at the API gateway to prevent abuse |
| Observability | Basic logs (response types/times/errors) collected at both pod and gateway, followed by manual debugging |
| Developer experience | Developers rely on DevOps/infra team to provision API deployments |
| Governance | Security policies manually enforced  |

</div>

<!--

Here, Kubernetes is mostly used as an infrastructure layer—think routing.

-->

---
transition: slide-left
layout: quote
---

**Failure state**: "Our routing is a labyrinth and we're hardcoding auth. What's a rate limit?"

---
transition: slide-up
---

# Operate

**You're over ad-hoc changes and are ready to embrace a culture of automation,
which in turn gets both best pratices but your first taste of governance.**

<div v-click style="font-size:0.8rem">

|    |    |
| -- | -- |
| Deployment & automation | TK |
| Routing & availability | TK |
| AuthN+AuthZ+security | TK |
| Traffic management | TK |
| Observability | TK |
| Developer experience | TK |
| Governance | TK |

</div>

<v-click>

## Benchmarks

- Configuration sync: Use IaC/GitOps/APIops tooling to manage configurations.
- Deployment options: Can you support A/B tests or canary releases?
- Versioning: How do you handle deprecation and backwards compatability?
- Dynamic routing: How do you handle moving between different upstream services?
- Observability: You’re piping API gateway logs to another service, whether
that’s Prometheus+Grafana or Datadog, to understand API performance.

</v-click>

<v-click>

**Failure state**: “Every change requires a Slack war, a handful of Linear
tickets, and a few days from everyone’s life.” 

</v-click>

---
transition: slide-up
---

# Scale

**You're ready to stop fighting fires and build for distributed, multi-region
(maybe multi-cloud?), and multi-team usage.**

<div v-click style="font-size:0.8rem">

|    |    |
| -- | -- |
| Deployment & automation | TK |
| Routing & availability | TK |
| AuthN+AuthZ+security | TK |
| Traffic management | TK |
| Observability | TK |
| Developer experience | TK |
| Governance | TK |

</div>

<v-click>

## Benchmarks

- Multi-readiness: Do you have *at least* a plan (both technical and human) for
how you’ll go multi-region or multi-cloud?
- Load balancing: Have global DDoS protection and global load balancing, with
your API gateway in multiple PoPs around the world.
- Fine-grained traffic management: Implement per-customer, per-region, or
per-endpoint limits with rate limits.
- Service health: Do you use circuit breakers to prevent cascading
failures from a single service?

</v-click>

<v-click>

**Failure state**: “Our ‘multi-readiness’ strategy is LGTM—which means it
probably won’t work in a real failover scenario.” 

</v-click>

<!--


-->

---
transition: slide-up
---

# Improve

**You're done with ticket-based development and bottlenecking your
peers&mdash;time to become an enabler for self-service (without things going all
wild west on you).**

<div v-click style="font-size:0.8rem">

|    |    |
| -- | -- |
| Deployment & automation | TK |
| Routing & availability | TK |
| AuthN+AuthZ+security | TK |
| Traffic management | TK |
| Observability | TK |
| Developer experience | TK |
| Governance | TK |

</div>

<v-click>

## Benchmarks

- Self-service: Enable teams to define their own API gateway configurations while also controlling some policies equally across all APIs.
- Testing/staging: Provide ephemeral environments for testing *API policies*.
- Zero Trust+: Block access from known malicious IPs, geographies, or anonymous/VPN networks.

</v-click>

<v-click>

**Failure state**: "We built a developer platform... that our developers despise!"

</v-click>

---
transition: slide-left
---

# Adapt

**Functionality**: Support emerging patterns and ensure long-term API strategy alignment. 

**Culture**: You don't overcomplicate your API architecture without a clear ROI. 

<div v-click style="font-size:0.8rem">

|    |    |
| -- | -- |
| Deployment & automation | TK |
| Routing & availability | TK |
| AuthN+AuthZ+security | TK |
| Traffic management | TK |
| Observability | TK |
| Developer experience | TK |
| Governance | TK |

</div>

<v-click>

## Benchmarks

- Multi-action: You’re actively supporting cross-cloud or hybrid deployments.
- Governance: You implement identical API governance no matter where your APIs are running or who starts them up.
- Zero Trust++: Are you implementing API posture management or risk-based authentication?
- AI: Sure, throw some AI in there to optimize routing or predict API failures.

</v-click>

<v-click>

**Failure state**: "Our architecture diagram looks like we're finally getting
really close to figuring out who Pepe Silvia is."

</v-click>

---
transition: slide-left
layout: two-cols
---

# Audience poll: Where do you think you stand now?

- 🏆 "Feeling mature, but not legacy!"
- 🚧 "We’ve got work to do."
- 🤡 "I just realized we don’t actually have an API gateway."

::right::

![](./assets/qr-poll-02.png)

---

# What's next?

<v-click>

This model is now an open source repository on GitHub: `joelhans/api-gateway-maturity-model`

I've included details on how anyone can contribute and make the model better:

- Create issues or PRs for quick fixes
- Flesh out the model with more depth and detail for each level and capability
thread
- Extend the model into decision-maker territory
- Explore how to connect to other CNCF maturity models
- Contribute real-world experiences to create "illustrations" for each level

</v-click>

<v-click>

You can also read the model in a more human-readable format at `api-gateway-maturity.joelhans.xyz`.

- Fun fact: This is published entirely via an ngrok cloud endpoint!
- The `README.md` is published via simple script that renders the Markdown and creates a
cloud endpoint on the ngrok network, with the HTML as a custom `200` response.

</v-click>

---
transition: fade
layout: two-cols
---

# Questions?

::right::

![Link to api-gateway-maturity.joelhans.xyz](./assets/qr-code.png)

<style>
p {
    margin: 0;
}
img {
    max-width: 200px;
}
</style>
