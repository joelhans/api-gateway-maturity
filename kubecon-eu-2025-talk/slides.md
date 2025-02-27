---
theme: dracula

title: "API Gateway Maturity Matrix: Where Do You Rank?"

mdc: true
fonts:
  sans: Euclid Square
  mono: Fira Code
  local: Euclid Square
---

# The API Gateway Maturity Matrix

## *Where Do You Rank?*

<p v-click class="center warning">v0.0.1</p>

<style>
  h1 { font-size: 3.2rem; text-align: center; }
  h2 { font-size: 1.65rem; text-align: center; }
  .warning {
    display: block;
    font-family: monospace;
    font-size: 4rem;
    background: white;
    color: red;
    rotate: 2deg;
    margin: 0;
    padding: 2rem;
    border: 1px solid red;
  }
</style>

<!--

FOR NGROK

Okay, Sam gave me the really good but very terrifying idea of asking the entire
company for feedback on my upcoming KubeCon talk about the idea of API gateway
maturity.

FOR KUBECON

About me: I'm Joel, and I do all things DevRel at ngrok, the universal gateway
company. I love stories, so let me start with a short one loosely based on
ngrok itself.

-->

---

> Every API needs a front door, but many organizations struggle to define what
> "done" means for their API gateway implementation. Is authentication and rate
> limiting enough? What about multi-region failover or self-service development
> environments?
> 
> In this talk, we'll build on the CNCF's Cloud Native Maturity Model to create
> a practical framework for API gateway evolution across five key phases: Build
> (choosing fundamentals), Operate (implementing CI/CD), Scale (mastering
> multi-region), Improve (balancing control with velocity), and Adapt (enabling
> advanced patterns).
>
> Through real-world examples and interactive audience polling, we'll identify
> where most organizations get stuck and discuss concrete solutions using
> popular tools. You'll walk away with a clear assessment of your current API
> gateway maturity and practical tips for implementing critical capabilities
> like GitOps workflows, nuanced rate limiting, and self-service developer
> environments.

<style>
.slidev-layout blockquote > * {
    margin-top: 1rem;
    margin-bottom: 1rem;
}
</style>

---

![](./assets/python.png){width=120 v-click.hide="3" .center style="rotate: 5deg;"}
![](/assets/nginx.png){width=300 v-click .center style="margin-top: -70px; margin-left: -40px; rotate: -8deg;"}
![](./assets/k8s.png){width=180 v-click .center style="margin-top: 60px; margin-left: 100px;"}

<div v-click style="position: absolute; display: block; left: 80px; top: 80px; rotate: 3deg;">

![](./assets/go.png){width=80}
![](./assets/go.png){width=80}
![](./assets/go.png){width=80}
![](./assets/go.png){width=80}
![](./assets/go.png){width=80}
![](./assets/go.png){width=80}

<v-click at="8">
    <span class="v2">
        v2
    </span>
</v-click>
<v-click at="8">
    <span class="v2" style="top: 168px;">
        v2
    </span>
</v-click>
<v-click at="8">
    <span class="v2" style="top: 310px;">
        v2
    </span>
</v-click>

</div>

![](./assets/docusaurus.png){v-click width=130 .center style="margin-left: -120px; margin-top: 120px; rotate: 3deg"}
![](./assets/webflow.png){v-click width=130 style="position: absolute; top: -30px; right: -40px; rotate: -20deg"}
![](./assets/vercel.png){v-click width=120 height=120 style="position: absolute; bottom: 40px; right: 140px;"}
![](./assets/remix.png){v-click width=150 style="position: absolute; top: -20px; right: -20px; rotate: -10deg"}

<div v-click style="position: absolute; display: block; top: -120px; right: 340px; rotate: 102deg;">

![](./assets/go.png){width=80}
![](./assets/go.png){width=80}
![](./assets/go.png){width=80}
![](./assets/go.png){width=80}
![](./assets/go.png){width=80}
![](./assets/go.png){width=80}

</div>

<style>
    .v2 {
        position: absolute; 
        top: 27px; 
        left: 34px; 
        font-family: monospace; 
        font-size: 0.9rem; 
        background: white;
        color: var(--purple);
        padding: 0 0.2rem; 
        border: 1px solid red;
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

![](./assets/ngrok.png){width=220 .center style="margin-top: -200px;"}

<div style="position: absolute; display: flex; width: 400px; flex-flow: wrap; bottom: 0; left: 20px;">
<img src="./assets/k8s.png" style="position: absolute; top: -145px; left: 140px; width: 140px;" />
<img src="./assets/go.png" style="width: 80px;" />
<img src="./assets/go.png" style="width: 80px;" />
<img src="./assets/go.png" style="width: 80px;" />
<img src="./assets/go.png" style="width: 80px;" />
<img src="./assets/go.png" style="width: 80px;" />
<img src="./assets/go.png" style="width: 80px;" />
<img src="./assets/go.png" style="width: 80px;" />
<img src="./assets/go.png" style="width: 80px;" />
<img src="./assets/go.png" style="width: 80px;" />
<img src="./assets/go.png" style="width: 80px;" />
<img src="./assets/go.png" style="width: 80px;" />
<img src="./assets/go.png" style="width: 80px;" />
</div>

<div style="position: absolute; display: flex; align-items: center; justify-content: space-between; width: 400px; gap: 20px; flex-flow: wrap; bottom: 20px; right: 60px;">
<img src="./assets/docusaurus.png" style="width: 130px;" />
<img src="./assets/webflow.png" style="width: 130px;" />
<img src="./assets/vercel.png" style="width: 120px; height: 120px;" />
<img src="./assets/remix.png" style="width: 150px;" />
</div>

<!--

1. An API gateway brings order to that chaos.

-->

---
transition: slide-up
disabled: true
---

<v-click>

# An API gateway is...

A "front door" to all your APIs.

A single URL to expose all your APIs to the wild world outside your network.

A way to offload non-functional requirements like AuthN/AuthZ, load balancing,
rate limiting, failover, scaling, and much more from your services.

</v-click>

<v-click>

# You (probably) need one because…

They're designed specifically to solve the problem of the sprawling ecosystem I
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

- "The API won't change underneath me."
- "When I get paged because something is broken, it's because of a bug in my
software and not the infrastructure breaking down. `:lolsob:`"
- "Don't conflate maturity with quality."
- "Wide adoption, but sometimes crusty."

</v-click>

---
transition: slide-up
---

# Maturity isn’t always a good thing.

- There's a fine line between *mature* and *legacy*.
- Mature platforms are difficult for you to modify and others to build upon.
- No one understands how a mature platform works anymore, whether that’s lost institutional
knowledge or it just worked once so leave it alone.
- Hard to steer the ship quickly if you need to do something complex... like
multicloud (yikes).

<v-click>

## But it _can_ be a conscious effort to get you:

- Reliability without surprises.
- Velocity without chaos.
- Scalability without rip-and-replace (again).
- Governance without bureaucracy.

</v-click>

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
struggled. 

CNCF is agnostic:

- They won't tell us what technology or projects to use!
- They won't tell us how to get better at a single technology or product! (except
maybe K8s itself)

Fast forward, and I'm in a place where I think about and write about and build
around API gateways all the time. Why not apply this methodology to a specific
technology?

-->

---
transition: slide-left
layout: two-cols
disabled: true
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
estimates of progress_ <span style="display: block; position: absolute; font-size: 12px; font-style: italic; margin-top: -12px; right: 80px;">TY Martin Fowler!</span> rather than broad cross-functional or cultural change.
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

1. I wanted to align maturity with capabilities and implementation rather than
   trying to focus on platform engineering as a whole. An API gateway won't
   drive an entire infra organization.

2. This includes cloud-specific, self-hosted, and managed gateway products, but
   if you're creating your own API gateway, go read some engineering blogs from
   Uber or Tinder or Digital Ocean.

3. I want this to be (at least for now) simple. That means something you can
   actually read, self-identify, and implement—not need a professional services
   team to do that for you.

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

1. These levels come directly from CNCF's Cloud Native Maturity Model.

2. I'm trying to be a little cheeky with these, but I hope you can see the
progression from building for yourself toward building toward others.

3. Then reaching a state of maturity that has all the good qualities.

-->

---
transition: slide-left
---

# Don't forget the capability threads!

1. Deployment & automation
2. Routing & availability
3. AuthN+AuthZ+security
4. Traffic management
5. Observability & debugging
6. Developer experience
7. Governance

<!--

1. I've taken some liberties with these groups, but I want to minimize the
dimensions as much as possible.

FOR NGROK

This would be a great place for feedback because it has a lot of downstream
impact on the rest of the model.

-->

---
transition: slide-up
---

# Level 1: Build

**You see the value of API gateways can bring to your platform and are ready to
build a solid foundation for managing API traffic and treating APIs as
products.**

<div style="font-size:0.8rem">

|    |    |
| -- | -- |
| Deployment & automation | Deployments and configuration changes all happen manually in a ticket-driven process or click ops |
| Routing & availability | Static routing + load balancing to upstreams with manual failover via a mix of basic ingress and API gateway |
| AuthN+AuthZ+security | Relies on API keys and Basic Auth, some handled at the app/service layer instead of the gateway |
| Traffic management | Basic rate limits applied at the API gateway to prevent abuse and ensure fairness |
| Observability & debugging | Basic logs (response types/times/errors) collected at both pod and gateway, followed by manual debugging |
| Developer experience | Developers rely on DevOps/infra team to provision API deployments; little to no documentation |
| Governance | Security policies manually enforced (perhaps inconsistently) during (perhaps infrequent) audits |

</div>

<!--

1. The most consistent thing is inconsistency here. Some apps still haven't
   offloaded functions like auth, and the idea of a consistent front door isn't
   solid yet.

2. Every capability thread is active, but not in a way that's meaningfully
   consistent or automated.

3. Kubernetes is mostly used as an infrastructure layer—think routing.

-->

---
transition: slide-left
layout: quote
---

**Failure state**: "Our routing is a labyrinth and we're still hardcoding auth.
Can we go back in time to the load balancer days? Is it going to be like this
forever??"

![](./assets/this-is-fine.jpg){width=800 .center v-click}

<!--

1. Things start ad-hoc and they stay ad-hoc.

-->

---
transition: slide-up
---

# Level 2: Operate

**You're over ad-hoc changes and are ready to embrace a culture of automation,
which in turn gets both best pratices but your first taste of governance.**

<div style="font-size:0.8rem">

|    |    |
| -- | -- |
| Deployment & automation | Gateway configs are controlled via IaC and deployed with standardized tooling or GitOps |
| Routing & availability | DDoS protection, global+dynamic load balancing, weighted traffic splitting for blue/green, canary deploys |
| AuthN+AuthZ+security | Support for JWTs or OAuth2, centrally managed and provisioned |
| Traffic management | Per-service and per-client rate limits; feature-flagging and A/B testing methods |
| Observability & debugging | Structured logs ingested into a single platform (stretch goal for distributed tracing!) |
| Developer experience | Self-service internal registry via OpenAPI/Swagger to discover/understand APIs without infra/DevOps involvement |
| Governance | Somepolicies (auth, logs, rate limits) standardized across all APIs, supported by emerging API design/style specs |

</div>

<!--

1. You replacing ad-hoc steps with automation.

2. You take your first steps to apply those essential policies like auth
   across all your APIs with a single front door that fans out to everything
   else with the developers being none the wiser.

3. You're starting to use more native K8s tooling to configure your gateways and
   make it all manageable. Does the word 'operator' ring a bell for anyone?

-->

---
transition: slide-left
layout: quote
---

**Failure state**: “Every change requires a Slack war, a handful of Linear
tickets, and a few days from everyone’s life.” 

![](./assets/tickets.png){width=600 .center v-click}

---
transition: slide-up
---

# Level 3: Scale

**You're ready to stop fighting fires and build for distributed, multi-region
(maybe multicloud?), and multi-team usage.**

<div style="font-size:0.8rem">

|    |    |
| -- | -- |
| Deployment & automation | Native technologies fully in use—K8s operators and CI/CD for multi-environment deploys and best ingress |
| Routing & availability | Multi-region deployments with failover; round-robin/latency-based/sticky load balancing |
| AuthN+AuthZ+security | Fine-grained access control, multi-tenant isolation, mTLS, and clear boundaries between business domains |
| Traffic management | Per-region and per-tenant limits plus dynamic throttling based on load or error (circuit breakers) |
| Observability & debugging | Centralized API monitoring to make the API gateway the first step in incident response |
| Developer experience | Teams can provision API gateways per project/function with central governance |
| Governance | API gateway compliance enforced via CI/CD and automated policy check jobs |

</div>

<!--

1. This is the multi-everything stage. You get distributed and you get a little
   bit dynamic.

2. Even if you're not ready to actually implement some of these big engineering
   efforts, you have a plan of action for both the people and technology
   required.

3. You're giving developers the ability to use your API gateway's K8s tooling,
   which is the first step in becoming a platform.

-->

---
transition: slide-left
layout: quote
---

**Failure state**: “This is _our_ platform. It works. It's beautiful! Its highly
available and properly governed and fully automated—*WAIT DON'T TOUCH THAT*—”

![](./assets/fra-gee-lay.gif){width=600 .center v-click}

---
transition: slide-up
---

# Level 4: Improve

**You're done with ticket-based development and bottlenecking your
peers&mdash;time to become an enabler for self-service (without things going all
wild west on you).**

<div style="font-size:0.8rem">

|    |    |
| -- | -- |
| Deployment & automation | Developers define APIs and gateways all the way to production all by their lonesome! |
| Routing & availability | Dynamic routing to support new or changing APIs; custom load balancing (PEWMA+weighting, proximity+load) |
| AuthN+AuthZ+security | Security teams define auth under policy-as-code for developers to self-service within compliance boundaries |
| Traffic management | Per-service blocks (geo, IPs), limits, and breakers are developer-defined and composed after global policies |
| Observability & debugging | Easier debugging with inspection/replay; dashboards designed for self-service |
| Developer experience | Templates/recipes for API development&rarr;deployment on golden paths, supported by docs |
| Governance | Developers can take new APIs into production without tearing down all the precious compliance work! |

</div>

<!--

1. This is where your role evolves completely from building for yourself to
   building for others. You're doing everything in your power to not be a
   gatekeeper for others.

2. Your end goal is to make your platform better than building on monoliths—you
   give them more features built-in, more metrics, more dashboards, better error
   handling.

3. This is a big orchestration of IaC and Policy as Code that keeps people on
   the right rails and never gets in their way—composability makes a big
   difference to allow them to build on top of your platform, not undermine or
   override it.

-->

---
transition: slide-left
layout: quote
---

**Failure state**: "We built a developer platform... hope you like it?"

![](./assets/puss-in-boots.jpg){width=600 .center v-click}

---
transition: slide-up
---

# Level 5: Adapt

**You're actively supporting emerging patterns while sticking to a long-term API
strategy... and not overcomplicating your architecture without a clear ROI.**

<div style="font-size:0.8rem">

|    |    |
| -- | -- |
| Deployment & automation | Gateways are policy-driven, dynamic, aware of changes to topology/workload, and autonomous |
| Routing & availability | Routing/LB gets fully dynamic based on request hedging, slow starts, server metrics (ORCA standard) |
| AuthN+AuthZ+security | API access isn't just on (nice token! nice cert!) or off, but based on user behavior and threat intelligence  |
| Traffic management | Limits of all types are auto-adjusted based on workload patterns and predictive analytics |
| Observability & debugging | Observability dashboards extend to strategic value of API gateway; RCA and remediation goes AI-driven |
| Developer experience | Consistant API development tooling with active recommendations of best practices or improvements |
| Governance | Compliance monitoring adjusts gateway policies in real-time based on new threats or regulatory changes |

</div>

<!--

1. This is where things get real fuzzy but maybe also fun?. A lot of this isn't
   baked into API gateway products directly, so that means lots of integrations
   and data egress and so on.

2. I could've honestly put *AI AI AI* on every one of these, but it's not quite
   clear whether that's actually the future of this slice of technology.

3. Every part of this is based on Kubernetes tooling and telemetry—nothing is
   static any more.

-->

---
transition: slide-left
layout: quote
---

**Failure(?) state**: "Our architecture diagram looks like we're finally getting
really close to figuring out who Pepe Silvia is."

![](./assets/pepe-silvia.jpg){width=600 .center v-click}

<!--

1. Let's be honest—if you've gotten to this point, you really haven't failed at
all.

-->

---
transition: slide-left
layout: two-cols
disabled: true
---

# Audience poll: Where do you think you stand now?

- 🏆 "Feeling mature, but not legacy!"
- 🚧 "We’ve got work to do."
- 🤡 "I just realized we don’t actually have an API gateway."

::right::

![](./assets/qr-poll-02.png)

---

# What's next?

This model is now on GitHub: `joelhans/api-gateway-maturity-model`

I've included details on how anyone can contribute and make the model better:

- Flesh out the model with more depth and detail for each level and capability
thread
- Pitch more capability threads (while maintaining "simplicity")
- Extend the model into decision-maker territory
- Explore how to connect to other CNCF maturity models
- Contribute real-world experiences to create "illustrations" for each level

<v-click>

You can also read the model at `https://api-gateway-maturity.joelhans.xyz`.

- Fun fact: This is published entirely via an ngrok cloud endpoint!
- I have a small script that renders the `README.md` file into HTML, drops that
  into an HTML template, inserts *that* into a `custom-response` Traffic Policy
  action, and finally pushes the full policy file to my cloud endpoint with
  `ngrok api endpoints update ...`.

</v-click>

<div v-click style="
    position: absolute; 
    bottom: 20px; 
    right: 100px;
    rotate: 2deg;
">

<div style="
    color: var(--purple); 
    font-size: 3rem;
    z-index: 100;
    position: absolute;
    right: 100px;
">
    wen
</div>

```
on_http_request:
  - actions:
      - type: bye-github-pages
        config:
          source: https://github.com/joelhans/api-gateway-maturity-model/
          theme: chill-snowman
```

</div>

<!--

FOR NGROK

1. I want to take a minute to talk about why anyone here should care. Why give
   feedback? Why make this better?

   - Other than to spare the embarassment of standing on stage in London in
     front of a bunch of disappointed Europeans?
   - This could become some kind of assessment tool for customers who want to
     self-identify and get guidance on what features/recipes to look into next.
   - Or, like I was talking about with Jack yesterday, we could grab usage
     signals and give customers reports on where they stand and could build
     next.
   - Maybe guides around capability threads? A walkthrough of API gateway
     maturity on ngrok?

-->

<style>
.slidev-code-wrapper {
    margin: 0 !important;
}
</style>

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
</style>
